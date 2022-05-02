import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { PhaseContext } from "../context/phase";
import { AcContext } from "../context/ac";

function PhaseItem({ item }) {
  const { setCurrentPhase } = useContext(PhaseContext);
  const { ac } = useContext(AcContext);

  return (
    <Card
      raised
      sx={{
        mb: 2,
        height: "20%",
        display: "flex",
        flexDirection: "column",
        border: item === "Emergency" ? 3 : null,
        borderColor: item === "Emergency" ? "error.main" : null,
      }}
      style={{ backgroundColor: item === "Emergency" ? "#E97A7A" : null }}
      onClick={() => setCurrentPhase(item)}
      component={Link}
      to={`/${ac}/${item}`}
    >
      <CardActionArea>
        <CardContent sx={{ mx: "auto", width: 100 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {item}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PhaseItem;
