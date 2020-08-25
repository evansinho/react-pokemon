import pokemonReducer from '../../../redux/reducers/pokemon';

describe('Pokemon Reducer', () => {
  it('Should return default state', () => {
    const newState = pokemonReducer(undefined, { loading: true, pokemon: {}, pokemons: [] });
    expect(newState).toEqual({ loading: true, pokemon: {}, pokemons: [] });
  });
});
