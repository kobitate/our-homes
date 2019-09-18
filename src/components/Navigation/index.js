import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
// import BootstrapSwitchButton from 'bootstrap-switch-button-react'

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faExternalLink } from '@fortawesome/pro-regular-svg-icons'
import { faTh, faThList, faMap } from '@fortawesome/pro-solid-svg-icons'

export default class index extends Component {
  // state = {  }
  render () {
    return (
      <Navbar color='primary' dark expand='xs'>
        <Container fluid>
          <NavbarBrand href='/'>Our Homes</NavbarBrand>
          <Nav navbar>
            <NavItem>
              <Link to='/v/grid' style={{ textDecoration: 'none' }}>
                <NavLink>
                  <Icon icon={faTh} />&nbsp;Grid
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/v/list' style={{ textDecoration: 'none' }}>
                <NavLink>
                  <Icon icon={faThList} />&nbsp;List
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/v/map' style={{ textDecoration: 'none' }}>
                <NavLink
                  target='_blank'
                  rel='noopener noreferrer'>
                  <Icon icon={faMap} />&nbsp;Map
                </NavLink>
              </Link>
            </NavItem>
          </Nav>
          <Nav className='ml-auto d-none d-md-flex' navbar>
            <NavItem>
              <NavLink
                target='_blank'
                rel='noopener noreferrer'
                href='http://vow.mlspin.com/?cid=6563713&pass=chbjcxbs'>

                <Icon icon={faExternalLink} />&nbsp;MLS PIN
              </NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    )
  }
}
