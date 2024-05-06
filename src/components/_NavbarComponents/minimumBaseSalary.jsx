import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch } from "react-redux";
import { filterJobs, setMinimumBasePayFilter } from "../../Slice/jobSlice";
const MinimumBaseSalary = () => {
  const names = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const value = event.target.value;
    dispatch(setMinimumBasePayFilter(value));
    dispatch(filterJobs());
  };

  return (
    <Box sx={{ width: 280 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Minimum Base Salary Pay
        </InputLabel>
        <Select
          labelId="minSalary"
          id="minSalary"
          label="minSalary"
          onChange={handleChange}
        >
          {names.map((name) => (
            <MenuItem value={name} key={name}>
              {name}L
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default MinimumBaseSalary;
