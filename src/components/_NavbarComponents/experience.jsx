import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch } from "react-redux";
import { filterJobs, setExperienceFilter } from "../../Slice/jobSlice";
const Experience = () => {
  const dispatch = useDispatch();
  const names = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleChange = (event) => {
    const value = event.target.value;
    console.log(value);
    dispatch(setExperienceFilter(value));
    dispatch(filterJobs());
  };

  return (
    <Box sx={{ width: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Experience</InputLabel>
        <Select
          labelId="experience"
          id="experience"
          label="experience"
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

export default Experience;
