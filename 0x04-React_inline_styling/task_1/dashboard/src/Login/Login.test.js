import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login'
import { StyleSheetTestUtils } from 'aphrodite';

describe('Login Component', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('renders without crashing', () => {
    shallow(<Login />);
  });
  it('renders two <input> and two <label> tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input').length).toBe(2);
    expect(wrapper.find('label').length).toBe(2);
  });
});
