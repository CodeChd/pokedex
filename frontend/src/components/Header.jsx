import { Navbar, Nav, Image, Stack, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Search from "./Search";

const Header = () => {
  return (
    <header>
      <Navbar className="py-3" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand>
            <Stack direction="horizontal">
              <Image
                src="/images/pokedex-icon.png"
                alt="pokedex-icon"
                fluid
                style={{ objectFit: "cover", width: "60px" }}
              />
              <Image
                src="/images/pokedex-label.png"
                alt="pokedex-icon"
                fluid
                style={{ objectFit: "contain", width: "150px" }}
              />
            </Stack>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-4 text-dark ">
              <Nav.Link as={Link} to="/">
                <h4>Home</h4>
              </Nav.Link>
              <Nav.Link as={Link} to="/type">
                <h4>Type</h4>
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Search />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
