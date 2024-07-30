import './Login.css';
import React from 'react';

const Login = () => {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <label htmlFor='email'>Email: </label>
      <input type="email" name="" id="email" />
      <label htmlFor='password'>Password: </label>
      <input type="password" name="" id="password" />
      <button>OK</button>
    </>
  );
}
 
export default Login;