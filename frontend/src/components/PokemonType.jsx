import { Card } from "react-bootstrap";
import { colorType, typeIcons } from "../constants";
import { Link, useNavigate } from "react-router-dom";

const PokemonType = ({ type }) => {
  const navigate = useNavigate();

  const filterTypeHandler = () => {
    navigate(`/type/${type}`);
  };

  return (
    <>
      <Card.Img
        src={typeIcons[type]}
        variant="top"
        className="rounded mx-auto p-2 "
        alt={type}
        style={{
          objectFit: "cover",
          width: "100px",
          backgroundColor: colorType[type],
        }}
      />
      <Link className="text-center text-black " onClick={filterTypeHandler}>
        <h3 className="mt-2">{type}</h3>
      </Link>
    </>
  );
};

export default PokemonType;
