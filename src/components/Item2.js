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
function Item({ item = null, image = null, head = null, subhead = null }) {
  return (
    <Card>
      <CardActionArea>
        {image ? (
          <CardMedia component="img" height="200" image={image} alt={head} />
        ) : null}
        <CardContent sx={{ mx: "auto", width: 100 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {head}
          </Typography>
          {subhead ? (
            <Typography variant="body2" color="text.secondary">
              {subhead}
            </Typography>
          ) : null}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Item;
