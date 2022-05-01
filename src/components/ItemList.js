import React, { useContext } from "react";
import Item from "./Item";
import AddBtn from "./AddBtn";

import { Stack, Paper } from "@mui/material";
import { AcContext } from "../context/ac";
import { PhaseContext } from "../context/phase";

function ItemList({ checklistItems }) {
  const { ac } = useContext(AcContext);
  const { currentPhase } = useContext(PhaseContext);

  const items = (
    <div>
      {checklistItems.map(item =>
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
        {items}
      </Stack>
      <AddBtn ac={ac} />
    </Paper>
  );
}

export default ItemList;
