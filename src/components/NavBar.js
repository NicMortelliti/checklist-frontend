import React, { useContext, useState } from "react";
import { Icon, Menu } from "semantic-ui-react";
import { AcContext } from "../context/ac";

function NavBar() {
  const [activePhase, setActivePhase] = useState("");

  const { ac, setAc } = useContext(AcContext);

  const phases = [
    "Preflight",
    "Taxi",
    "Runup",
    "Takeoff",
    "Climb",
    "Cruise",
    "Descent",
    "Landing",
    "After Landing",
    "Shutdown",
  ];

  return (
    <Menu>
      <Menu.Item name="" onClick={() => setAc("")}>
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
    </Menu>
  );
}

export default NavBar;
