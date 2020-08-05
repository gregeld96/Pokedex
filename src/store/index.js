import { createStore } from 'redux'
import pokemon from "./reducers/pokemonReducer"

const store = createStore(pokemon)

export default store;