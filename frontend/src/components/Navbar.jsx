import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/logo.jpg";

function NavigationBar() {
  return (
    <Navbar
      expand="lg"
      className="py-3 shadow-sm"
      style={{
        backgroundColor: "#242E42",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Container>
        {/* Brand section */}
        <Navbar.Brand
          href="/"
          className="fw-bold fs-4 d-flex align-items-center navbar-brand-custom"
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

        {/* Toggle button */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-0 ms-auto"
          style={{
            backgroundColor: "#FFDD33",
          }}
        />

        {/* Collapsible links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="text-start nav-links-custom">
            <Nav.Link href="/" className="nav-link-custom">
              Home
            </Nav.Link>
            <Nav.Link href="/episodes" className="nav-link-custom">
              Episodes
            </Nav.Link>
            <Nav.Link href="/about" className="nav-link-custom">
              About
            </Nav.Link>
            <Nav.Link href="/guests" className="nav-link-custom">
              Guests
            </Nav.Link>
            <Nav.Link href="/apply" className="nav-link-custom">
              Be a Guest
            </Nav.Link>
            <Nav.Link href="/resources" className="nav-link-custom">
              Resources
            </Nav.Link>
            <Nav.Link href="/contact" className="nav-link-custom">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
