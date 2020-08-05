import { ADD_FAVOURITE_POKEMON } from "../actions/types"

const initializeState = {
    pokemons: [],
    loading:false
}

export default (state = initializeState, action) => {
    switch (action.type) {
        case ADD_FAVOURITE_POKEMON:
            return {loading: false, pokemons: [action.payload, ...state.pokemons]};
        default:
            return state;
    }
}