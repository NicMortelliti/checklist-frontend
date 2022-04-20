import React, { useContext } from "react";
import { Icon, Menu } from "semantic-ui-react";
import { AcContext } from "../context/ac";

function NavBar({ activePhase, setActivePhase }) {
  const { ac, setAc } = useContext(AcContext);

  const phases = [
    "Preflight",
    "Taxi",
    "Takeoff",
    "Cruise",
    "Landing",
  ];

  return (
    <Menu tabular attached="top">
      {/* Back button */}
      {ac !== "" ? (
        <Menu.Item onClick={() => setAc("")}>
          <Icon name="chevron left" />
        </Menu.Item>
      ) : null}

      {/* Phase of flight buttons */}
      {ac !== ""
        ? ((<Menu.Item header>{ac}</Menu.Item>),
          phases.map(phase => (
            <Menu.Item
              key={phase}
              name={phase}
              active={activePhase === phase}
              onClick={() => setActivePhase(phase)}
            />
          )))
        : null}
    </Menu>
  );
}
export default NavBar;
