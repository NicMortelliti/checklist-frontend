import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

function Item({ id, description, response, isChecked, handleClick }) {
  return (
    <Card raised sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          disableElevation
          variant={isChecked ? "contained" : "outlined"}
          style={{ backgroundColor: isChecked ? "green" : "white" }}
          color="success"
          onClick={() => handleClick(id)}>
          {isChecked ? <CheckIcon /> : response}
        </Button>
      </CardActions>
    </Card>
  );
}

export default Item;
