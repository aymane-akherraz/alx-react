import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from "../actions/notificationActionTypes"
import notificationReducer from "../reducers/notificationReducer"
import { normalizedData, notificationsNormalizer } from "../schema/notifications"
import { filterTypeSelected, getNotifications, getUnreadNotifications } from "./notificationSelector"
const { Map } = require('immutable');

describe('selectors', () => {
  it('filterTypeSelected works as expected', () => {
    const state = notificationReducer(undefined, {type: SET_TYPE_FILTER, filter: 'URGENT'})
    expect(filterTypeSelected(state)).toEqual('URGENT')
  })
  it('getNotifications returns a list of the message entities within the reducer', () => {
    const data = [
      {
        id: 1,
        isRead: false,
        type: "default",
        value: "New course available"
      },
      {
        id: 2,
        isRead: false,
        type: "urgent",
        value: "New resume available"
      },
      {
        id: 3,
        isRead: false,
        type: "urgent",
        value: "New data available"
      }
    ]
    const state = notificationReducer(undefined, {type: FETCH_NOTIFICATIONS_SUCCESS, data})   
    expect(getNotifications(state).toJS()).toEqual(notificationsNormalizer(data).entities.notifications)
  });
  it('getUnreadNotifications return a list of the message entities within the reducer', () => {
    const data = [
      {
        id: 1,
        isRead: false,
        type: "default",
        value: "New course available"
      },
      {
        id: 2,
        isRead: false,
        type: "urgent",
        value: "New resume available"
      },
      {
        id: 3,
        isRead: false,
        type: "urgent",
        value: "New data available"
      }
    ]
    const expected = [
      {
        id: 1,
        isRead: false,
        type: "default",
        value: "New course available"
      },
      {
        id: 3,
        isRead: false,
        type: "urgent",
        value: "New data available"
      }
    ]
    const notifs = notificationReducer(undefined, {type: FETCH_NOTIFICATIONS_SUCCESS, data})   
    const state = notificationReducer(notifs, {type: MARK_AS_READ, index: 2})    
    expect(getUnreadNotifications(state).toJS()).toEqual(notificationsNormalizer(expected).entities.notifications)
  });
})
