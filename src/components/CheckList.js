import React, { useContext } from "react";
import { Container } from "@mui/material";
import { AcContext } from "../context/ac";
import { PhaseContext } from "../context/phase";
import CheckItem from "./CheckItem";

function CheckList({ checklist, handleClick }) {
  const { currentAc } = useContext(AcContext);
  const { currentPhase } = useContext(PhaseContext);

  return (
    <Container maxWidth="xs">
      {checklist.map((item) =>
        currentAc === item.tail ? (
          currentPhase === item.phase ? (
            <CheckItem key={item.id} data={item} handleClick={handleClick} />
          ) : null
        ) : null
      )}
    </Container>
  );
}

export default CheckList;
