import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap'
import { useHistory } from "react-router-dom";

function Home () {
  let history = useHistory();

  function allCard () {
    history.push('/cardlist')
  }

  function pokemon () {
    history.push('/cardlist/pokemon')
  }

  function trainer () {
    history.push('/cardlist/trainer')
  }

  function energy () {
    history.push('/cardlist/energy')
  }

  return (
    <div className="container">
        <Jumbotron>
            <h1 className="text-center">Welcome to Pokedex Master</h1>
            <p className="text-center"> Find your favorite pokemons, trainers, and energies card, and design your deck to your pokemon glory.</p>
            <div className="d-flex justify-content-center">
                <Button variant="primary" className="m-2" onClick={allCard}>All Card</Button>
                <Button variant="primary" className="m-2" onClick={pokemon}>Pokemon</Button>
                <Button variant="primary" className="m-2" onClick={trainer}>Trainer</Button>
                <Button variant="primary" className="m-2" onClick={energy}>Energy</Button>
            </div>
        </Jumbotron>
    </div>
  )
}

export default Home;
