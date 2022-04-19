import React, { useState } from "react";
import { Icon, Menu } from "semantic-ui-react";

function NavBar({ currentAc }) {
  const [activePhase, setActivePhase] = useState("");

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
      <Menu.Item name="" onClick={() => console.log("Clicked back button")}>
        <Icon name="chevron left" />
      </Menu.Item>
      <Menu.Item header>{currentAc}</Menu.Item>
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
