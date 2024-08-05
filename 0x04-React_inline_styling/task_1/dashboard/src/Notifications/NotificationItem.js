import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = React.memo(({ type = 'default', html, value, id, markAsRead }) => {
  const defaultStyle = {
    color: 'blue'
  }
  const urgentStyle = {
    color: 'red'
  }
  return (
    html ? (
      <li
        data-notification-type={type}
        style={type === 'default'? defaultStyle : urgentStyle}
        dangerouslySetInnerHTML={html}
        onClick={() => markAsRead(id)}
      />
    ) : (
      <li
        data-notification-type={type}
        style={type === 'default'? defaultStyle : urgentStyle}
        onClick={() => markAsRead(id)}
      >
        {value}
      </li>
    )
  );
});

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  type: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.number,
  markAsRead: PropTypes.func
};

export default NotificationItem;
