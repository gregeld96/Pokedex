import React, { useState } from 'react';
import './App.css';
import PokemonList from './components/PokemonList'
import Navbar from './components/Navbar'
import useFetch from './hooks/useFetch'
import Pagination from './components/Pagination'

function App () {
  
  let filter = null
  const [page, setPage] = useState(1)
  const [name, setName] = useState(null)


  if (name) {
    filter = name
  } else {
    filter = page
  }

  const {data: pokemons, loading, error} = useFetch(`${filter}`)

  const handlePageChange = (event) => {
    setPage(event.target.value)
  }

  const filterPokemon = (name) => {
    setName(name)
  }

  const plus = () => {
    const newPage =  Number(page) + 1
    setName(null)
    setPage(newPage)
  }

  const minus = () => {
    const newPage =  Number(page) - 1
    setName(null)
    setPage(newPage)
  }

  return (
    <>
      <Navbar filterPokemon={filterPokemon}></Navbar>
      <Pagination minus={minus} plus={plus} handlePageChange={handlePageChange} page={page}></Pagination>
      <PokemonList pokemons={pokemons} error={error} loading={loading}></PokemonList>
    </>
  )
}

export default App;
