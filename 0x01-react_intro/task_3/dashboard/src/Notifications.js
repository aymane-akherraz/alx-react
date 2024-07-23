import React from 'react';
import './Notifications.css';
import close_icon from './close-icon.png'
import { getLatestNotification } from './utils';

const GetNotifs = () => {
  return ( 
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}/>
      </ul>
      <button aria-label='Close' style={{position: 'absolute', top: 0, right: 0}} onClick={() => console.log('Close button has been clicked')}>
        <img src={close_icon} alt='' />
      </button>
    </div>
  );
}
 
export default GetNotifs;
