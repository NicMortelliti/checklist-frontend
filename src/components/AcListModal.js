import React, { useContext } from "react";
import AcItem from "./AcItem";
import { AcContext } from "../context/ac";
import { Paper } from "@mui/material";

function AcListModal({ acArray }) {
  const { ac } = useContext(AcContext);

  return (
    <Paper sx={{ pt: "50px" }}>
      {acArray.map(aircraft => (
        <AcItem key={aircraft.id} itemData={aircraft} />
      ))}
    </Paper>
  );
}

export default AcListModal;
