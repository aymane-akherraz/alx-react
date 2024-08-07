import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/logo.jpg';

const Header = () => {
  return ( 
    <div className={css(styles.header)}>
      <img className={css(styles.logo)} src={logo} alt='' />
      <h1 className={css(styles.title)}>School dashboard</h1>
    </div>
  );
}

const styles = StyleSheet.create({
  header :{
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
