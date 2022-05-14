import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { AcContext } from "../context/ac";

function PhaseItem({ data: { phase } }) {
  const { currentAc } = useContext(AcContext);

  return (
    <Card
      onClick={() => console.log(`/${currentAc}/${phase}`)}
      component={Link}
      to={`/${currentAc}/${phase}`}
      raised
      sx={{
        mb: 2,
        display: "flex",
        flexDirection: "column",
      }}>
      <CardActionArea>
        <CardContent>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center">
            <Typography variant="h5" component="h2">
              {phase}
            </Typography>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PhaseItem;
