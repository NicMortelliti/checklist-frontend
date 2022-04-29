import React, { useContext, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { PhaseContext } from "../context/phase";

function Item({ itemData: { id, tail, phase, description, response } }) {
  const [checkedState, setCheckedState] = useState(false);
  const { currentPhase } = useContext(PhaseContext);

  const handleClick = () => {
    setCheckedState(!checkedState);
  };

  return (
    <Card
      raised
      style={{
        backgroundColor: currentPhase === "Emergency" ? "#E97A7A" : null,
      }}
      sx={{ minWidth: 380 }}
    >
      <CardContent>
        <Typography variant="h6">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{ width: 1 }}
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
