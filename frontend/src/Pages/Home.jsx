//Pagination
import ReactPaginate from "react-paginate";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { IconContext } from "react-icons";

import { Row, Col } from "react-bootstrap";
import PokemonCard from "../components/PokemonCard";
import { useGetPokemonsQuery } from "../slices/apiSlice";
import Loader from "../components/Loader";
import { useNavigate, useParams } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { pageNumber, keyword, type } = useParams();

  //pokemon data
  const { data, isLoading } = useGetPokemonsQuery({
    type,
    pageNumber,
    keyword,
  });

  // Handle search and pagination
  const handlePageChange = (selectedPage) => {
    if (keyword) {
      navigate(`/search/${keyword}/page/${selectedPage + 1}`);
    } else if (type) {
      navigate(`/type/${type}/page/${selectedPage + 1}`);
    } 
    else if (keyword && type) {
      navigate(`/type/${type}/page/${selectedPage + 1}`);
    } else {
      navigate(`/page/${selectedPage + 1}`);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Row className="my-5 mt-4">
            {data.pokemons.map((items) => (
              <Col className="my-2" key={items._id} xs={12} sm={6} md={3}>
                <PokemonCard pokemons={items} />
              </Col>
            ))}
          </Row>

          <ReactPaginate
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            activeClassName={"active"}
            onPageChange={(e) => handlePageChange(e.selected)}
            pageCount={data.pages}
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
      )}
    </>
  );
};

export default Home;
