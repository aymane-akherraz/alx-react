import React, { act } from 'react';
import { mount, shallow } from 'enzyme';
import Footer from './Footer'
import AppContext, { defaultLogOut, defaultUser } from '../App/AppContext';
import { createStore } from 'redux';
import uiReducer from '../reducers/uiReducer';
import { Provider } from 'react-redux';
import { LOGIN } from '../actions/uiActionTypes';

const store = createStore(uiReducer);

describe('Footer Component', () => {
  it('renders without crashing', () => {
    shallow(
    <Provider store={store}>
      <Footer />
    </Provider>
  );
  });
  it('renders the text "Copyright"', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Footer user={defaultUser} logOut={defaultLogOut} />
      </Provider>
    );
    expect(wrapper.text()).toContain('Copyright');
  });
  it('the link is not displayed when the user is logged out within the context"', () => {
    const wrapper = mount(
      <Provider store={store} >
        <Footer user={defaultUser} logOut={defaultLogOut}/>
      </Provider>
    );
    expect(wrapper.find('a').exists()).toBe(false);
  });
  it('the link is displayed when the user is logged in within the context"', () => {
    const user = { email: 'test@email.com', password: 'testPwd', isLoggedIn: true };
    act(() => {
      store.dispatch({ type: LOGIN, user: user });
    })
    const wrapper = mount(
      <Provider store={store}>
        <Footer logOut={defaultLogOut}/>
      </Provider>
    );
    expect(wrapper.find('a').exists()).toBe(true);
  });
});
