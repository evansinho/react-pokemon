/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from '../helpers';
import Pokemon from '../../components/Pokemon';

describe('Pokemon Component', () => {
  describe('Component Renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        pokemon: {
          id: 1,
          name: 'bulbasaur',
        },
      };
      wrapper = shallow(<Pokemon {...props} />);
    });

    it('Should renders without error', () => {
      const component = findByTestAtrr(wrapper, '.pokemon-card');
      expect(component.length).toBe(1);
    });

    it('Should render an image', () => {
      const image = findByTestAtrr(wrapper, '.card-img-top');
      expect(image.length).toBe(1);
    });

    it('Should render pokemon name', () => {
      const name = findByTestAtrr(wrapper, '.name');
      expect(name.length).toBe(1);
    });
  });
});
