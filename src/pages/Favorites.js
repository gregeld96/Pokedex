import React from 'react'
import { useSelector } from "react-redux"
import PokemonList from '../components/PokemonList'

function Favorite () {
    const pokemons = useSelector(state => state.pokemon.pokemons)

    const newPokemons = [...new Set(pokemons)]

    return (
        <PokemonList pokemons={newPokemons} />
    )
}

export default Favorite