import React, { act } from 'react';
import { mount, shallow } from 'enzyme';
import Header from './Header'
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext, { defaultLogOut, defaultUser } from '../App/AppContext';
import { createStore } from 'redux';
import uiReducer from '../reducers/uiReducer';
import { Provider } from 'react-redux';
import { LOGIN, LOGOUT } from '../actions/uiActionTypes';

// Suppress style injection
StyleSheetTestUtils.suppressStyleInjection();
const store = createStore(uiReducer);

describe('Header Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Header user={defaultUser} logOut={defaultLogOut} />
      </Provider>
    );
  });
  it('renders <img> and <h1> tags', () => {
    const wrapper = mount(
     <Provider store={store}>
        <Header user={defaultUser} logOut={defaultLogOut} />        
      </Provider>

     
    );
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('h1').length).toBe(1);
  });

});

