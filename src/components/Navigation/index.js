import React, { Component } from 'react'
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faExternalLink } from '@fortawesome/pro-regular-svg-icons'
import { faTh, faThList } from '@fortawesome/pro-solid-svg-icons'

export default class index extends Component {
  // state = {  }
  render () {
    return (
      <Navbar color='primary' dark expand='md'>
        <Container fluid>
          <NavbarBrand href='/'>Our Homes</NavbarBrand>
          <Nav navbar>
            <NavItem>
              <NavLink
                target='_blank'
                rel='noopener noreferrer'
                href='http://vow.mlspin.com/?cid=6563713&pass=chbjcxbs'>
                  MLS PIN Login&nbsp;
                <Icon icon={faExternalLink} />
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className='ml-auto' navbar>
            <NavItem>
              {this.props.modeToggleHandler && <BootstrapSwitchButton
                onlabel={<Icon icon={faThList} />}
                onstyle='secondary'
                offlabel={<Icon icon={faTh} />}
                offstyle='secondary'
                checked
                onChange={checked => { this.props.modeToggleHandler(checked) }}
              />}
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    )
  }
}
