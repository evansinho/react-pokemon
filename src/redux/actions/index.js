/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { GET_POKEMONS } from '../constants/actionTypes';

export const getPokemons = () => async dispatch => {
  const allPokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/');
  dispatch({
    type: GET_POKEMONS,
    payload: allPokemon.data.results,
  });
};

// https://pokeres.bastionbot.org/images/pokemon/2.png;