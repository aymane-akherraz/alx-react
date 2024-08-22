import React from 'react';
import { mount, shallow } from 'enzyme';
import Footer from './Footer'
import AppContext, { defaultLogOut, defaultUser } from '../App/AppContext';

describe('Footer Component', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });
  it('renders the text "Copyright"', () => {
    const contextValue = { user: defaultUser, logOut: defaultLogOut };
    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.text()).toContain('Copyright');
  });
  it('the link is not displayed when the user is logged out within the context"', () => {
    const contextValue = { user: defaultUser, logOut: defaultLogOut };
    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').exists()).toBe(false);
  });
  it('the link is displayed when the user is logged in within the context"', () => {
    const contextValue = { user: {email: 'test@email.com', password: 'testPwd', isLoggedIn: true}, logOut: defaultLogOut };
    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').exists()).toBe(true);
  });
});
