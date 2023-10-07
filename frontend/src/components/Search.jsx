import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();
  const [keyword, setKeyword] = useState(urlKeyword || "");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
      setKeyword("");
    } else {
      navigate("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} className="d-flex mx-4">
      <InputGroup style={{ height: "50px", width: "350px" }}>
        <InputGroup.Text>🔍</InputGroup.Text>
        <Form.Control
          placeholder="Search by name (e.g., Bulbasaur)"
          aria-label="Search by name (e.g., Bulbasaur)"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </InputGroup>

      <Button type="submit" variant="light" className="ms-3 p-2">
        Search
      </Button>
    </Form>
  );
};

export default Search;
