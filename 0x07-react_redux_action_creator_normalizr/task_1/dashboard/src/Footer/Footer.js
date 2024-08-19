import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import AppContext from '../App/AppContext';

const Footer = () => {
  return (
    <AppContext.Consumer>
      {value => (
        <>
          <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
          {value.user.isLoggedIn && <p><a>Contact us</a></p>}
        </>
      )}
    </AppContext.Consumer>
  );
}
 
export default Footer;
