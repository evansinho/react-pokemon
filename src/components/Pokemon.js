/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Pokemon = ({ pokemon }) => (
  <div>
    <h1>{pokemon.name}</h1>
  </div>
);

Pokemon.propTypes = {
  pokemon: PropTypes.shape({}).isRequired,
};

export default Pokemon;
