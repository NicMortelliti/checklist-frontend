import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

// image and subhead props are not always provided. Set these to default to null.
function NavItem({
  image = null,
  head,
  subhead = null,
  route,
  handleClick,
  handleClickValue,
}) {
  return (
    // Behavior of onclick depends on the current page of the app.
    // The appropriate onclick behavior is passed down as a prop.
    <Card
      onClick={() => handleClick(handleClickValue)}
      component={Link}
      to={route}
      raised
      sx={{
        mb: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardActionArea>
        {/* If an image is provided as a prop, display it */}
        {image ? (
          <CardMedia
            component="img"
            height="200"
            image={image}
            alt={head}
            sx={{ display: "flex" }}
          />
        ) : null}
        <CardContent>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Typography  variant="h5" component="h2">
              {head}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {subhead}
            </Typography>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default NavItem;
