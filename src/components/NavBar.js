import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material/";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { AcContext } from "../context/ac";
import PhaseSelect from "./PhaseSelect";

function NavBar() {
  const { ac, setAc } = useContext(AcContext);

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
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {ac}
        </Typography>
        <PhaseSelect />
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
