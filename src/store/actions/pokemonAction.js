import { ADD_FAVOURITE_POKEMON } from "./types"

export const addFavouritePokemon = (pokemon) => {
    return {
        type: ADD_FAVOURITE_POKEMON,
        payload: pokemon
    }
}