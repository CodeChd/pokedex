import { Card, Button, Stack } from "react-bootstrap";
import { colorType } from "../constants";

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
        <Stack direction="horizontal" gap={2} className="d-flex">
          {pokemons.type.map((item) => (
            <Button
              className="flex-grow-1"
              style={{ backgroundColor: colorType[pokemons.type[0]] }}
            >
              {item}
            </Button>
          ))}
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;
