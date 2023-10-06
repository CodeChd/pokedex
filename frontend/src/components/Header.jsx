import { Navbar, Nav, Image, Stack, Form, InputGroup, Container } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar className="py-3" collapseOnSelect >
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
            <InputGroup
              style={{ height: "50px", width: "350px" }}
              className="rounded"
            >
              <InputGroup.Text id="basic-addon1">🔍</InputGroup.Text>
              <Form.Control
                placeholder="Search for Pokemon"
                aria-label="Search for Pokemon"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
