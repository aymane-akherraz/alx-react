import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const NotificationItem = React.memo(({ type = 'default', html, value, id, markNotificationAsRead }) => {
  const className = css(type === 'default'? styles.defaultStyle : styles.urgentStyle, styles.small)
  return (
    html ? (
      <li
        data-notification-type={type}
        className={className}
        dangerouslySetInnerHTML={html}
        onClick={() => markNotificationAsRead(id)}
      />
    ) : (
      <li
        data-notification-type={type}
        className={className}
        onClick={() => markNotificationAsRead(id)}
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
  markNotificationAsRead: PropTypes.func
};

const styles = StyleSheet.create({
  defaultStyle: {
    color: 'blue'
  },
  urgentStyle: {
    color: 'red'
  },
  small: {
    '@media (max-width: 900px)': {
      width: '100%',
      borderBottom: '1px solid #000',
      fontSize: 20,
      padding: '10px 8px'
    }
  }
});

export default NotificationItem;
