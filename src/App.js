import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Navbar from './components/Navbar'
import {
  Home,
  CardList,
  Favorites,
  Pokemon,
  Trainer,
  Energy
} from './pages'

function App () {
  return (
    <Router>
      <div>
        <Navbar></Navbar>

        <Switch>
          <Route path="/cardlist/trainer">
            <Trainer />
          </Route>
          <Route path="/cardlist/energy">
            <Energy />
          </Route>
          <Route path="/cardlist/pokemon">
            <Pokemon />
          </Route>
          <Route path="/cardlist">
            <CardList />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
