import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <label htmlFor='email'>Email: </label>
      <input className={css(styles.margin)} type="email" name="" id="email" />
      <label htmlFor='password'>Password: </label>
      <input className={css(styles.margin)} type="password" name="" id="password" />
      <button>OK</button>
    </>
  );
}

const styles = StyleSheet.create({
  margin: {
    marginRight: '1rem'
  }
});

export default Login;
