import { ADD_FAVOURITE_POKEMON, SET_POKEMONS } from "./types"

export const addFavouritePokemon = (pokemon) => {
    return {
        type: ADD_FAVOURITE_POKEMON,
        payload: pokemon
    }
}

export const setPokemon = (pokemons) => {
    return {
        type: SET_POKEMONS,
        payload: pokemons
    }
}

export function setPokemonAsync (url) {
    return (dispatch) => {
        fetch(url)
        .then(res => res.json())
        .then(responseData => {
            dispatch(setPokemon(responseData.cards))
        })
    }
} 