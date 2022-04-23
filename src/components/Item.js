import React, { useState } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";

function Item({ itemData: { id, tail, phase, description, response } }) {
  const [checkedState, setCheckedState] = useState(false);

  const handleClick = () => {
    setCheckedState(!checkedState);
  };

  return (
    <Card sx={{ minWidth: 300 }}>
      <CardContent>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <Button
        sx={{ width: 1 }}
        variant={checkedState ? "contained" : "outlined"}
        color="success"
        onClick={handleClick}
      >
        {response}
      </Button>
    </Card>
  );
}

export default Item;
