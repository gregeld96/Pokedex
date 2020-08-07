import React, { useState, useEffect } from 'react';
import PokemonList from '../components/PokemonList'
import Pagination from '../components/Pagination'
import { useSelector, useDispatch } from 'react-redux'
import { setPokemonAsync } from '../store/actions/pokemonAction'

function Home () {
  
  const [page, setPage] = useState(1)
  const dispatch = useDispatch()
  const pokemons = useSelector(state => state.setPokemon.pokemons)
  const loading = useSelector(state => state.setPokemon.loading)

  useEffect (() => {
    dispatch (setPokemonAsync(`https://api.pokemontcg.io/v1/cards?page=${page}`))
  }, [page])

  const plus = () => {
    const newPage =  Number(page) + 1
    setPage(newPage)
  }

  const minus = () => {
    const newPage =  Number(page) - 1
    setPage(newPage)
  }

  if (loading) return (<h1 data-testid="loading" className="text-center">Loading....</h1>)
  if (pokemons.length < 100) return (<PokemonList pokemons={pokemons}></PokemonList>)
  return (
    <div data-testid="home">
      <PokemonList pokemons={pokemons} loading={loading}></PokemonList>
      <Pagination minus={minus} plus={plus} page={page}></Pagination>
    </div>
  )
}

export default Home;
