import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

// Props:
//  item - AcItem
//    item.tail
//    item.image
//    item.model
//  item - PhaseItem
//    Emergency
//    Preflight
//    Taxi
//  ac - AcItem
//  setAc - AcItem
//  setCurrentPhase - PhaseItem
function Item() {
  return (
    <Card>
      <CardActionArea>
        <CardMedia></CardMedia>
        <CardContent>
          <Typography></Typography>
          <Typography></Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Item;
