import React from "react";
import { Link } from "react-router-dom";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function AddBtn({ ac }) {
  return (
    <Fab
      color="primary"
      aria-label="add"
      sx={{ position: "fixed", bottom: 15, right: 15 }}
      component={Link}
      to={ac + "/checklist/newitem"}
    >
      <AddIcon />
    </Fab>
  );
}

export default AddBtn;
