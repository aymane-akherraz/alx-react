import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGOUT } from "./courseActionTypes"
import { LOGIN } from "./uiActionTypes";

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
