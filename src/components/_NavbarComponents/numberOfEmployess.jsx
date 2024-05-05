import {
  Autocomplete,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { CheckIcon } from "lucide-react";
import { useState } from "react";
const NumberOfEmployess = () => {
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    setNumber(event.target.value);
  };
  const names = [
    "backend",
    "frontend",
    "fullStack",
    "ios",
    "flutter",
    "react Native",
    "android",
  ];

  return (
    <Autocomplete
      sx={{ m: 1, width: 300 }}
      multiple
      id="tags-standard"
      options={names}
      getOptionLabel={(option) => option}
      disableCloseOnSelect
      onChange={handleSelectRoles} // Call handleSelectRoles on selection change
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
        <TextField {...params} variant="outlined" label="Roles" />
      )}
    />
  );
};

export default NumberOfEmployess;
