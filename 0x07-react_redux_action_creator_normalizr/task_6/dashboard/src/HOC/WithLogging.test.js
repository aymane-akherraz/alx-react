import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';
import { StyleSheetTestUtils } from 'aphrodite';

// Suppress style injection
StyleSheetTestUtils.suppressStyleInjection();
describe('WithLogging Component', () => {
  beforeEach(() => {
    global.console.log = jest.fn();
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('console.log was called on mount and on unmount with Component', () => {
    const EnhancedComponent = WithLogging(() => <div>Anonymous Component Content</div>);
    const wrapper = mount(< EnhancedComponent />);
    expect(global.console.log).toHaveBeenCalledWith('Component Component is mounted');
    wrapper.unmount();
    expect(global.console.log).toHaveBeenCalledWith('Component Component is going to unmount');
  });
  it('console.log was called on mount and on unmount with the Component name', () => {
    const EnhancedComponent = WithLogging(Login);
    const wrapper = mount(< EnhancedComponent />);
    expect(global.console.log).toHaveBeenCalledWith('Component Login is mounted');
    wrapper.unmount();
    expect(global.console.log).toHaveBeenCalledWith('Component Login is going to unmount');
  });
})
