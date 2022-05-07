import React, { useContext } from "react";
import { Container } from "@mui/material";
import { AcContext } from "../context/ac";
import { PhaseContext } from "../context/phase";
import AddBtn from "./AddBtn";
import CheckItem from "./CheckItem";
import NavItem from "./NavItem";

function ItemList({ listItems, handleClick = null }) {
  const { ac, setAc } = useContext(AcContext);
  const { currentPhase, setCurrentPhase } = useContext(PhaseContext);

  // Render list of aircraft
  const renderAcItems = (
    <div>
      {listItems.map((item) => (
        <NavItem
          key={item.id}
          image={item.image}
          head={item.tail}
          subhead={item.model}
          route={item.tail}
          handleClick={setAc}
          handleClickValue={item.tail}
        />
      ))}
    </div>
  );

  // Render list of flight phases
  const renderPhaseItems = (
    <div>
      {listItems.map((item) => (
        <NavItem
          key={item}
          head={item}
          route={`/${ac}/${item}`}
          handleClick={setCurrentPhase}
          handleClickValue={item}
        />
      ))}
    </div>
  );

  // Render list of checklist items
  const renderCheckItems = (
    <div>
      {listItems.map((item) =>
        ac === item.tail ? (
          currentPhase === item.phase ? (
            <CheckItem
              key={item.id}
              id={item.id}
              description={item.description}
              response={item.response}
              isChecked={item.isChecked}
              handleClick={handleClick}
            />
          ) : null
        ) : null
      )}

      {/* Display button to add checklist item */}
      <AddBtn ac={ac} />
    </div>
  );

  return (
    <Container maxWidth="xs">
      {/*
          The ternary below works as follows:
              1) if an aircraft is NOT selected, render a list of aircraft
              2) if an aircraft IS selected, but a phase is NOT selected, render a list of phases
              3) if both an aircraft and a phase ARE selected, render the checklist for the selected aircraft and phase
          */}
      {ac
        ? currentPhase
          ? renderCheckItems
          : renderPhaseItems
        : renderAcItems}
    </Container>
  );
}

export default ItemList;
