/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPokemons } from '../redux/actions';
import Pokemon from '../components/Pokemon';

const PokemonList = ({ getPokemons, pokemons }) => {
  useEffect(() => {
    getPokemons();
  });

  return (
    <div>
      {pokemons.map(pokemon => (
        <Pokemon key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

PokemonList.propTypes = {
  pokemons: PropTypes.array.isRequired,
  getPokemons: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  pokemons: state.pokemon.pokemons,
});

export default connect(mapStateToProps, { getPokemons })(PokemonList);
