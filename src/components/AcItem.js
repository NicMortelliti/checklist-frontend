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

function AcItem({ itemData }) {
  const { setAc } = useContext(AcContext);

  return (
    <Card
      raised
      sx={{ height: "100%", display: "flex", flexDirection: "column" }}
      onClick={() => setAc(itemData.tail)}
      component={Link}
      to={`/${itemData.tail}`}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={itemData.image}
          alt={itemData.tail}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {itemData.tail}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {itemData.model}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default AcItem;
