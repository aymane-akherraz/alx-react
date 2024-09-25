import React, { act } from 'react';
import { shallow, mount } from 'enzyme';
import App, { mapStateToProps } from './App'
import Notification from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';
import { fromJS } from 'immutable';
import uiReducer from '../reducers/uiReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

// Suppress style injection
StyleSheetTestUtils.suppressStyleInjection();
const store = createStore(uiReducer);
describe('App Component', () => {
  it('renders without crashing', () => {
    shallow(
      <Provider store={store}>
      <App />
    </Provider>
    );
  });
  it('renders <Notification /> component', () => {
    const wrapper = mount(
      <Provider store={store}>
      <App />
    </Provider>
    );
    expect(wrapper.find(Notification)).toHaveLength(1);
  });
  it('renders <Header /> component', () => {
    const wrapper = mount(
      <Provider store={store}>
      <App />
    </Provider>
    );
    expect(wrapper.find(Header)).toHaveLength(1);
  });
  it('renders <Login /> component', () => {
    const wrapper = mount(
      <Provider store={store}>
      <App />
    </Provider>
    );
    expect(wrapper.find(Login)).toHaveLength(1);
  });
  it('renders <Footer /> component', () => {
    const wrapper = mount(
      <Provider store={store}>
      <App />
    </Provider>
    );
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
  it('checks that <CourseList /> is not displayed', () => {
    const wrapper = mount(
      <Provider store={store}>
      <App />
    </Provider>
    );
    expect(wrapper.find(CourseList).exists()).toBe(false);
  });
  it('checks that <CourseList /> is displayed and the <Login /> is not included', () => {
    act(() => {
      store.dispatch({ type: 'LOGIN_SUCCESS' });
    });
    const wrapper = mount(
      <Provider store={store}>
      <App />
    </Provider>
    );
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
    const wrapper = mount(
      <Provider store={store}>
      <App />
    </Provider>
    );
  
  expect(store.getState().get('isNotificationDrawerVisible')).toEqual(false);

  });
  it('Verify that after calling handleDisplayDrawer and handleHideDrawer updates the state', () => {
    const wrapper = mount(
      <Provider store={store}>
      <App />
    </Provider>
    );
      
    act(() => {
      store.dispatch({ type: DISPLAY_NOTIFICATION_DRAWER });
    })
  expect(store.getState().get('isNotificationDrawerVisible')).toEqual(true);

  act(() => {
    store.dispatch({ type: HIDE_NOTIFICATION_DRAWER });
  })
  expect(store.getState().get('isNotificationDrawerVisible')).toEqual(false);
  });
  it('Verify that the logIn function updates the state correctly', () => {
    const wrapper = mount(
      <Provider store={store}>
      <App />
    </Provider>
    );
    act(() => {
      store.dispatch({ type: 'LOGIN_SUCCESS' });
    });

    expect(store.getState().get("isUserLoggedIn")).toEqual(true);
  });
  it('Verify that the logIn function updates the state correctly', () => {
    const wrapper = mount(
      <Provider store={store}>
      <App />
    </Provider>
    );
    
		const	user = {
				email: 'test@email.com',
				password: 'testPwd',
				isLoggedIn: true,
			}

		 act(() => {
      store.dispatch({ type: 'LOGIN_FAILURE' });
    });
  
		expect(store.getState().get("isUserLoggedIn")).toBe(false);
  })
});
describe('App Component', () => {
  it('Verify that the function mapStateToProps returns the right object', () => {
    let state = fromJS({
      isUserLoggedIn: true
    });
    expect(mapStateToProps(state)).toEqual({ isLoggedIn: true });
  });
});
