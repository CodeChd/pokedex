import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner
      animation="grow"
      role="status"
      style={{
        width: "120px",
        height: "120px",
        margin: "auto",
        display: "flex",
      }}
    ></Spinner>
  );
};

export default Loader;
