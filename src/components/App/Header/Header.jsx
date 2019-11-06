import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { 
    Navbar,
    NavbarBrand,
    Collapse,
    NavItem,
    Nav
} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import NavLink from './NavLink/NavLink'

library.add(fab)

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand>
                <Link to="/">Aquapark</Link>
            </NavbarBrand>
            <Collapse navbar>
                <Nav className="mx-auto" navbar>
                    <NavItem>
                        <NavLink exact to="/atrakcje">Atrakcje</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="/cennik">Cennik</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="/karnet">Karnet</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="/o-nas">O nas</NavLink>
                    </NavItem>
                </Nav>
                <Nav navbar>
                    <NavItem>
                        <NavLink to="#">
                            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="#">
                            <FontAwesomeIcon icon={['fab', 'google']} />
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="#">
                            <FontAwesomeIcon icon={['fab', 'instagram']} />
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="#">
                            <FontAwesomeIcon icon={['fab', 'youtube']} />
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>

        </Navbar>
      </div>
    )
  }
}
