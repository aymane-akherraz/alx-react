import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/logo.jpg';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';

class Header extends React.Component {
  render () {
    const { user, logout } = this.props;
    return ( 
      <>
        <div className={css(styles.appHeader)}>
          <img className={css(styles.logo)} src={logo} alt='' />
          <h1 className={css(styles.title)}>School dashboard</h1>
        </div>        
        {user && user.isLoggedIn &&
        <div id='logoutSection'>
          Welcome {user.email} <a onClick={logout}>(logout)</a>
        </div>
        }
      </>
    );
  }
}

const styles = StyleSheet.create({
  appHeader :{
    borderBottom: '3px solid #e1003c',
    display: 'flex',
    alignItems: 'center',
    minHeight: 220
  },
  logo :{
    width: 200,
    height: 200
  },
  title :{
    display: 'inline-block',
    color: '#e1003c'
  }
});

export const mapStateToProps = (state) => ({
  user: state.ui.get("user")
})

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
