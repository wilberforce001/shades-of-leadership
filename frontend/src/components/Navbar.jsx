import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/logo.jpg';

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm py-2">
      <Container fluid>
        {/* Brand on the left */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="Shades of Leadership Logo"
            height="50"
            className="me-2"
          />
          <span className="fw-bold text-primary">Shades of Leadership</span>
        </Navbar.Brand>

        {/* Toggle button for small screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Nav links — left on small screens, right on large */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-lg-end justify-content-start">
          <Nav className="text-start">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/episodes">Episodes</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/guests">Guests</Nav.Link>
            <Nav.Link as={Link} to="/apply">Be a Guest</Nav.Link>
            <Nav.Link as={Link} to="/resources">Resources</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
