import { Autocomplete, MenuItem, TextField } from "@mui/material";
import { CheckIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import { filterJobs, setRoleFilter } from "../../Slice/jobSlice";

const RolesSelect = () => {
  const dispatch = useDispatch(); // Initialize the useDispatch hook

  const names = [
    "backend",
    "frontend",
    "fullStack",
    "ios",
    "flutter",
    "react Native",
    "android",
  ];

  const handleSelectRoles = (event, value) => {
    // Dispatch setRoleFilter action with the selected roles
    dispatch(setRoleFilter(value));
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

export default RolesSelect;
