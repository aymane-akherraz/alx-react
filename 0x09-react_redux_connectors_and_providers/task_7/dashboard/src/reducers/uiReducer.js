import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "../actions/uiActionTypes"
import { Map } from 'immutable';

export const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
});

export default function uiReducer(state = initialState, action = {}) {
  
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER: {
      return state.set('isNotificationDrawerVisible', true)
    }
    case HIDE_NOTIFICATION_DRAWER: {
      return state.set('isNotificationDrawerVisible', false)
    }
    case LOGIN_SUCCESS: {
      return state.set('isUserLoggedIn', true)
    }
    case LOGIN_FAILURE: {
      return state.set('isUserLoggedIn', false)
    }
    case LOGIN: {
      return state.set('user', action.user)
    }
    case LOGOUT: {
      return state.set('isUserLoggedIn', false).set('user', null)
    }
    default:
      return state
  }
}
