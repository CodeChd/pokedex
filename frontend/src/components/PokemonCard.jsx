import { Card, Button, Stack } from "react-bootstrap";
// Color map
import { colorType } from "../constants";

const PokemonCard = ({ pokemons }) => {
  return (
    <Card className="text-center gap-2 p-2" shadow-sm="true">
      <Card.Title className="mt-2">
        <strong>{pokemons.name}</strong>
        <p className="mt-2 " style={{ color: "grey" }}>
          <em>#{String(pokemons.pokemonId).padStart(3, "0")}</em>
        </p>
      </Card.Title>
      <Card.Img
        className="my-3"
        variant="top"
        src={pokemons.image}
        alt={pokemons.name}
        style={{ objectFit: "cover", width: "130px", margin: "auto" }}
      />

      <Card.Body>
        <Stack direction="horizontal" gap={2} className="d-flex">
          {pokemons.type.map((item, index) => (
            <Button
              key={index}
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
