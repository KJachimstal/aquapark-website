import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar, NavbarBrand, Collapse, NavItem, Nav, NavbarToggler,
} from 'reactstrap';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import NavLink from '../NavLink';
import Logo from '../../../assets/images/logo.png';

library.add(fab);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useScrollPosition(({ currPos }) => {
    setScrolled(currPos.y < 0);
  });

  const toggle = () => setIsOpen(!isOpen);
  const hide = () => setIsOpen(false);

  return (
    <>
      <Navbar dark expand="md" className={`header p-0${scrolled ? ' header--scrolled' : ''}`}>
        <div className="container">
          <NavbarBrand tag={Link} to="/" onClick={hide}>
            <img src={Logo} alt="" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} className="mr-2" />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mx-auto menu" navbar>
              <NavItem className="menu__item">
                <NavLink exact to="/cennik" onClick={hide}>
                  Cennik
                </NavLink>
              </NavItem>
              <NavItem className="menu__item">
                <NavLink exact to="/karnet" onClick={hide}>
                  Karnet
                </NavLink>
              </NavItem>
              <NavItem className="menu__item menu__item--highlight">
                <NavLink exact to="/bilety" onClick={hide}>
                  Bilety
                </NavLink>
              </NavItem>
              <NavItem className="menu__item">
                <NavLink exact to="/kontakt" onClick={hide}>
                  Kontakt
                </NavLink>
              </NavItem>
            </Nav>
            <Nav navbar className="social-menu d-none d-lg-flex">
              <NavItem className="social-menu__item">
                <NavLink to="#">
                  <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                </NavLink>
              </NavItem>
              <NavItem className="social-menu__item">
                <NavLink to="#">
                  <FontAwesomeIcon icon={['fab', 'google']} />
                </NavLink>
              </NavItem>
              <NavItem className="social-menu__item">
                <NavLink to="#">
                  <FontAwesomeIcon icon={['fab', 'instagram']} />
                </NavLink>
              </NavItem>
              <NavItem className="social-menu__item">
                <NavLink to="#">
                  <FontAwesomeIcon icon={['fab', 'youtube']} />
                </NavLink>
              </NavItem>
              <NavItem className="social-menu__item">
                <NavLink to="#">
                  <FontAwesomeIcon icon={['fab', 'tripadvisor']} />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
      <div className="header__spacer d-md-none"></div>
    </>
  );
};

export default Header;
