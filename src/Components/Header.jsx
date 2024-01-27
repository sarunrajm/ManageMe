import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar className="bg-body-tertiary text-dark position-fixed top-0 w-100">
    <Container>
      <Navbar.Brand>
      <Link to={'/'}><i class="fa-brands fa-meetup fa-2x me-2"></i>ManageMe</Link>
      </Navbar.Brand>
   </Container>
   </Navbar>   
  )
}

export default Header