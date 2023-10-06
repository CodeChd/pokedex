import { Card, Image, Row, Col, Stack } from "react-bootstrap";

const PokemonCard = ({ pokemons }) => {
  return (
    <Card className="text-center gap-2">
      <Card.Title className="my-2">
        <strong>{pokemons.name}</strong>
      </Card.Title>
      <em>#{String(pokemons.id).padStart(3, "0")}</em>
      <Card.Img
        variant="top"
        src={pokemons.image}
        alt={pokemons.name}
        fluid
        style={{ objectFit: "cover", width: "130px", margin: "auto" }}
      />
      <Card.Body>
        <Row>
          <Col>
            <Card.Text>fdsf</Card.Text>
          </Col>
          <Col>
            <Card.Text>fdsf</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;
