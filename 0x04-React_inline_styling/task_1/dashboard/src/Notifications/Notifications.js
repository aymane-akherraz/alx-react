import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import close_icon from '../assets/close-icon.png'
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import './Notifications.css'

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  static defaultProps = {
    displayDrawer: false,
    listNotifications: []
  }

  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { listNotifications, displayDrawer } = this.props;
    return (
      <>
        {
          listNotifications && listNotifications.length > 0? (
            <div className={css(styles.menuItem)}>Your notifications</div>
          ) : (
          <div className={css(styles.menuItem)}>No new notification for now</div>
        )}
        {displayDrawer && listNotifications && listNotifications.length > 0 &&
          <div className={css(styles.notifs)}>
            <p>Here is the list of notifications</p>
            <ul>
            {
              listNotifications.map((e) => {
                return <NotificationItem key={e.id} id={e.id} type={e.type} value={e.value} html={e.html} markAsRead={this.markAsRead} />
              })
            }
            </ul>
          <button className={css(styles.btn)} aria-label='Close' onClick={() => console.log('Close button has been clicked')}>
            <img src={close_icon} alt='' />
          </button>
          </div>
        }
      </>
    );
  }
}

const styles = StyleSheet.create({
  menuItem: {
    position: 'absolute',
    right: 0,
    padding: '1rem'
  },
  notifs: {
    position: 'absolute',
    top: '3rem',
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
  }
});

export default Notifications;
