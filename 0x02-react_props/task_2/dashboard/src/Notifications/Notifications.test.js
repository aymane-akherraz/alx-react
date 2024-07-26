import React from 'react';
import { shallow } from 'enzyme';
import GetNotifs from '../Notifications/Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications Component', () => {
  it('renders without crashing', () => {
    shallow(<GetNotifs />);
  });
  it('renders three <NotificationItem> components', () => {
    const wrapper = shallow(<GetNotifs />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });
  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<GetNotifs />);
    expect(wrapper.text()).toContain('Here is the list of notifications');
  });
  it('first <NotificationItem> element renders the right html"', () => {
    const wrapper = shallow(<GetNotifs />);
    const ulElement = wrapper.find('ul');
    const firstChild = ulElement.children().first();
    expect(firstChild.html()).toEqual('<li data-notification-type="default">New course available</li>');
  });
});
