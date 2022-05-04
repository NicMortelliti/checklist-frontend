import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material/";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { AcContext } from "../context/ac";
import { PhaseContext } from "../context/phase";

function NavBar() {
  const { ac, setAc } = useContext(AcContext);
  const { currentPhase, setCurrentPhase } = useContext(PhaseContext);

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
      {currentPhase ? (
        <Button
          component={Link}
          to={`/${ac}/Emergency`}
          color="error"
          variant="contained"
          onClick={() => setCurrentPhase("Emergency")}
        >
          EMERGENCY
        </Button>
      ) : null}
    </div>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>{ac ? renderBtns : renderMsg}</Toolbar>
      </AppBar>
    </Box>
  );
}
export default NavBar;
