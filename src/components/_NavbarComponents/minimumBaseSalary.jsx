import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
const MinimumBaseSalary = () => {
  const [minSalary, setMinSalary] = useState("");
  const handleChange = (event) => {
    setMinSalary(event.target.value);
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
          value={minSalary}
          label="minSalary"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default MinimumBaseSalary;
