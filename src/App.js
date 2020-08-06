import React, { useState } from 'react';
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

export const template = React.createContext()

function App () {
   const [color, changeColor] = useState("dark")
   const [headerColor, changeHeaderColor] = useState("dark")
  return (
    <template.Provider value={{color, 
    headerColor, 
    setHeaderColor: (data) => changeHeaderColor(data), 
    setColor: (data) => changeColor(data)}}>
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
    </template.Provider>
  )
}

export default App;
