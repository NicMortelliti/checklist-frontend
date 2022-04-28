import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

function Item({ itemData: { id, tail, phase, description, response } }) {
  const [checkedState, setCheckedState] = useState(false);

  const handleClick = () => {
    setCheckedState(!checkedState);
  };

  return (
    <Card raised sx={{ minWidth: 380 }}>
      <CardContent>
        <Typography variant="h6">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{ width: 1 }}
          variant={checkedState ? "contained" : "outlined"}
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
