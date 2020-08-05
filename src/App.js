import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Navbar from './components/Navbar'
import {
  Home,
  Favorites,
  Supertype,
  CardDetail
} from './pages'
import './App.css';

function App () {
  return (
    <Router>
      <div>
        <Navbar></Navbar>

        <Switch>
          <Route path="/pokemons/:id">
            <CardDetail />
          </Route>
          <Route exact path="/favorites">
            <Favorites />
          </Route>
          <Route exact path="/:name">
            <Supertype />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
