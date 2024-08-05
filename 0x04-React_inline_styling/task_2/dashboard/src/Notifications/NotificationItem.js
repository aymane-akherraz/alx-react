import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const NotificationItem = React.memo(({ type = 'default', html, value, id, markAsRead }) => {
  const className = css(type === 'default'? styles.defaultStyle : styles.urgentStyle)
  return (
    html ? (
      <li
        data-notification-type={type}
        className={className}
        dangerouslySetInnerHTML={html}
        onClick={() => markAsRead(id)}
      />
    ) : (
      <li
        data-notification-type={type}
        className={className}
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

const styles = StyleSheet.create({
  defaultStyle: {
    color: 'blue'
  },
  urgentStyle: {
    color: 'red'
  }
});

export default NotificationItem;
