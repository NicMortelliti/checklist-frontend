import React, { useContext } from "react";
import { Icon, Menu } from "semantic-ui-react";
import { AcContext } from "../context/ac";

function NavBar({ activePhase, setActivePhase, setModalState }) {
  const { ac, setAc } = useContext(AcContext);

  const phases = ["Preflight", "Taxi", "Takeoff", "Cruise", "Landing"];

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

  return (
    <Menu tabular attached="top">
      {/* Back button */}
      <Menu.Item onClick={() => setAc("")}>
        <Icon name="chevron left" />
      </Menu.Item>
      <Menu.Item header>{ac}</Menu.Item>
      {phases.map(phase => {
        return menuItem(phase);
      })}
      <Menu.Item
        disabled={ac === ""}
        onClick={() => setModalState(true)}
        position="right"
        name="Add"
      />
      ;
    </Menu>
  );
}
export default NavBar;
