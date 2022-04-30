import React from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function AddBtn({ handleClick }) {
  return (
    <Fab
      color="primary"
      aria-label="add"
      sx={{ position: "fixed", bottom: 15, right: 15 }}
      onClick={() => handleClick(true)}
    >
      <AddIcon />
    </Fab>
  );
}

export default AddBtn;
