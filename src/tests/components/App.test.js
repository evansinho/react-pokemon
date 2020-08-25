import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from '../helpers';
import App from '../../components/App';

const setUp = () => {
  const component = shallow(<App />);
  return component;
};

describe('App Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should render without errors', () => {
    const wrapper = findByTestAtrr(component, '.container');
    expect(wrapper.length).toBe(1);
  });
});
