import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavItem,
  Nav,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import NavLink from './NavLink/NavLink';
import Logo from '../../../assets/images/logo.png';

library.add(fab);

const Header = () => (
  <div>
    <Navbar color="white" light expand="md">
        <div className="container">
          <NavbarBrand tag={Link} to="/">
            <img src={Logo} alt=""/>
          </NavbarBrand>
          <Collapse navbar>
              <Nav className="mx-auto menu" navbar>
                  <NavItem className="menu__item">
                      <NavLink exact to="/atrakcje">Atrakcje</NavLink>
                  </NavItem>
                  <NavItem className="menu__item">
                      <NavLink exact to="/cennik">Cennik</NavLink>
                  </NavItem>
                  <NavItem className="menu__item">
                      <NavLink exact to="/karnet">Karnet</NavLink>
                  </NavItem>
                  <NavItem className="menu__item">
                      <NavLink exact to="/o-nas">O nas</NavLink>
                  </NavItem>
              </Nav>
              <Nav navbar className="social-menu">
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
  </div>
);

export default Header;
