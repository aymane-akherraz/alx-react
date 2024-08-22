import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGOUT } from "./courseActionTypes"
import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS } from "./uiActionTypes";

export const login = (email, password) => {
  return {type: LOGIN, user : { email, password }};
}

export const logout = () => {
  return {type: LOGOUT};
}

export const displayNotificationDrawer = () => {
  return {type: DISPLAY_NOTIFICATION_DRAWER};
}

export const hideNotificationDrawer = () => {
  return {type: HIDE_NOTIFICATION_DRAWER};
}

export const loginSuccess = () => {
  return {type : LOGIN_SUCCESS};
}

export const loginFailure = () => {
  return {type : LOGIN_FAILURE};
}

export const loginRequest = (email, password) => {
  return async (dispatch) => {
    dispatch(login(email, password));
    try {
      const response = await fetch('http://localhost:8564/login-success.json');
      dispatch(loginSuccess());      
    } catch (error) {
      dispatch(loginFailure());
    }
  }
}

export const boundLogin = (email, password) => login(email, password);
export const boundLogOut = () => logout();
export const boundDisplayNotificationDrawer = () => displayNotificationDrawer();
export const boundHideNotificationDrawer = () => hideNotificationDrawer();
