import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../../assets/images/logo.png';

const Footer = () => (
  <footer className="footer">
    <div className="container footer__container">
      <div className="row footer__columns">
        <div className="col-4">
          <div className="footer__logo">
            <Link to="/">
              <img src={Logo} alt="Aquapark" />
            </Link>
          </div>
          <div className="footer__address">
            <div>Łódzki Park Wodny</div>
            <div>ul. Politechniki 69</div>
            <div>00-00 Litzmannstadt</div>
          </div>
        </div>
        <div className="col-4">B</div>
        <div className="col-4">C</div>
      </div>
    </div>
  </footer>
);

export default Footer;
