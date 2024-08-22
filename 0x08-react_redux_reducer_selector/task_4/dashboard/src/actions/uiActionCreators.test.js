import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGOUT } from "./courseActionTypes";
import { displayNotificationDrawer, hideNotificationDrawer, login, loginRequest, logout } from "./uiActionCreators";
import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS } from "./uiActionTypes";
import fetchMock from 'jest-fetch-mock';
import configureMockStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';

describe('UI', () => {
  it('Calling the login creator with random email and password return the expected result', () => {
    const action = login('email@gmail.com', 'password');
    expect(action).toEqual({type: LOGIN, user: {email: 'email@gmail.com', password: 'password'}});
  });
  it('Calling the logout creator return the expected result', () => {
    const action = logout();
    expect(action).toEqual({ type: LOGOUT });
  });
  it('Calling the DISPLAY_NOTIFICATION_DRAWER creator return the expected result', () => {
    const action = displayNotificationDrawer();
    expect(action).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER });
  });
  it('Calling the HIDE_NOTIFICATION_DRAWER creator return the expected result', () => {
    const action = hideNotificationDrawer();
    expect(action).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
  });
});

const mockStore = configureMockStore([thunk]);

describe('loginRequest', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });
  it('creates FETCH_DATA_SUCCESS when fetching data has been done', () => {
    fetchMock.mockResponseOnce(JSON.stringify({ success: true }));
    const expectedActions = [
      { type: LOGIN , user: {email: 'email@gmail.com', password: 'password'}},
      { type: LOGIN_SUCCESS }
    ];
    const store = mockStore({});

    return store.dispatch(loginRequest('email@gmail.com', 'password')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  })
  it('creates LOGIN_FAILURE when fetching data fails', () => {
    fetchMock.mockRejectOnce(new Error('Failed to fetch'));
    const expectedActions = [
      { type: LOGIN, user: { email: 'email@gmail.com', password: 'password' } },
      { type: LOGIN_FAILURE }
    ];
    const store = mockStore({});
    return store.dispatch(loginRequest('email@gmail.com', 'password')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
})
