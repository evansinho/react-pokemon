import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PokemonList from '../container/PokemonList';
import ShowPokemon from '../container/ShowPokemon';

import '../styles/App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="nav">
          <h1>POKEDEX</h1>
        </div>
        <Switch>
          <Route exact path="/" component={PokemonList} />
          <Route exact path="/:id" component={ShowPokemon} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
