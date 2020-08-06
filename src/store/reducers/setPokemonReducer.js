import { SET_POKEMONS } from "../actions/types"

const initializeState = {
    pokemons: [],
    loading:false
}

export default (state = initializeState, action) => {
    switch (action.type) {
        case SET_POKEMONS:
            return {loading: false, pokemons: action.payload};
        default:
            return state;
    }
}