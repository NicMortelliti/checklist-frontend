import React, { useContext } from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material/";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { AcContext } from "../context/ac";
import { PhaseContext } from "../context/phase";

function NavBar() {
  const { ac, setAc } = useContext(AcContext);
  const { currentPhase, setCurrentPhase } = useContext(PhaseContext);

  return (
    <AppBar position="fixed" open={true}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="back"
          sx={{ mr: 2 }}
          onClick={() => setAc("")}
        >
          <ChevronLeftIcon />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {ac}
          </Typography>
        </IconButton>

        <Button color="inherit" onClick={() => setCurrentPhase("Preflight")}>
          Preflight
        </Button>
        <Button color="inherit" onClick={() => setCurrentPhase("Taxi")}>
          Taxi
        </Button>
        <Button
          color="error"
          onClick={() => setCurrentPhase("Emergency")}
          variant="contained"
        >
          EMERGENCY
        </Button>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
