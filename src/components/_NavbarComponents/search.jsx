import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { filterJobs, setCompanyNameFilter } from "../../Slice/jobSlice"; // Import the action creator
import { debounce } from "lodash";

const Search = () => {
  const Div = styled.div`
    width: 220px;
  `;
  const dispatch = useDispatch();
  //debouncing required if filtering is done on backend to avoid unnecessary api calls
  const handleInputChangeDebounced = debounce((companyName) => {
    dispatch(setCompanyNameFilter(companyName));
    dispatch(filterJobs());
  }, 600);

  const handleInputChange = (event) => {
    const companyName = event.target.value;
    handleInputChangeDebounced(companyName);
  };

  return (
    <Div>
      <TextField label="Search Company Name" onChange={handleInputChange} />
    </Div>
  );
};

export default Search;
