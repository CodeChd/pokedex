import { Row, Col } from "react-bootstrap";
import pokedexJson from "../data/pokedex.json";
import typesJson from "../data/types.json";
import PokemonCard from "../components/PokemonCard";

const pokedexModified = pokedexJson.map((item) => {
  return {
    id: item.id,
    name: item.name.english,
    type: item.type,
    base: item.base,
    // Generate the image path based on the ID
    image: `/images/${String(item.id).padStart(3, "0")}.png`,
  };
});

const typesModified = typesJson.map((item) => {
  return { type: item.english };
});

const Home = () => {
  return (
    <>
      <Row className="my-4 ">
        {pokedexModified.map((items) => (
          <Col className="my-2" key={items.id} xs={12} sm={6} md={3}>
            <PokemonCard pokemons={items} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
