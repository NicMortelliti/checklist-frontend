import React, { useContext } from "react";
import { Button } from "@mui/material";
import { PhaseContext } from "../context/phase";

function EmergencyBtn() {
  const { setCurrentPhase } = useContext(PhaseContext);

  return (
    <Button
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      color="error"
      variant="contained"
      size="large"
      onClick={() => setCurrentPhase("Emergency")}
    >
      EMERGENCY
    </Button>
  );
}

export default EmergencyBtn;
