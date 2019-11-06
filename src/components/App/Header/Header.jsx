import React, { Component } from 'react'
import { 
    Navbar,
    NavbarBrand,
    Collapse,
    NavItem,
    Nav
} from 'reactstrap'
import NavLink from './NavLink/NavLink'

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" >
            <NavbarBrand>
                Aquapark
            </NavbarBrand>
            <Collapse isOpen={true} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink exact to="/">Strona główna</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>

        </Navbar>
      </div>
    )
  }
}
