/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/Pokemon.css';

const Pokemon = ({ pokemon }) => (
  <div className="card m-2 d-inline-flex text-center pokemon-card" style={{ width: '9.5rem' }}>
    <Link to={`/pokemon/${pokemon.id}`}>
      <img src={pokemon.sprites.front_shiny} className="card-img-top" alt="images" />
      <p>
        #
        {pokemon.id}
      </p>
      <h5>{pokemon.name}</h5>
    </Link>
  </div>
);

Pokemon.propTypes = {
  pokemon: PropTypes.shape({}).isRequired,
};

export default Pokemon;
