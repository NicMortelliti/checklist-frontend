import React from "react";
import { TextField } from "@mui/material";

function NewItemDescription({ call, setCall }) {
  return (
    <TextField
      id="description-text"
      label="Call"
      variant="standard"
      value={call}
      onChange={e => setCall(e.target.value)}
    />
  );
}

export default NewItemDescription;
