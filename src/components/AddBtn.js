import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { AcContext } from "../context/ac";

function AddBtn() {
  const { currentAc } = useContext(AcContext);

  return (
    <Fab
      color="primary"
      aria-label="add"
      sx={{ position: "fixed", bottom: 15, right: 15 }}
      component={Link}
      to={`/${currentAc}/newitem`}>
      <AddIcon />
    </Fab>
  );
}

export default AddBtn;
