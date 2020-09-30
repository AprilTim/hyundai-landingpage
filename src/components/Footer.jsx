import React from 'react';
import logo from '../img/logo.svg';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <img alt={'hyundai_logo'} src={logo} />
      <div>
        All specifications and descriptions provided herein may be different
        from the actual specifications and descriptions for the product.<br/>
        Hyundai is a registered trademark of Hyundai Motor Company. All rights
        reserved, Hyundai Motor Middle East & Africa.
      </div>
    </div>
  </footer>
);

export default Footer;
