/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Pokemon = ({ pokemon }) => (
  <div className="card m-2 d-inline-flex text-center" style={{ width: '8rem' }}>
    <img src={pokemon.sprites.front_shiny} className="card-img-top" alt="images" />
    <p>
      #
      {pokemon.id}
    </p>
    <h5>{pokemon.name}</h5>
  </div>
);

Pokemon.propTypes = {
  pokemon: PropTypes.shape({}).isRequired,
};

export default Pokemon;
