import { ADD_FAVOURITE_POKEMON, SET_POKEMONS, SET_LOADING } from "./types"

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

export const setLoading = (status) => {
    return {
        type: SET_LOADING,
        payload: status
    }
}

export function setPokemonAsync (url) {
    return (dispatch) => {
        dispatch(setLoading(true))
        fetch(url)
        .then(res => res.json())
        .then(responseData => {
            dispatch(setPokemon(responseData.cards))
        })
    }
} 