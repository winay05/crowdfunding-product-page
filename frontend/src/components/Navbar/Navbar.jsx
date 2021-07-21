import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";
const Navigation = (props) => (
  <Navbar expand="lg">
    <Container>
      <Navbar.Brand className="show-hover" href="/">
        <img src="logo.svg" alt="crowdfund"></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="nav-items" id="basic-navbar-nav">
        <Nav className="ml-auto">
          {props.navLinks?.map((el) => (
            <Nav.Link href={el.link || "#"}>
              <p>{el.name}</p>
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
