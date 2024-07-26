import React from 'react';
import { shallow } from 'enzyme';
import App from './App'
import Notification from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

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
});
