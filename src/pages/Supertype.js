import React, { useState, useEffect } from 'react';
import PokemonList from '../components/PokemonList'
import Pagination from '../components/Pagination'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setPokemonAsync } from '../store/actions/pokemonAction'

function Supertype () {

  let { name } = useParams()
  let supertype = null;
  let url = null

  if (name === "pokemons") supertype = "Pokemon"
  else if (name === "trainers") supertype = "Trainer"
  else if (name === "energies") supertype = "Energy"

  const [page, setPage] = useState(1)
  
  if (supertype === null) {
    url = `https://api.pokemontcg.io/v1/cards?name=${name}&&page=${page}`
  } else {
    url = `https://api.pokemontcg.io/v1/cards?supertype=${supertype}&&page=${page}`
  }

  const dispatch = useDispatch()
  const pokemons = useSelector(state => state.setPokemon.pokemons)
  const loading = useSelector(state => state.setPokemon.loading)

  useEffect (() => {
    dispatch (setPokemonAsync(url))
  }, [page, supertype, name])

  const plus = () => {
    const newPage =  Number(page) + 1
    setPage(newPage)
  }

  const minus = () => {
    const newPage =  Number(page) - 1
    setPage(newPage)
  }

  if (loading) return (<h1 className="text-center">Loading....</h1>)
  return (
    <>
      <PokemonList pokemons={pokemons} loading={loading} />
      <Pagination minus={minus} plus={plus} page={page} />
    </>
  )
}

export default Supertype;