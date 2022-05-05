import React from "react";
import { TextField } from "@mui/material";

function NewItemDescription({ call, setCall }) {
  return (
    <TextField
      label="Call (e.g. 'Parking Brake')"
      variant="outlined"
      value={call}
      sx={{ mb: 1, width: 250 }}
      onChange={e => setCall(e.target.value)}
    />
  );
}

export default NewItemDescription;
