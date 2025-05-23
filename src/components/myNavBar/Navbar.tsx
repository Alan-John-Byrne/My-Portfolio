import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import ContactModal from './ContactModal'
import { Link, Events } from 'react-scroll';
import NavProps from '../../interfaces/NavProps';

const MyNavbar: React.FC<NavProps> = ({ activeSection }) => {

  // NOTE: Smooth scroll behaviour:
  const [active, setActive] = useState('');
  useEffect(() => {

    // Setting the navbar button if hovering over the section.
    if (activeSection) {
      setActive(activeSection);
    }

    // Scroll event listeners:
    Events.scrollEvent.register('end', (to) => {
      setActive(to);
    })

    return () => { // Event cleanup.
      Events.scrollEvent.remove('end');
    }
  }, [activeSection])

  interface NavLink {
    targetId: string
  }

  const navLinks: NavLink[] = [
    { targetId: "Education" },
    { targetId: "Work-Expierence" },
    { targetId: "Projects" },
    { targetId: "HobbiesInterests" }
  ];

  const [show, setShow] = useState(false);
  const openContactModal = () => setShow(true);
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
              {navLinks.map((navLink, index) => {
                if (navLink.targetId != "Contact") {
                  return (
                    <Link key={index} to={navLink.targetId} className={`btn ${active == navLink.targetId ? 'btn-warning' : ''}`}><Nav.Link key={index}>{navLink.targetId}</Nav.Link></Link>
                  );
                }
              })}
              <Nav.Link as='button' onClick={openContactModal}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ContactModal show={show} handleClose={closeContactModal} />
      {/* Temp Footer */}
      <footer className="bg-dark text-center fixed-bottom">
        <p className="text-white" style={{ marginTop: "1rem" }}>
          Site Designed by Alan Byrne 2025
        </p>
      </footer>
    </>
  );
}

export default MyNavbar;
