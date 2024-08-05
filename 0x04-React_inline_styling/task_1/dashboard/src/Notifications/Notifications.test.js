import React from 'react';
import { shallow } from 'enzyme';
import Notifications from '../Notifications/Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Notifications Component', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  const listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: { __html: getLatestNotification() } }
  ]
  const longListNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
    { id: 4, type: "default", value: "New course available" },
    { id: 5, type: "urgent", value: "New resume available" },
    { id: 6, type: "urgent", html: { __html: getLatestNotification() } }
  ]
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });
  it('renders three <NotificationItem> components', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });
  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
    expect(wrapper.text()).toContain('Here is the list of notifications');
  });
  it('first <NotificationItem> element renders the right html"', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const ulElement = wrapper.find('ul');
    const firstChild = ulElement.children().first();
    expect(firstChild.html()).toEqual('<li data-notification-type="default">New course available</li>');
  });
  it('the menu item is being displayed when displayDrawer is false', () => {
    let wrapper = shallow(<Notifications />);
    let menuItemDiv = wrapper.find('div').filterWhere(n => n.prop('className') && n.prop('className').startsWith('menuItem_'));
    expect(menuItemDiv.exists()).toBe(true);
    expect(wrapper.find('div.notifs').exists()).toBe(false);
    wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    menuItemDiv = wrapper.find('div').filterWhere(n => n.prop('className') && n.prop('className').startsWith('menuItem_'));
    expect(menuItemDiv.exists()).toBe(true);
    const notifs = wrapper.find('div').filterWhere(n => n.prop('className') && n.prop('className').startsWith('notifs_'));
    expect(notifs.exists()).toBe(true);
  });
  it("renders correctly if you pass an empty array or if you don't pass the listNotifications property", () => {
    shallow(<Notifications listNotifications={[]} />);
    shallow(<Notifications />);
  });
  it('renders notifications correctly and with the right number of NotificationItem', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });
  it('renders Here is the list of notifications and No new notification for now correctly', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.text()).toContain('No new notification for now');
    expect(wrapper.text()).not.toContain('Here is the list of notifications');
  });
  beforeEach(() => {
    global.console.log = jest.fn();
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('the spy is being called with the right message', () => {
    const wrapper = new Notifications();
    wrapper.markAsRead(1);
    expect(global.console.log).toHaveBeenCalledWith('Notification 1 has been marked as read');
  });
  it("the component doesn't rerender when updating the props of the component with the same list", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />)
    const initialHTML = wrapper.html();
    wrapper.setProps({listNotifications: listNotifications});
    expect(wrapper.html()).toEqual(initialHTML);
  });
  it("the component does rerender when updating the props of the component with the a longer list", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />)
    const initialHTML = wrapper.html();
    wrapper.setProps({listNotifications: longListNotifications});
    expect(wrapper.html()).not.toEqual(initialHTML);
  });
});
