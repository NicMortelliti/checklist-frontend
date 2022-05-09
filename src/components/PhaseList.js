import React from "react";
import { Container } from "@mui/material";
import PhaseItem from "./PhaseItem";

function PhaseList({ phases }) {
  return (
    <Container maxWidth="xs">
      {phases.map((phase) => (
        <PhaseItem key={phase.id} data={phase} />
      ))}
    </Container>
  );
}

export default PhaseList;
