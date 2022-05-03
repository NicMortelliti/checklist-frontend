import React, { useContext } from "react";
import { Container } from "@mui/material";
import { AcContext } from "../context/ac";
import { PhaseContext } from "../context/phase";
import AddBtn from "./AddBtn";
import PhaseItem from "./PhaseItem";
import Item from "./Item2";

function ItemList({ listItems }) {
  const { ac } = useContext(AcContext);
  const { currentPhase } = useContext(PhaseContext);

  // Render list of aircraft
  const renderAcItems = (
    <div>
      {listItems.map(item => (
        <Item
          key={item.id}
          image={item.image}
          head={item.tail}
          subhead={item.model}
        />
      ))}
    </div>
  );

  // Render list of flight phases
  const renderPhaseItems = (
    <div>
      {listItems.map(item => (
        <PhaseItem key={item} item={item} />
      ))}
    </div>
  );

  // Render list of checklist items
  const renderCheckItems = (
    <div>
      {listItems.map(item =>
        ac === item.tail ? (
          currentPhase === item.phase ? (
            <Item key={item.id} itemData={item} />
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
