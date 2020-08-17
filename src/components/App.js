import React from 'react';
import PokemonList from '../container/PokemonList';
import '../styles/App.css';

function App() {
  return (
    <div className="container">
      <div className="nav">
        <h1>POKEDEX</h1>
        <input type="text" placeholder="SEARCH" />
      </div>
      <PokemonList />
    </div>
  );
}

export default App;
