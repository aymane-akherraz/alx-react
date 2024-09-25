import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_LOADING_STATE, SET_TYPE_FILTER } from "../actions/notificationActionTypes";
import { notificationsNormalizer } from "../schema/notifications";
const { Map } = require('immutable');

const initialState = Map({
  notifications: [],
  filter: 'DEFAULT',
  loading: false
});

export default function notificationReducer(state = initialState, action = {}) {
  
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const data = notificationsNormalizer(action.data);
      const newNotifs = Map(data.entities.notifications).map(notif =>
        Map(notif).set('isRead', false)
      )
      return state.mergeDeep({
        notifications: newNotifs
      });
    }
    case MARK_AS_READ: {
      const newState = state.get('notifications').map((notif) => {
        notif = Map(notif)
        return notif.setIn(['isRead'], notif.get('id') === action.index);
      })
      return state.merge({
        notifications: newState
      });
    }
    case SET_TYPE_FILTER: {
      return state.set('filter', action.filter);
    }
    case SET_LOADING_STATE: {
      return state.set('loading', action.loading)
    }
    default:
      return state
  }
}
