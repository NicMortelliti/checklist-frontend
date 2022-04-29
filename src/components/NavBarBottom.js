import React, { useContext } from "react";
import { AppBar, Button, Fab, Toolbar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { PhaseContext } from "../context/phase";

function NavBarBottom({ setDialogState }) {
  const { currentPhase, setCurrentPhase } = useContext(PhaseContext);

  return (
    <AppBar position="fixed" color="inherit" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <Button
          variant={currentPhase === "Emergency" ? "outlined" : "contained"}
          color="error"
          label="Emergency"
          onClick={() => setCurrentPhase("Emergency")}
        >
          EMERGENCY
        </Button>
        <Fab
          color="primary"
          aria-label="add"
          sx={{ position: "fixed", bottom: 35, right: 35 }}
          onClick={() => setDialogState(true)}
        >
          <AddIcon />
        </Fab>
      </Toolbar>
    </AppBar>
  );
}

export default NavBarBottom;
