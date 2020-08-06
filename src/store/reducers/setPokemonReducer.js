import { SET_POKEMONS, SET_LOADING } from "../actions/types"

const initializeState = {
    pokemons: [],
    loading:false
}

export default (state = initializeState, action) => {
    switch (action.type) {
        case SET_POKEMONS:
            return {loading: false, pokemons: action.payload}
        case SET_LOADING:
            return {loading: action.payload, pokemons: [...state.pokemons]}
        default:
            return state;
    }
}