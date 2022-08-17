import edvalogo from "../../assets/logo.png";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ImCart } from "react-icons/im";
import { ImUser} from "react-icons/im";

import './Header.css';

function Header() {
    return(
      
      <Navbar collapseOnSelect expand="sm"  fixed="top" bg="dark" variant="dark" className="justify-content-between">

        
      <Container fluid>
        
        <Navbar.Brand href="#">
        
        <img src={edvalogo} alt="logo" />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="me-auto my-2 my-lg-0"
          >
            <Nav.Link href="#action1" >Inicio</Nav.Link>
            <Nav.Link href="#action2" >Productos</Nav.Link>
            <Nav.Link href="#action3" >Contacto</Nav.Link>
            <Nav.Link href="#action4" >Novedades</Nav.Link>
            
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

            <Button className="btnBasket" variant="outline-dark">
            
              <ImCart

                // className="icon"
                    size="20px"
                    color="white"
              />


            
              </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Header;