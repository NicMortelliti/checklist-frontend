import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function NewItemResponse({ array, handleChange, label, controlValue }) {
  return (
    <FormControl sx={{ mb: 1, width: 1 }}>
      <InputLabel>{label}</InputLabel>
      <Select
        required
        sx={{ width: 1 }}
        value={controlValue}
        label={label}
        onChange={e => handleChange(e.target.value)}
      >
        {array.map(arrayItem => (
          <MenuItem key={arrayItem} value={arrayItem}>
            {arrayItem}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default NewItemResponse;
