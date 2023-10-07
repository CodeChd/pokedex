import { Row, Col } from "react-bootstrap";
import PokemonCard from "../components/PokemonCard";
import { usePokemonContext } from "../context/Context";

//Pagination
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { IconContext } from "react-icons";
import ReactPaginate from "react-paginate";

const Home = () => {
  const { pokemonData } = usePokemonContext();

  return (
    <>
      <Row className="my-5 mt-4">
        {pokemonData.pokemons.map((items) => (
          <Col className="my-2" key={items.id} xs={12} sm={6} md={3}>
            <PokemonCard pokemons={items} />
          </Col>
        ))}
      </Row>
      <ReactPaginate
        className=""
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        activeClassName={"active"}
        onPageChange={(event) => setPage(event.selected)}
        pageCount={Math.ceil(pokemonData.length / 8)}
        breakLabel="..."
        previousLabel={
          <IconContext.Provider value={{ color: "#a5b4fc", size: "36px" }}>
            <AiOutlineArrowLeft />
          </IconContext.Provider>
        }
        nextLabel={
          <IconContext.Provider value={{ color: "#a5b4fc", size: "36px" }}>
            <AiOutlineArrowRight />
          </IconContext.Provider>
        }
      />
    </>
  );
};

export default Home;
