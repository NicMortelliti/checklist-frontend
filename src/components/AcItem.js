import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import { AcContext } from "../context/ac";

function AcItem({ data, data: { tail, model, image } }) {
  const { setCurrentAc } = useContext(AcContext);

  const renderCard = (
    <Card
      onClick={() => setCurrentAc(tail)}
      component={Link}
      to={`/${tail}`}
      raised
      sx={{
        mb: 2,
        display: "flex",
        flexDirection: "column",
      }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={tail}
          sx={{ display: "flex" }}
        />
        <CardContent>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center">
            <Typography variant="h5" component="h2">
              {tail}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {model}
            </Typography>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );

  const renderSkeleton = <Skeleton variant="rectangular" height={200} />;

  return <>{renderSkeleton}</>;
}

export default AcItem;
