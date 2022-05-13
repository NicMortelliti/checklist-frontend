import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { AcContext } from "../context/ac";
import { PhaseContext } from "../context/phase";

function AddBtn() {
  const { currentAc } = useContext(AcContext);
  const { currentPhase } = useContext(PhaseContext);

  return (
    <Fab
      color={currentPhase === "Emergency" ? "error" : "primary"}
      sx={{ position: "fixed", bottom: 15, right: 15 }}
      component={Link}
      to={`/${currentAc}/newitem`}>
      <AddIcon />
    </Fab>
  );
}

export default AddBtn;
