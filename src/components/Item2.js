import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { borderColor } from "@mui/system";
import { PhaseContext } from "../context/phase"

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
  handleClickValue = null,
}) {
  const { currentPhase } = useContext(PhaseContext)

  return (
    <Card
      onClick={() => handleClick(handleClickValue)}
      component={Link}
      to={route}
      raised
      sx={{
        mb: 2,
        height: "20%",
        display: "flex",
        flexDirection: "column",
        border: 3,
        borderColor: "error.main"
      }}
    >
      <CardActionArea>
        {/* If an image is provided as a prop, display it */}
        {image ? (<CardMedia component="img" height="200" image={image} alt={head} sx={{display: "flex"}} /> ) : null}
        <CardContent>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
          >
          <Typography gutterBottom variant="h5" component="h2">{head}</Typography>
          
          {/* If currentPhase is not null, display button for checklist response 'subhead'. */}
          {/* Otherwise, display the subhead, if provided as a prop, as a string. */}
          {currentPhase
            ? (<Button variant="contained" disableElevation fullWidth>{subhead}</Button>)
            : (<Typography variant="body2" color="text.secondary">{subhead}</Typography>)}
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Item;
