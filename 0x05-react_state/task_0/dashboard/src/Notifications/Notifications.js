import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import close_icon from '../assets/close-icon.png'
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { listNotifications, displayDrawer, handleDisplayDrawer, handleHideDrawer } = this.props;
    return (
      <>
        {
          listNotifications && listNotifications.length > 0? (
            <div className={css(styles.menuItem, styles.hover, displayDrawer && styles.hide)} onClick={handleDisplayDrawer}>Your notifications</div>
          ) : (
          <div className={css(styles.menuItem)}>No new notification for now</div>
        )}
        {displayDrawer && listNotifications && listNotifications.length > 0 &&
          <div className={css(styles.notifs, styles.small)}>
            <p>Here is the list of notifications</p>
            <ul className={css(styles.small)}>
            {
              listNotifications.map((e) => {
                return <NotificationItem key={e.id} id={e.id} type={e.type} value={e.value} html={e.html} markAsRead={this.markAsRead} />
              })
            }
            </ul>
          <button className={css(styles.btn)} aria-label='Close' onClick={() => {
            console.log('Close button has been clicked');
            handleHideDrawer();
          }}>
            <img src={close_icon} alt='' />
          </button>
          </div>
        }
      </>
    );
  }
}

const opacityKeyframes = {
  'from': {
      opacity: 0.5,
  },

  'to': {
      opacity: 1,
  }
};
const translateKeyframes = {
  '0%': {
      transform: 'translateY(0)',
  },

  '50%': {
      transform: 'translateY(-5px)',
  },

  '100%': {
      transform: 'translateY(5px)',
  },
};

const styles = StyleSheet.create({
  menuItem: {
    position: 'absolute',
    right: 0,
    padding: '1rem',
    float: 'right',
    backgroundColor: '#fff8f8'
  },
  notifs: {
    position: 'absolute',
    right: '1rem',
    border: '1px dashed',
    padding: '1rem',
    width: '35%'
  },
  btn: {
    backgroundColor: 'transparent',
    border: 'none',
    position: 'absolute', 
    top: 0,
    right: 0
  },
  small: {
    '@media (max-width: 900px)': {
      width: '100%',
      listStyle: 'none',
      padding: 0,
      backgroundColor: 'white',
      top: 0,
      right: 0,
      height: '100%',
      fontSize: 20  
    }
  },
  hover: {
    ':hover': {
      cursor: 'pointer',
      animationName: [opacityKeyframes, translateKeyframes],
      animationDuration: '1s, .5s',
      animationIterationCount: '3',
    }
  },
  hide: {
    display: 'none'
  }
});

Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape),
	handleDisplayDrawer: PropTypes.func,
	handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
	displayDrawer: false,
};

export default Notifications;
