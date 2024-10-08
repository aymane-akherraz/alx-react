import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login'

describe('Login Component', () => {
  it('renders without crashing', () => {
    shallow(<Login />);
  });
  it('renders two <input> and two <label> tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input').length).toBe(2);
    expect(wrapper.find('label').length).toBe(2);
  });
});
