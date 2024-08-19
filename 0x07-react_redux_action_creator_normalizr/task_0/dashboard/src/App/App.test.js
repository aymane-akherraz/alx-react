import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App'
import Notification from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext, { defaultLogOut } from './AppContext';

// Suppress style injection
StyleSheetTestUtils.suppressStyleInjection();
describe('App Component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
  it('renders <Notification /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notification)).toHaveLength(1);
  });
  it('renders <Header /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });
  it('renders <Login /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login)).toHaveLength(1);
  });
  it('renders <Footer /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
  it('checks that <CourseList /> is not displayed', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList).exists()).toBe(false);
  });
  it('checks that <CourseList /> is displayed and the <Login /> is not included', () => {
    const user = {email: 'test@email.com', password: 'testPwd', isLoggedIn: true};
    const wrapper = shallow(<App />);
    wrapper.setState({ user });
    expect(wrapper.find(Login).exists()).toBe(false);
    expect(wrapper.find(CourseList).exists()).toBe(true);
  });
  beforeEach(() => {
    global.alert = jest.fn();
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('Verify that the default state for displayDrawer is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('displayDrawer')).toEqual(false);
  });
  it('Verify that after calling handleDisplayDrawer and handleHideDrawer updates the state', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    instance.handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toEqual(true);
    instance.handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toEqual(false);
  });
  it('Verify that  the logIn function updates the state correctly', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    instance.logIn('test@email.com', 'testPwd');
    const state = wrapper.state(); 
    expect(state.user.email).toEqual('test@email.com');
    expect(state.user.password).toEqual('testPwd');
    expect(state.user.isLoggedIn).toEqual(true);
  });
  it('Verify that  the logIn function updates the state correctly', () => {
    const wrapper = shallow(<App />);
		wrapper.setState({
			user: {
				email: 'test@email.com',
				password: 'testPwd',
				isLoggedIn: true,
			},
		});
		wrapper.state().logOut();
		expect(wrapper.state().user.email).toBe('');
		expect(wrapper.state().user.password).toBe('');
		expect(wrapper.state().user.isLoggedIn).toBe(false);
  })
  it('markNotificationAsRead works as intended', () => {
    const wrapper = shallow(<App />);
		wrapper.setState({
      listNotifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
      ]
    });
    const instance = wrapper.instance();
    instance.markNotificationAsRead(2);
    expect(wrapper.state('listNotifications')).toEqual([{ id: 1, type: "default", value: "New course available" }]);
  });
});
