/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPokemon } from '../redux/actions';

const ShowPokemon = ({ getPokemon, pokemon: { pokemon, loading }, match }) => {
  useEffect(() => {
    const { id } = match.params;
    getPokemon(id);
    // eslint-disable-next-line
  }, []);
  return pokemon && loading === null ? <h1>loading...</h1> : (
    <div className="row">
      <div className="col-md-6">
        <h2>{pokemon.name}</h2>
        <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} alt="img" style={{ width: '25rem' }} />
      </div>
      <div className="col-md-6 card">
        <div className="height">
          <h3>HEIGHT</h3>
          <p>{pokemon.height}</p>
        </div>
        <div className="weight">
          <h3>WEIGHT</h3>
          <p>{pokemon.weight}</p>
        </div>
        <div className="experience">
          <h3>XP</h3>
          <p>{pokemon.base_experience}</p>
        </div>
        {/* <div className="abilities">
          <h3>ABILITIES</h3>
          {pokemon.abilities.map(ab => <span key={ab.ability.name} className="abilities">{ab.ability.name}</span>)}
        </div> */}
      </div>
    </div>
  );
};

ShowPokemon.propTypes = {
  pokemon: PropTypes.shape({}).isRequired,
  getPokemon: PropTypes.func.isRequired,
};

const mapStateToProp = state => ({
  pokemon: state.pokemon,
});

export default connect(mapStateToProp, { getPokemon })(ShowPokemon);
