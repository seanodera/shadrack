import React from 'react'
import { Nav, Container,Navbar, NavDropdown, NavLink} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
        <Navbar className='py-1' variant='dark' bg='dark' expand='lg'>
            <Container>
           <LinkContainer to={'/'}>
           <Navbar.Brand>
                Shedrack&amp;CO
            </Navbar.Brand>
           </LinkContainer>


            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav' >
                    <Nav className='ml-auto' >
                        <LinkContainer to={'/'}>
                            <NavLink>
                                Home
                            </NavLink>
                        </LinkContainer>
                      <NavDropdown title='about us' id='basic-nav-dropdown'>
                          <NavDropdown.Item href='#inspiration'>Our Inspiration</NavDropdown.Item>
                          <NavDropdown.Item>What we do</NavDropdown.Item>
                          <NavDropdown.Item>Our Mission</NavDropdown.Item>
                          <NavDropdown.Item>Our Vision</NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown title='Our Services'>
                          <NavDropdown.Item>Investing Basics</NavDropdown.Item>
                          <NavDropdown.Item>Stock Market Advisory</NavDropdown.Item>
                          <NavDropdown.Item>retirement</NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header