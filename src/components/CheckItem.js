import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

function Item({ description, response }) {
  const [checkedState, setCheckedState] = useState(false);

  const handleClick = () => {
    setCheckedState(!checkedState);
  };

  return (
    <Card raised sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          disableElevation
          variant={checkedState ? "contained" : "outlined"}
          style={{ backgroundColor: checkedState ? "green" : "white" }}
          color="success"
          onClick={handleClick}
        >
          {checkedState ? <CheckIcon /> : response}
        </Button>
      </CardActions>
    </Card>
  );
}

export default Item;
