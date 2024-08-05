import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

// Suppress style injection
StyleSheetTestUtils.suppressStyleInjection();
describe('NotificationItem Component', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem type='default'/>);
  });
  it('renders props well when passed in', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find('li').prop('data-notification-type')).toEqual('default');
    expect(wrapper.text()).toEqual('test');
  });
  it('renders HTML content correctly when html prop is passed', () => {
    const wrapper = shallow(<NotificationItem type='default' html={{__html: '<u>test</u>' }} />);
    expect(wrapper.html()).toContain('<u>test</u>');
  });
  it('the spy is called with the right ID argument', () => {
    const markAsRead = jest.fn();
    const wrapper = shallow(<NotificationItem markAsRead={markAsRead} id={2} />)
    wrapper.find('li').simulate('click');
    expect(markAsRead).toHaveBeenCalledWith(2);
  })
})