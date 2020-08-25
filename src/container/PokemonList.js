/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPokemons, changeFilter } from '../redux/actions';
import Pokemon from '../components/Pokemon';
import CategoryFilter from '../components/CategoryFilter';

const PokemonList = ({
  getPokemons, pokemons, changeFilter, filter,
}) => {
  useEffect(() => {
    getPokemons();
    // eslint-disable-next-line
  }, []);

  const handleFilterChange = e => {
    const { value } = e.target;
    changeFilter(value);
  };

  const filteredPokemons = () => (filter === 'ALL' ? pokemons : pokemons.filter(pokemon => {
    const arr = pokemon.types;

    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].type.name === filter) return true;
    }
    return false;
  }));

  return pokemons === null ? <h1>Loading....</h1> : (
    <div>
      <CategoryFilter handleChange={handleFilterChange} />
      {filteredPokemons().map(pokemon => (
        <Pokemon key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

PokemonList.propTypes = {
  pokemons: PropTypes.array.isRequired,
  getPokemons: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  pokemons: state.pokemon.pokemons,
  filter: state.filter,
});

export default connect(mapStateToProps, { getPokemons, changeFilter })(PokemonList);
