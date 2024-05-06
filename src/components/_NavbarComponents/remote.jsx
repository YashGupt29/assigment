import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch } from "react-redux";
import { filterJobs, setRemoteFilter } from "../../Slice/jobSlice";

const Remote = () => {
  const dispatch = useDispatch();
  const names = ["remote", "in-office", "Both"];
  const handleChange = (event) => {
    const value = event.target.value;
    dispatch(setRemoteFilter(value));
    dispatch(filterJobs());
  };

  return (
    <Box sx={{ width: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Remote</InputLabel>
        <Select
          defaultValue={names[2]}
          labelId="remote"
          id="remote"
          label="remote"
          onChange={handleChange}
          sx={{ textAlign: "start" }}
        >
          {names.map((name) => (
            <MenuItem value={name} key={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Remote;
