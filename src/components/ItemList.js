import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Paper, Stack, Toolbar } from "@mui/material";
import { AcContext } from "../context/ac";
import { PhaseContext } from "../context/phase";
import AddBtn from "./AddBtn";
import AcItem from "./AcItem";
import Item from "./Item";

function ItemList({ listItems }) {
  const { ac } = useContext(AcContext);
  const { currentPhase, setCurrentPhase } = useContext(PhaseContext);

  // Render list of aircraft
  const renderAcItems = (
    <div>
      {listItems.map(item => (
        <AcItem key={item.id} itemData={item} />
      ))}
    </div>
  );

  // Render list of flight phases
  const renderPhaseItems = (
    <div>
      <Toolbar />
      <Toolbar />
      <h1>Here!</h1>
      {listItems.map(item => (
        <Button
          component={Link}
          to={`/${ac}/${item}`}
          key={item}
          color={item !== "Emergency" ? "inherit" : "error"}
          variant={item !== "Emergency" ? "text" : "contained"}
          onClick={() => setCurrentPhase(item)}
        >
          {item}
        </Button>
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
    </div>
  );

  return (
    // Padding of 70 pixels top and bottom prevents cards being covered by app bars
    <Paper square sx={{ pt: "70px", pb: "70px" }}>
      <Stack alignItems="center" spacing={2}>
        {ac
          ? currentPhase
            ? renderCheckItems
            : renderPhaseItems
          : renderAcItems}
      </Stack>
      <AddBtn ac={ac} />
    </Paper>
  );
}

export default ItemList;
