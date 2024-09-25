import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_LOADING_STATE, SET_TYPE_FILTER } from "./notificationActionTypes"

export const markAsAread = (index) => {
  return {type : MARK_AS_READ, index};
}

export const setNotificationFilter = (filter) => {
  return {type : SET_TYPE_FILTER, filter};
}

export const setLoadingState = (loading) => {
  return {type: SET_LOADING_STATE, loading}
}

export const setNotifications = (data) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  data
})

export const fetchNotifications = () => {
  return async (dispatch) => {
    dispatch(setLoadingState(true));
    const response = await fetch('http://localhost:8564/notifications.json');
    const data = await response.json()        
    dispatch(setNotifications(data));
    dispatch(setLoadingState(false));
  }
}
export const boundMarkAsAread = (index) => markAsAread(index);
export const boundSetNotificationFilter = (filter) => setNotificationFilter(filter);
