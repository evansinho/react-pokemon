import { GET_POKEMONS, GET_POKEMON } from '../constants/actionTypes';

const initialState = {
  pokemons: [],
  pokemon: {},
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        loading: false,
      };
    case GET_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
