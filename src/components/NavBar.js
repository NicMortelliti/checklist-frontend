import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { AcContext } from "../context/ac";
import PhaseSelect from "./PhaseSelect";

function NavBar({ activePhase, setActivePhase, setModalState }) {
  const { ac } = useContext(AcContext);

  // Create menu item for Back button
  // const backMenuItem = (
  //   <Menu.Item onClick={() => setAc("")} header>
  //     <Icon name="chevron left" />
  //     {ac}
  //   </Menu.Item>
  // );

  // Create menu item for each phase
  // const menuItem = label => {
  //   return (
  //     <MenuItem key={label} onClick={() => setActivePhase(label)}>
  //       {label}
  //     </MenuItem>
  //   );
  // };

  // Create menu item for Add checklist item
  // const addMenuItem = (
  //   <Menu.Item
  //     disabled={ac === ""}
  //     onClick={() => setModalState(true)}
  //     position="right"
  //     name="Add"
  //   />
  // );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="back"
            sx={{ mr: 2 }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {ac}
          </Typography>
          <PhaseSelect />
        </Toolbar>
      </AppBar>
    </Box>
    // <Menu size="tiny" attached="top">
    //   {ac ? backMenuItem : null}
    //   <Menu.Menu position="right">
    //     <Select item text={activePhase}>
    //       <Select.Menu>{phases.map(phase => menuItem(phase))};</Select.Menu>
    //     </Select>
    //   </Menu.Menu>
    //   {ac ? addMenuItem : null}
    // </Menu>
  );
}
export default NavBar;
