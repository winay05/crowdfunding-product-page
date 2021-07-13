import { Navbar, Nav, Container } from "react-bootstrap";
import "./navbar.css";
const Navigation = () => (
  <Navbar expand="lg">
    <Container>
      <Navbar.Brand href="/">
        <img src="logo.svg" alt="crowdfund"></img>
      </Navbar.Brand>
      {/* <button
        aria-controls="basic-navbar-nav"
        type="button"
        aria-label="toggle navigation"
        className="navbar-toggler collapsed"
      >
        <span className="navbar-toggler">
          <img src="icon-hamburger.svg" alt="" />
        </span>
      </button> */}

      <Navbar.Toggle aria-controls="basic-navbar-nav" icon />
      <Navbar.Collapse className="nav-items" id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#">
            <p>About</p>
          </Nav.Link>
          <Nav.Link href="#">
            <p>Discover</p>
          </Nav.Link>
          <Nav.Link href="#">
            <p>Get Started</p>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
