import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { NavLink as ReactStrapNavLink } from 'reactstrap';

const NavLink = ({ children, ...props }) => (
  <ReactStrapNavLink tag={RouterNavLink} {...props}>
    {children}
  </ReactStrapNavLink>
);

export default NavLink;
