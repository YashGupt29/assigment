import { Autocomplete, MenuItem, TextField } from "@mui/material";
import { CheckIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import { filterJobs, setExperienceFilter } from "../../Slice/jobSlice";

const Experience = () => {
  const dispatch = useDispatch();
  const names = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const handleChange = (event, value) => {
    dispatch(setExperienceFilter(value));
    dispatch(filterJobs());
  };

  return (
    <Autocomplete
      sx={{ m: 1, width: 300 }}
      multiple
      id="tags-standard"
      options={names}
      getOptionLabel={(option) => option}
      disableCloseOnSelect
      onChange={handleChange} // Call handleSelectRoles on selection change
      renderOption={(props, option, { selected }) => (
        <MenuItem
          key={option}
          value={option}
          sx={{ justifyContent: "space-between" }}
          {...props}
        >
          {option}
          {selected ? <CheckIcon color="info" /> : null}
        </MenuItem>
      )}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" label="Experience" />
      )}
    />
  );
};

export default Experience;
