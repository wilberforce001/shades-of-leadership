import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/logo.jpg";

function NavigationBar() {
  return (
    <Navbar
      expand="lg"
      className="py-3 shadow-sm custom-navbar"
      style={{
        backgroundColor: "#242E42",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Container>
        {/* Brand */}
        <Navbar.Brand
          href="/"
          className="fw-bold fs-4 d-flex align-items-center"
          style={{
            color: "#FFDD33",
            fontWeight: "600",
            textDecoration: "none",
          }}
        >
          <img
            src={logo}
            alt="Shades of Leadership Logo"
            height="45"
            className="me-2 rounded"
          />
          <span>Shades of Leadership</span>
        </Navbar.Brand>

        {/* Toggle button — stays aligned with brand */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-0"
          style={{
            backgroundColor: "#FFDD33",
          }}
        />

        {/* Collapsible Nav links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-start">
            <Nav.Link href="/" style={linkStyle}>
              Home
            </Nav.Link>
            <Nav.Link href="/episodes" style={linkStyle}>
              Episodes
            </Nav.Link>
            <Nav.Link href="/about" style={linkStyle}>
              About
            </Nav.Link>
            <Nav.Link href="/guests" style={linkStyle}>
              Guests
            </Nav.Link>
            <Nav.Link href="/apply" style={linkStyle}>
              Be a Guest
            </Nav.Link>
            <Nav.Link href="/resources" style={linkStyle}>
              Resources
            </Nav.Link>
            <Nav.Link href="/contact" style={linkStyle}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const linkStyle = {
  color: "#FFFFFF",
  fontWeight: "500",
  marginLeft: "1rem",
  textDecoration: "none",
};

export default NavigationBar;
