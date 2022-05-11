import React, { useContext, useEffect } from "react";
import { Container } from "@mui/material";
import PhaseItem from "./PhaseItem";
import { PhaseContext } from "../context/phase";

function PhaseList({ phases }) {
  const { setCurrentPhase } = useContext(PhaseContext);

  // Reset current phase back to empty string
  useEffect(() => {
    setCurrentPhase("");
  }, [setCurrentPhase]);

  return (
    <Container maxWidth="xs">
      {phases.map((phase) => (
        <PhaseItem key={phase.id} data={phase} />
      ))}
    </Container>
  );
}

export default PhaseList;
