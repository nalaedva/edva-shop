import mercaplastLogo from "../../../assets/logo.png";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ImUser} from "react-icons/im";


import CartWidget from "../CartWidget/CartWidget";

import './Header.css';
import NavCart from "../NavCart/NavCart";

function Header({action}) {
    return(
      <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" className="justify-content-between">

        
      <Container fluid>
        
        <Navbar.Brand href="#">
        
        <img src={mercaplastLogo} alt="Mercaplast Logo" />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="me-auto my-2 my-lg-0"
          >
            <Nav.Link href="#action1" className="fw-light">Inicio</Nav.Link>
            <Nav.Link href="#action2" className="fw-light">Productos</Nav.Link>
            <Nav.Link href="#action3" className="fw-light">Contacto</Nav.Link>
            <Nav.Link href="#action4" className="fw-light">Novedades</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
          
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              
            />

            <a className="btnLogin" href="#">
              <ImUser 
              size="20px"
              color="white"
              />
            </a>

           <NavCart />

            
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    )
}

export default Header;