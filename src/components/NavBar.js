import React, { useState } from "react";
import { Menu } from "semantic-ui-react";

function NavBar({ currentAC }) {
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
      <Menu.Item name="🔙" onClick={() => console.log("Clicked back button")} />
      <Menu.Item header>{currentAC}</Menu.Item>
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
