import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import ContactModal from './ContactModal'

const MyNavbar: React.FC = () => {

  interface NavLink {
    name: string
  }

  const navLinks: NavLink[] = [
    { name: "Education" },
    { name: "Work-Expierence" },
    { name: "Projects" },
    { name: "HobbiesInterests" }
  ];

  const [show, setShow] = useState(false);
  const openContactModal = () => {
    setShow(true)
    console.log(show)
  };
  const closeContactModal = () => setShow(false);

  return (
    <>
      <Navbar bg='dark' data-bs-theme='dark' fixed="top" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Alan Byrne</Navbar.Brand>
          {/*  NOTE: 'Navbar.Toggle' triggers the 'burger' menu to  */}
          {/* display on smaller screens. Make sure the 'expand' prop  */}
          {/* is provided in the parent 'Navbar' element, this sets the dimension */}
          {/* in which the navbar collapsible dropdown menu is expanded.  */}
          {/*  REMEMBER: 'aria-controls' points to a 'Navbar.Collapse' element, */}
          {/* so when a button is clicked it controls the visibility of the collapse section. */}
          {/* The attribute itself is for accessbility purposes, 'aria' standing for 'Accessible */}
          {/* Rich Internet Applications' helping make the web more accessible to people with */}
          {/* disabilies. These 'aria' elements are used specifically for screen readers. */}
          <Navbar.Toggle aria-controls='portfolio-navbar-nav' />
          <Navbar.Collapse className="justify-content-end" id='portfolio-navbar-nav'>
            <Nav>
              {navLinks.map((link, index) => {
                if (link.name != "Contact") {
                  return (
                    <Nav.Link key={index} href={`#${link.name}`}>{link.name}</Nav.Link>
                  );
                }
              })}
              <Nav.Link as='button' onClick={openContactModal}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container >
      </Navbar >
      <ContactModal show={show} handleClose={closeContactModal} />
    </>
  );
}

export default MyNavbar;
