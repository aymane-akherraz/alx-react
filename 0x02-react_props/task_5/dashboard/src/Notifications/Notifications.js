import React from 'react';
import './Notifications.css';
import close_icon from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

const GetNotifs = ({ displayDrawer = false, listNotifications }) => {
  return (
    <>
      {
        listNotifications && listNotifications.length > 0? (
          <div className="menuItem">Your notifications</div> 
        ) : (
        <div className="menuItem">No new notification for now</div>
      )}
      {displayDrawer && listNotifications && listNotifications.length > 0 &&
        <div className="Notifications">
          <p>Here is the list of notifications</p>
          <ul>
          {
            listNotifications.map((e) => {
              return <NotificationItem key={e.id} type={e.type} value={e.value} html={e.html} />
            })
          }
          </ul>
        <button aria-label='Close' style={{position: 'absolute', top: 0, right: 0}} onClick={() => console.log('Close button has been clicked')}>
          <img src={close_icon} alt='' />
        </button>
        </div>
      }
    </>
  );
}

GetNotifs.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

export default GetNotifs;
