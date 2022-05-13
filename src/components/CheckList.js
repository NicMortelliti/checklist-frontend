import React, { useContext } from "react";
import { Container } from "@mui/material";
import { AcContext } from "../context/ac";
import { EmergencyContext } from "../context/emergency";
import { PhaseContext } from "../context/phase";
import CheckItem from "./CheckItem";

function CheckList({ checklist, handleClick }) {
  const { currentAc } = useContext(AcContext);
  const { currentPhase } = useContext(PhaseContext);
  const { isEmergency } = useContext(EmergencyContext);

  const phase = isEmergency ? "Emergency" : currentPhase;
  console.log(phase)

  return (
    <Container maxWidth="xs">
      {checklist.map((item) =>
        currentAc === item.tail ? (
          phase === item.phase ? (
            <CheckItem key={item.id} data={item} handleClick={handleClick} />
          ) : null
        ) : null
      )}
    </Container>
  );
}

export default CheckList;
