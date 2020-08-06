import { ADD_FAVOURITE_POKEMON } from "../actions/types"
import swal from 'sweetalert2'

const initializeState = {
    pokemons: [],
    loading:false
}

export default (state = initializeState, action) => {
    switch (action.type) {
        case ADD_FAVOURITE_POKEMON:
            swal.fire({
                title: 'Card Add to Favorite',
                icon: 'success',
                confirmButtonText: 'Nice!'
              })
            return {loading: false, pokemons: [action.payload, ...state.pokemons]};
        default:
            return state;
    }
}