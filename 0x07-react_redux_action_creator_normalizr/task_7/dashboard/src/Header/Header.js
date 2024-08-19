import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/logo.jpg';
import AppContext from '../App/AppContext';

class Header extends React.Component {
  render () {
    const { user, logOut } = this.context;
    return ( 
      <>
        <div className={css(styles.appHeader)}>
          <img className={css(styles.logo)} src={logo} alt='' />
          <h1 className={css(styles.title)}>School dashboard</h1>
        </div>
        {user.isLoggedIn &&
        <div id='logoutSection'>
          Welcome {user.email} <a onClick={logOut}>(logout)</a>
        </div>
        }
      </>
    );
  }
}
Header.contextType = AppContext;

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



export default Header;
