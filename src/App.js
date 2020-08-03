import React from 'react';
import './App.css';
import PokemonList from './components/PokemonList'
import Navbar from './components/Navbar'

class App extends React.Component{

  constructor () {
    super()
    this.state = {
      pokemons: []
    }
  }

  componentDidMount () {
    fetch("https://api.pokemontcg.io/v1/cards")
    .then(res => res.json())
    .then(data => {
      this.setState({
        pokemons: data.cards
      })
    })
    .catch(console.log())
  }

  filterPokemon = (filter) => {
    this.setState({
      pokemons: filter
    })
  }

  render () {

    const { pokemons } = this.state

    return (
      <>
        <Navbar filterPokemon={this.filterPokemon}></Navbar>
        <PokemonList pokemons={pokemons}></PokemonList>
      </>
    )
  }
}

export default App;
