import React from "react";
import { Button } from "@mui/material";

function EmergencyBtn() {
  return (
    <Button
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      color="error"
      variant="contained"
      size="large"
    >
      EMERGENCY
    </Button>
  );
}

export default EmergencyBtn;
