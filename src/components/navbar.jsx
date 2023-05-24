import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../public/logo.png';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

const Navbar_component = () => {

  return (
    <Navbar className='navbar_section' expand="sm">
      <Container fluid>
        <Navbar.Brand className='navbar_brandSection' href="#">
          <a href="/">
          <figure className='navbar_logoContainer'>
            <img src={logo} alt='Donair logo de empresa' />
          </figure>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 navbar_listContainer"
            navbarScroll
          >
            <Link to="/">Inicio</Link>
            <Link to="/services">Servicios</Link>
            <Link to="/contact">Contacto</Link>
            <Link to="/location">Donde Estamos</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbar_component;
