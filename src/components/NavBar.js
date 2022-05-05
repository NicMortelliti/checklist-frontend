import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material/";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { AcContext } from "../context/ac";
import { PhaseContext } from "../context/phase";

function NavBar() {
  const { ac, setAc } = useContext(AcContext);
  const { currentPhase, setCurrentPhase } = useContext(PhaseContext);

  // Render nav bar message
  const renderMsg = <Typography variant="h6">Select an aircraft...</Typography>;

  // Render nav bar buttons
  const renderBtns = (
    <>
      {/*
      The Box component with its 'display' and 'flexGrow'
      properties pushes components rendered after it (e.g.
      Emergency btn) to be pushed to the right of the display.
      */}
      <Box display="flex" flexGrow={1}>
        <IconButton
          component={Link}
          to={`/`}
          size="large"
          edge="start"
          color="inherit"
          sx={{ mr: 2 }}
          onClick={() => setAc("")}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <Typography
          margin="auto"
          variant="h5"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          {ac}
        </Typography>
      </Box>

      {/*
      If a flight phase has been selected, then the app
      is displaying the checklist items. In this case, we want
      to show an Emergency button in the nav bar that is easily
      accessible.
      */}
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
    </>
  );

  return (
    <AppBar position="fixed">
      {/*
      If an aircraft hasn't been selected yet, display a message
      in the nav bar instructing the user to select an aircraft.
      Otherwise, display navigation buttons.
      */}
      <Toolbar>{ac ? renderBtns : renderMsg}</Toolbar>
    </AppBar>
  );
}
export default NavBar;
