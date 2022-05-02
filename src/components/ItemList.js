import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
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
      {listItems.map(item => (
        <Box m={2}>
          <Card
            raised
            sx={{ maxWidth: 345 }}
            key={item}
            component={Link}
            to={`/${ac}/${item}`}
            color={item !== "Emergency" ? "inherit" : "error"}
            variant={item !== "Emergency" ? "text" : "contained"}
            onClick={() => setCurrentPhase(item)}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item}
              </Typography>
            </CardContent>
          </Card>
        </Box>
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
