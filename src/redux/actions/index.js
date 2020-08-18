/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { GET_POKEMONS, GET_POKEMON } from '../constants/actionTypes';

export const getPokemons = () => async dispatch => {
  try {
    const allPokemon = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
    const pokemonData = await Promise.all(allPokemon.data.results.map(async pokemon => {
      const pokemonRecord = await axios.get(pokemon.url);
      return pokemonRecord.data;
    }));
    dispatch({
      type: GET_POKEMONS,
      payload: pokemonData,
    });
  } catch (err) {
    console.log(err);
  }
};

// https://pokeres.bastionbot.org/images/pokemon/2.png;
export const getPokemon = id => async dispatch => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    dispatch({
      type: GET_POKEMON,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
