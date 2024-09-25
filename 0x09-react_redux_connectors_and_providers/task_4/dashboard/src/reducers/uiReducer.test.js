import { SELECT_COURSE } from "../actions/courseActionTypes";
import { DISPLAY_NOTIFICATION_DRAWER, LOGIN } from "../actions/uiActionTypes";
import uiReducer, { initialState } from "./uiReducer";

describe('uiReducer', () => {
  it('uiReducer returns the correct state when no action is passed', () => {
    expect((uiReducer()).toJS()).toEqual(initialState.toJS());
  });
  it('uiReducer returns the correct state when the action SELECT_COURSE is passed', () => {
    const action = {type: SELECT_COURSE};
    expect((uiReducer(undefined, action)).toJS()).toEqual(initialState.toJS());
  });
  it('uiReducer returns the correct state when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const action = {type: DISPLAY_NOTIFICATION_DRAWER};
    const newState = initialState.set('isNotificationDrawerVisible', true)
    expect((uiReducer(undefined, action)).toJS()).toEqual(newState.toJS());
  });
  it('uiReducer returns the correct state when the action LOGIN is passed', () => {
    const action = {type: LOGIN, user: {email: 'email.com', pwd: 'pwd'}};
    const newState = initialState.set('user', {email: 'email.com', pwd: 'pwd'})
    expect((uiReducer(undefined, action)).toJS()).toEqual(newState.toJS());
  });
})
