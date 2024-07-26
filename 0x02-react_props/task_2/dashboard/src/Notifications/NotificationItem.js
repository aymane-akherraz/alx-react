import React from 'react';

const NotificationItem = ({type, value, html}) => {
  return (
    html ? (
      <li data-notification-type={type} dangerouslySetInnerHTML={html} />
    ) : 
    <li data-notification-type={type}>{value}</li>
  )
}
 
export default NotificationItem;