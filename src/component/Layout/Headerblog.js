import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// i have to import my react dom to where i need it link to
import { Link } from "react-router-dom";
import Aboutus from "../../component/Pages/Aboutus"
// import { FontAwesomeIcon } from 'react-icons/fa'; // Import the Font Awesome icon
// import { FaIconName } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
// import NavDropdown from 'react-bootstrap/NavDropdown';


// and i will pass the linking code <Link to="/">Home</Link> and name of what i want it to be in between the linking code \


// i will also make sure after i have link everything, i will link the file name in between the to="/user" which is the user here, i will remove it and name it my direct file name i want to link  <Link to="/ this is the part i will link my part">Home</Link>  
function Headerblog() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand  href="#home"> <Link to="/">Emmzoapp</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"><Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/">Blog</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to="/Users">User</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to="/Aboutus"> Aboutus </Link></Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action 
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
      Make enquiry
    </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Sign in
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Headerblog;