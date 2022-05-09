import React from "react";
import { Container } from "@mui/material";

import AcItem from "./AcItem";

function AcList({ aircraft }) {
  return (
    <Container maxWidth="xs">
      {aircraft.map((eachAircraft) => (
        <AcItem key={eachAircraft.id} data={eachAircraft} />
      ))}
    </Container>
  );
}

export default AcList;
