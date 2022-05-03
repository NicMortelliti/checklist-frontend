import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

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
function Item({
  ac = null,
  item = null,
  image = null,
  head = null,
  subhead = null,
  route = null,
  handleClick = null,
}) {
  return (
    <Card
      onClick={() => handleClick(route)}
      component={Link}
      to={ac ! `/${head}` : `/${ac}/${head}`}
    >
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
