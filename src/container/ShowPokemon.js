/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPokemon } from '../redux/actions';

const ShowPokemon = ({ getPokemon, pokemon, match }) => {
  useEffect(() => {
    const { id } = match.params;
    getPokemon(id);
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h1>{pokemon.id}</h1>
    </div>
  );
};

ShowPokemon.propTypes = {
  pokemon: PropTypes.shape({}).isRequired,
  getPokemon: PropTypes.func.isRequired,
};

const mapStateToProp = state => ({
  pokemon: state.pokemon.pokemon,
});

export default connect(mapStateToProp, { getPokemon })(ShowPokemon);
