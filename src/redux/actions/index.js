/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { GET_POKEMONS, GET_POKEMON, CHANGE_FILTER } from '../constants/actionTypes';

export const getPokemons = () => async dispatch => {
  try {
    const allPokemon = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
    const pokemonData = await Promise.all(allPokemon.data.results.map(async pokemon => {
      const pokemonRecord = await axios.get(pokemon.url);
      return pokemonRecord.data;
    }));
    dispatch({
      type: GET_POKEMONS,
      payload: pokemonData,
    });
  } catch (err) {
    dispatch({
      err,
    });
  }
};

export const getPokemon = id => async dispatch => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    dispatch({
      type: GET_POKEMON,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      err,
    });
  }
};

export const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter,
});
