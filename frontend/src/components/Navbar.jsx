import { Link } from 'react-router-dom'; 
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/logo.jpg';


function NavigationBar() {
  return (
    <Navbar bg='light' expand='lg' className='shadow-sm'>
      <Container>
        <Navbar.Brand href='/' className='d-flex align-items-center'>
          <img 
          src={logo} 
          alt="Shades of Leadership Logo" 
          height="50"
          className='me-2'
          />
          <span className='fw-bold text-primary'>Shades of Leadership</span>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href='/episodes'>Episodes</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
            <Nav.Link href='/guests'>Guests</Nav.Link>
            <Nav.Link href='/apply'>Be a Guest</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
