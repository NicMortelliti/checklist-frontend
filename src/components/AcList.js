import React from "react";
import AcItem from "./AcItem";
import { Paper } from "@mui/material";

function AcList({ acArray }) {
  return (
    <Paper sx={{ pt: "50px" }}>
      {acArray.map(aircraft => (
        <AcItem key={aircraft.id} itemData={aircraft} />
      ))}
    </Paper>
  );
}

export default AcList;
