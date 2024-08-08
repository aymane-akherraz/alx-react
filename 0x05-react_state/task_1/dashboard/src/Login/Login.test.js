import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login'
import { StyleSheetTestUtils } from 'aphrodite';

// Suppress style injection
StyleSheetTestUtils.suppressStyleInjection();
describe('Login Component', () => {
  it('renders without crashing', () => {
    shallow(<Login />);
  });
  it('renders two <input> and two <label> tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input').length).toBe(3);
    expect(wrapper.find('label').length).toBe(2);
  });
  it('Verify that the submit button is disabled by default', () => {
    const wrapper = shallow(<Login />);
    const element = wrapper.find('input').last();
    const props = element.props();
    expect(props.type).toBe('submit');
    expect(props.disabled).toBe(true);
  });
  it('Verify that after changing the value of the two inputs, the button is enabled', () => {
    const wrapper = shallow(<Login />);
    wrapper.find('input').first().simulate('change', { target: {value: "test@email.com" } });
    wrapper.find('input').at(1).simulate('change', { target: {value: "testPwd" } });
    const element = wrapper.find('input').last();
    const attributeValue = element.prop('disabled');
    expect(attributeValue).toBe(false);
  });
});
