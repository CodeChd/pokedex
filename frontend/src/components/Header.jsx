import {
  Navbar,
  Nav,
  Image,
  Stack,
  Container,
} from "react-bootstrap";

import Search from "./Search";

const Header = () => {

  return (
    <header>
      <Navbar className="py-3" collapseOnSelect>
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
          <Nav className="ms-4 text-dark ">
            <Nav.Link>
              <h4>Home</h4>
            </Nav.Link>
            <Nav.Link>
              <h4>Type</h4>
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
          <Search/>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
