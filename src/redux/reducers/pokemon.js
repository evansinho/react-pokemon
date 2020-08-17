import { GET_POKEMONS, GET_POKEMON } from '../constants/actionTypes';

const initialState = {
  pokemons: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    case GET_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
      };
    default:
      return state;
  }
}
