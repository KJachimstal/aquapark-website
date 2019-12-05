import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';
import NavLink from '../NavLink';

import Logo from '../../../assets/images/logo.png';

import openings from '../../../data/openings';
import Opening from './Opening/Opening';

const Footer = () => (
  <footer className="footer">
    <div className="container footer__container">
      <div className="row footer__columns">
        <div className="col-3">
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
        <div className="col-3">
          <Nav vertical className="footer-menu">
            <NavItem className="footer-menu__header">Na skróty</NavItem>
            <NavItem>
              <NavLink to="/atrakcje">Atrakcje</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">Cennik</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">Karnet</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">Kup bilet online</NavLink>
            </NavItem>
          </Nav>
        </div>
        <div className="col-3">
          <Nav vertical className="footer-menu">
            <NavItem className="footer-menu__header">Polecamy</NavItem>
            <NavItem>
              <NavLink to="/">Sauna</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">Fitness</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">Siłownia</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/atrakcje">Baseny rekreacyjne</NavLink>
            </NavItem>
          </Nav>
        </div>
        <div className="col-3">
          <div className="footer-openings">
            {openings.map(opening => <Opening key={opening.day} {...opening} />)}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
