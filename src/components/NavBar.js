import React, { useContext } from "react";
import { Icon, Menu } from "semantic-ui-react";
import { AcContext } from "../context/ac";

function NavBar({ activePhase, setActivePhase, setModalState }) {
  const { ac, setAc } = useContext(AcContext);

  const phases = ["Preflight", "Taxi", "Takeoff", "Cruise", "Landing"];

  // Create menu item for Back button
  const backMenuItem = (
    <Menu.Item onClick={() => setAc("")}>
      <Icon name="chevron left" />
    </Menu.Item>
  );

  // Create menu item for aircraft tail number
  const acTailMenuItem = <Menu.Item header>{ac}</Menu.Item>;

  // Create menu item for each phase
  const menuItem = label => {
    return (
      <Menu.Item
        key={label}
        name={label}
        active={activePhase === label}
        onClick={() => setActivePhase(label)}
      />
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
    <Menu tabular attached="top">
      {backMenuItem}
      {acTailMenuItem}
      {phases.map(phase => {
        return menuItem(phase);
      })}
      {addMenuItem}
    </Menu>
  );
}
export default NavBar;
