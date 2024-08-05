import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <label htmlFor='email'>Email: </label>
      <input className={css(styles.margin, styles.small)} type="email" name="" id="email" />
      <label htmlFor='password'>Password: </label>
      <input className={css(styles.margin, styles.small)} type="password" name="" id="password" />
      <button className={css(styles.margin)}>OK</button>
    </>
  );
}

const styles = StyleSheet.create({
  margin: {
    marginRight: '1rem'
  },
  small: {
    '@media (max-width: 900px)': {
      display: 'block'
    }
  }
});

export default Login;
