import { TextField } from "@mui/material";
import styled from "styled-components";

const Search = () => {
  const Div = styled.div`
    width: 220px;
  `;
  return (
    <Div>
      <TextField label="Search Company Name" />
    </Div>
  );
};

export default Search;
