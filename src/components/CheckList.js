import React, { useContext, useEffect } from "react";
import { Container } from "@mui/material";
import { AcContext } from "../context/ac";
import { PhaseContext } from "../context/phase";
import CheckItem from "./CheckItem";

function CheckList({ checklist, phase, handleClick }) {
  const { currentAc } = useContext(AcContext);
  const { setCurrentPhase } = useContext(PhaseContext);

  useEffect(() => {
    setCurrentPhase(phase);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

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
