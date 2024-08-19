import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGOUT } from "./courseActionTypes";
import { displayNotificationDrawer, hideNotificationDrawer, login, logout } from "./uiActionCreators";
import { LOGIN } from "./uiActionTypes";

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
