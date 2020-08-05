import React, { useState } from 'react';
import PokemonList from '../components/PokemonList'
import useFetch from '../hooks/useFetch'
import Pagination from '../components/Pagination'

function Home () {
  
  const [page, setPage] = useState(1)

  const {data: pokemons, loading, error} = useFetch(`https://api.pokemontcg.io/v1/cards?page=${page}`, page)

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
      <PokemonList pokemons={pokemons} error={error} loading={loading}></PokemonList>
      <Pagination minus={minus} plus={plus} page={page}></Pagination>
    </>
  )
}

export default Home;
