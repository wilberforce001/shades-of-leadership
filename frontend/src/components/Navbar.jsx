import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/logo.jpg";

function NavigationBar() {
  return (
    <Navbar
      expand="lg"
      className="py-2 shadow-sm"
      style={{
        backgroundColor: "#242E42",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Container className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between">
        {/* Brand + toggle on one line */}
        <div className="d-flex align-items-center justify-content-between w-100">
          <Navbar.Brand
            href="/"
            className="fw-bold fs-4 d-flex align-items-center mb-0"
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

          {/* Toggle button inline with brand and INSIDE container padding */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="border-0 ms-3"
            style={{
              backgroundColor: "#FFDD33",
              height: "40px",
              width: "48px",
            }}
          />
        </div>

        {/* Collapsible links */}
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-lg-end mt-2 mt-lg-0"
        >
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
