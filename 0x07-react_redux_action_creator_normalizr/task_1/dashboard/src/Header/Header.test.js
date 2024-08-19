import React from 'react';
import { mount, shallow } from 'enzyme';
import Header from './Header'
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext, { defaultLogOut, defaultUser } from '../App/AppContext';

// Suppress style injection
StyleSheetTestUtils.suppressStyleInjection();
describe('Header Component', () => {
  it('renders without crashing', () => {
    const contextValue = { user: defaultUser, logOut: defaultLogOut };
    const wrapper = shallow(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );
  });
  it('renders <img> and <h1> tags', () => {
    const contextValue = { user: defaultUser, logOut: defaultLogOut };
    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('h1').length).toBe(1);
  });
  it('The logoutSection is not created', () => {
    const contextValue = { user: defaultUser, logOut: defaultLogOut };
    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('div#logoutSection').exists()).toBe(false);
  });
  it('The logoutSection is created', () => {
    const contextValue = { user: {email: 'test@email.com', password: 'testPwd', isLoggedIn: true}, logOut: defaultLogOut};
    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('div#logoutSection').exists()).toBe(true);
  });
  it('Clicking on the link is calling the spy', () => {
    const logOut = jest.fn();
    const contextValue = { user: {email: 'test@email.com', password: 'testPwd', isLoggedIn: true}, logOut };
    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );
    wrapper.find('a').simulate('click');
    expect(logOut).toHaveBeenCalled();
  });
});
