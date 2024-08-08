import React from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    this.setState({isLoggedIn: true});
  }

  handleChangeEmail(e) {
    this.setState(prevState => {
      const newEmail = e.target.value;
      const enableSubmit = newEmail && prevState.password;
      return { email: newEmail, enableSubmit };
    });
  }

  handleChangePassword(e) {
    this.setState(prevState => {
      const newPwd = e.target.value;
      const enableSubmit = newPwd && prevState.email;
      return { password: newPwd, enableSubmit };
    });
  } 

  render() {
    const {email, password, enableSubmit} = this.state
    return (
      <>
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <label htmlFor='email'>Email: </label>
          <input className={css(styles.margin, styles.small)} type="email" name="" id="email" value={email} onChange={this.handleChangeEmail} />
          <label htmlFor='password'>Password: </label>
          <input className={css(styles.margin, styles.small)} type="password" name="" id="password" value={password} onChange={this.handleChangePassword} />
          <input className={css(styles.margin)} type='submit' value="OK" disabled={enableSubmit? false : true} />
        </form>
      </>
    );
  }
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
