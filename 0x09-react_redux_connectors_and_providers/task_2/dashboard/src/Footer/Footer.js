import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { connect } from 'react-redux';

const Footer = ({user}) => {
  return (
    <>
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      {user && user.isLoggedIn && <p><a>Contact us</a></p>}
    </>
  );
}
export const mapStateToProps = (state) => ({
  user: state.get("user")
})

export default connect(mapStateToProps)(Footer);
