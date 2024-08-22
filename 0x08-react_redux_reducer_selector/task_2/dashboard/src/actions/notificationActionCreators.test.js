import { markAsAread, setNotificationFilter } from "./notificationActionCreators";
import { MARK_AS_READ, NotificationTypeFilters, SET_TYPE_FILTER } from "./notificationActionTypes";

describe('notification', () => {
  it('Calling the markAsAread creator with 1 as an argument return the expected result', () => {
    const action = markAsAread(1);
    expect(action).toEqual({type: MARK_AS_READ, index: 1});
  });
  it('Calling the setNotificationFilter creator with one of the filters from NotificationTypeFilters return the expected result', () => {
    const action = setNotificationFilter(NotificationTypeFilters.DEFAULT);
    expect(action).toEqual({type: SET_TYPE_FILTER, filter: "DEFAULT"});
  });
});
