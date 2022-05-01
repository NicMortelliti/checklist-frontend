import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography } from "@mui/material/";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { AcContext } from "../context/ac";
import { PhaseContext } from "../context/phase";

function NavBar() {
  const { ac, setAc } = useContext(AcContext);
  const { setCurrentPhase } = useContext(PhaseContext);

  const phases = ["Preflight", "Taxi", "Emergency"];

  // Render nav bar message
  const renderMsg = <Typography variant="h6">Select an aircraft...</Typography>;

  // Render nav bar buttons
  const renderBtns = (
    <div>
      <Button
        component={Link}
        to={`/`}
        color="inherit"
        startIcon={<ChevronLeftIcon />}
        onClick={() => setAc("")}
      >
        {ac}
      </Button>
      {phases.map(phase => (
        <Button
          component={Link}
          to={`/${ac}/${phase}`}
          key={phase}
          color={phase !== "Emergency" ? "inherit" : "error"}
          variant={phase !== "Emergency" ? "text" : "contained"}
          onClick={() => setCurrentPhase(phase)}
        >
          {phase}
        </Button>
      ))}
    </div>
  );

  return (
    <AppBar position="fixed" open={true}>
      <Toolbar>{ac ? renderBtns : renderMsg}</Toolbar>
    </AppBar>
  );
}
export default NavBar;
