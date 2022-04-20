import React, { useContext } from "react";
import { Icon, Menu } from "semantic-ui-react";
import { AcContext } from "../context/ac";

function NavBar({ activePhase, setActivePhase, setModalState }) {
  const { ac, setAc } = useContext(AcContext);

  const phases = ["Preflight", "Taxi", "Takeoff", "Cruise", "Landing"];

  return (
    <Menu tabular attached="top">
      {/* Back button */}
      <Menu.Item onClick={() => setAc("")}>
        <Icon name="chevron left" />
      </Menu.Item>
      <Menu.Item header>{ac}</Menu.Item>
      {phases.map(phase => {
        return (
          <Menu.Item
            key={phase}
            name={phase}
            active={activePhase === phase}
            onClick={() => setActivePhase(phase)}
          />
        );
      })}
      <Menu.Item
        onClick={() => setModalState(true)}
        position="right"
        name="Add"
      />
      ;
    </Menu>
  );
}
export default NavBar;
