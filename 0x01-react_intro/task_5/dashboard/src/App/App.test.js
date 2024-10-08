import React from 'react';
import { shallow } from 'enzyme';
import App from './App'

describe('App Component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
  it('renders an `.App-header`', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-header')).toHaveLength(1);
  });
  it('renders an `.App-body`', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-body')).toHaveLength(1);
  });
  it('renders an `.App-footer`', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-footer')).toHaveLength(1);
  });
});
