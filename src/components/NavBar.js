import React, { useContext } from "react";
import { Dropdown, Icon, Menu } from "semantic-ui-react";
import { AcContext } from "../context/ac";

function NavBar({ activePhase, setActivePhase, setModalState }) {
  const { ac, setAc } = useContext(AcContext);

  const phases = ["Preflight", "Taxi", "Takeoff", "Cruise", "Landing"];

  // Create menu item for Back button
  const backMenuItem = (
    <Menu.Item onClick={() => setAc("")} header>
      <Icon name="chevron left" />
      {ac}
    </Menu.Item>
  );

  // Create menu item for each phase
  const menuItem = label => {
    return (
      <Dropdown.Item key={label} onClick={() => setActivePhase(label)}>
        {label}
      </Dropdown.Item>
    );
  };

  // Create menu item for Add checklist item
  const addMenuItem = (
    <Menu.Item
      disabled={ac === ""}
      onClick={() => setModalState(true)}
      position="right"
      name="Add"
    />
  );

  return (
    <Menu size="tiny" attached="top">
      {ac ? backMenuItem : null}
      <Menu.Menu position="right">
        <Dropdown item text={activePhase}>
          <Dropdown.Menu>{phases.map(phase => menuItem(phase))};</Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
      {ac ? addMenuItem : null}
    </Menu>
  );
}
export default NavBar;
