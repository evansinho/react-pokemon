import { GET_POKEMONS } from '../constants/actionTypes';

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
    default:
      return state;
  }
}
