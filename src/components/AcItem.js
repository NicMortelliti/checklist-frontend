import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { AcContext } from "../context/ac";

function AcItem({ item }) {
  const { setAc } = useContext(AcContext);

  return (
    <Card
      raised
      sx={{ mb: 2, height: "20%", display: "flex", flexDirection: "column" }}
      onClick={() => setAc(item.tail)}
      component={Link}
      to={`/${item.tail}`}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={item.image}
          alt={item.tail}
        />
        <CardContent sx={{ mx: "auto", width: 100 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {item.tail}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.model}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default AcItem;
