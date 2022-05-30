import React, { useContext, useEffect } from "react";
import { usePromiseTracker } from "react-promise-tracker";
import {
  Card,
  CardContent,
  Container,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
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
        <Card
          raised
          sx={{
            mb: 2,
            display: "flex",
            flexDirection: "column",
          }}>
          <Skeleton
            variant="rectangular"
            animation="wave"
            height={200}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          />
          <CardContent>
            <Grid
              container
              direction="column"
              alignItems="center"
              justify="center">
              <Typography variant="body">
                <Skeleton variant="text" width={110} />
              </Typography>
              <Typography variant="body">
                <Skeleton variant="text" width={90} />
              </Typography>
            </Grid>
          </CardContent>
        </Card>
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
