import React from "react";
import { FormControl, TextField } from "@mui/material";

function NewItemDescription({ call, setCall }) {
  return (
    <FormControl sx={{ mb: 1, width: 1 }}>
      <TextField
        required
        sx={{ width: 1 }}
        value={call}
        label="Call (e.g. 'Parking Brake')"
        variant="outlined"
        onChange={e => setCall(e.target.value)}
      />
    </FormControl>
  );
}

export default NewItemDescription;
