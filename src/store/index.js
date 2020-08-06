import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import pokemon from "./reducers/pokemonReducer"
import setPokemon from './reducers/setPokemonReducer'

const store = createStore(combineReducers({pokemon, setPokemon}), applyMiddleware(thunk))

export default store;