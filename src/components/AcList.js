import React, { useContext, useEffect } from "react";
import { usePromiseTracker } from "react-promise-tracker";
import { Container, Skeleton } from "@mui/material";
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

  const LoadingIndicator = () => {
    const { promiseInProgress } = usePromiseTracker();
    return (
      promiseInProgress && (
        <Skeleton
          variant="rectangular"
          width={396}
          height={284}
          sx={{
            mb: 2,
            display: "flex",
            flexDirection: "column",
          }}
        />
      )
    );
  };

  return (
    <Container maxWidth="xs">
      {aircraft.map((eachAircraft) => (
        <AcItem key={eachAircraft.id} data={eachAircraft} />
      ))}
      <LoadingIndicator />
      <LoadingIndicator />
      <LoadingIndicator />
    </Container>
  );
}

export default AcList;
