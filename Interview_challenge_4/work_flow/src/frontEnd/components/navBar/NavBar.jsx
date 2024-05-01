import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../../styles/navBar.css"
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <> 
        <Navbar key={false} expand={false} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${false}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                  <b>WorkFlow</b>
                </Offcanvas.Title>
              </Offcanvas.Header><hr></hr>
              <Offcanvas.Body>
               <Link to="/"  style= { { textDecoration: 'none' }}><span className="navigationMenu">WorkFlow Builder</span><hr></hr></Link>
               <Link to="/upload" style= { { textDecoration: 'none' }}><span className="navigationMenu">Uplaod & Trigger</span></Link> 
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Navbar.Brand>WorkFlow</Navbar.Brand>
          </Container>
        </Navbar>
    
    </>
  );
}

export default NavBar;
