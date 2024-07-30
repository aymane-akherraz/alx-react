import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({type = 'default', value, html}) => {
  return (
    html ? (
      <li data-notification-type={type} dangerouslySetInnerHTML={html} />
    ) : 
    <li data-notification-type={type}>{value}</li>
  )
}
 
NotificationItem.propTypes = {
  html: PropTypes.shape({
    _html: PropTypes.string
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string
}

export default NotificationItem;