import React, { useContext, useEffect } from "react";
import { Container } from "@mui/material";
import { AcContext } from "../context/ac";
import { PhaseContext } from "../context/phase";

import AcItem from "./AcItem";

function AcList({ aircraft }) {
  const { setCurrentAc } = useContext(AcContext);
  const { setCurrentPhase } = useContext(PhaseContext);

  useEffect(() => {
    setCurrentAc("");
    setCurrentPhase("");
  }, [setCurrentAc, setCurrentPhase]);

  return (
    <Container maxWidth="xs">
      {aircraft.map((eachAircraft) => (
        <AcItem key={eachAircraft.id} data={eachAircraft} />
      ))}
    </Container>
  );
}

export default AcList;
