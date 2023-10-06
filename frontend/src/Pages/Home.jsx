import { Row, Col } from "react-bootstrap";
import pokedexJson from "../data/pokedex.json";
import PokemonCard from "../components/PokemonCard";

//Pagination
import { useMemo, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { IconContext } from "react-icons";
import ReactPaginate from "react-paginate";

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

const Home = () => {
  const pageSize = 8; //
  const [page, setPage] = useState(0);
  const filterData = useMemo(() => {
    return pokedexModified.filter((item, index) => {
      return (index >= page * pageSize) & (index < (page + 1) * pageSize);
    });
  }, [page]);

  return (
    <>
      <Row className="my-5 mt-4">
        {filterData.map((items) => (
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
        pageCount={Math.ceil(pokedexModified.length / pageSize)}
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
      ;
    </>
  );
};

export default Home;
