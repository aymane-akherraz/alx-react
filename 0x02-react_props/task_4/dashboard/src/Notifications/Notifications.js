import React from 'react';
import './Notifications.css';
import close_icon from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

const GetNotifs = ({ displayDrawer = false }) => {
  return (
    <>
      <div className="menuItem">Your notifications</div>
      {displayDrawer && 
        <div className="Notifications">
        <p>Here is the list of notifications</p>
        <ul>
          <NotificationItem type="default" value="New course available" />
          <NotificationItem type="urgent" value="New resume available" />
          <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
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
  displayDrawer: PropTypes.bool
}

export default GetNotifs;
