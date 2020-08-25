/* eslint-disable import/prefer-default-export */
export const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(attr);
  return wrapper;
};
