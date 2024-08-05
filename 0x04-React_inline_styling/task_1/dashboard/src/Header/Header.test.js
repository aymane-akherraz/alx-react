import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header'
import { StyleSheetTestUtils } from 'aphrodite';

describe('Header Component', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('renders without crashing', () => {
    shallow(<Header />);
  });
  it('renders <img> and <h1> tags', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('h1').length).toBe(1);
  });
});
