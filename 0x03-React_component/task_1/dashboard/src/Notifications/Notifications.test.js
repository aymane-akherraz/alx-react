import React from 'react';
import { shallow } from 'enzyme';
import GetNotifs from '../Notifications/Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

describe('Notifications Component', () => {
  const listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: { __html: getLatestNotification() } }
  ]
  it('renders without crashing', () => {
    shallow(<GetNotifs />);
  });
  it('renders three <NotificationItem> components', () => {
    const wrapper = shallow(<GetNotifs displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });
  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<GetNotifs displayDrawer={true} listNotifications={listNotifications}/>);
    expect(wrapper.text()).toContain('Here is the list of notifications');
  });
  it('first <NotificationItem> element renders the right html"', () => {
    const wrapper = shallow(<GetNotifs displayDrawer={true} listNotifications={listNotifications} />);
    const ulElement = wrapper.find('ul');
    const firstChild = ulElement.children().first();
    expect(firstChild.html()).toEqual('<li data-notification-type="default">New course available</li>');
  });
  it('the menu item is being displayed when displayDrawer is false', () => {
    let wrapper = shallow(<GetNotifs />);
    expect(wrapper.find('div.menuItem').exists()).toBe(true);
    expect(wrapper.find('div.Notifications').exists()).toBe(false);
    wrapper = shallow(<GetNotifs displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find('div.menuItem').exists()).toBe(true);
    expect(wrapper.find('div.Notifications').exists()).toBe(true);
  });
  it("renders correctly if you pass an empty array or if you don't pass the listNotifications property", () => {
    shallow(<GetNotifs listNotifications={[]} />);
    shallow(<GetNotifs />);
  });
  it('renders notifications correctly and with the right number of NotificationItem', () => {
    const wrapper = shallow(<GetNotifs displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });
  it('renders Here is the list of notifications and No new notification for now correctly', () => {
    const wrapper = shallow(<GetNotifs displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.text()).toContain('No new notification for now');
    expect(wrapper.text()).not.toContain('Here is the list of notifications');
  });
});
