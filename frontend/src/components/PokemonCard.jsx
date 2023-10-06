import { Card, Button, Stack } from "react-bootstrap";
// Color map
import { colorType } from "../constants";

const PokemonCard = ({ pokemons }) => {
  return (
    <Card className="text-center gap-2 " shadow-sm>
      <Card.Title className="mt-2">
        <strong>{pokemons.name}</strong>
        <p className="mt-2 " style={{ color: "grey" }}>
          <em>#{String(pokemons.id).padStart(3, "0")}</em>
        </p>
      </Card.Title>
      <Card.Img
        className="my-3"
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
              className="flex-grow-1 "
              style={{ backgroundColor: colorType[item] }}
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
