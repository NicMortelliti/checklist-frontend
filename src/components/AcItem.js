import React, { useContext } from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { AcContext } from "../context/ac";

function AcItem({ itemData }) {
  const { setAc } = useContext(AcContext);

  return (
    <Box m={2}>
      <Card sx={{ maxWidth: 345 }} onClick={() => setAc(itemData.tail)}>
        <CardMedia
          component="img"
          height="250"
          image={itemData.image}
          alt={itemData.tail}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {itemData.tail}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {itemData.model}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default AcItem;
