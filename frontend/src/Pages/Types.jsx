import { Row, Col } from "react-bootstrap";
import typesJson from "../data/types.json";
import PokemonType from "../components/PokemonType";

const typesData = typesJson.map((item) => ({ type: item.english }));

const Types = () => {
  return (
    <>
      <h2 className="ms-5 text-black-50" style={{ fontFamily: "sans-serif" }}>
        Filter by type
        <hr className=""/>
      </h2>
      <Row className="my-5 mt-4 ">
        {typesData.map((item, index) => (
          <Col className="my-4" key={index} md={2}>
            <PokemonType type={item.type} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Types;
