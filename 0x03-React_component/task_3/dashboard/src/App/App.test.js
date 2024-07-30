import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App'
import Notification from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

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
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(Login).exists()).toBe(false);
    expect(wrapper.find(CourseList).exists()).toBe(true);
  });
  beforeEach(() => {
    global.alert = jest.fn();
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('Checks that the logOut function is called and the alert function is called when pressing ctrl + h', () => {
    const logOut = jest.fn();
    const wrapper = mount(<App logOut={logOut}/>);
    const event = new KeyboardEvent('keydown', {
      key: 'h',
      ctrlKey: true
    });
    document.dispatchEvent(event);
    expect(global.alert).toHaveBeenCalledWith('Logging you out');
    expect(logOut).toHaveBeenCalled();
  });
});
