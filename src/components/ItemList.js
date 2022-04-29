import React, { useContext } from "react";
import Item from "./Item";

import { Stack, Fab, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { AcContext } from "../context/ac";
import { PhaseContext } from "../context/phase";

function ItemList({ checklistItems, setDialogState }) {
  const { ac } = useContext(AcContext);
  const { currentPhase } = useContext(PhaseContext);

  return (
    // Padding of 70 oixels top and bottom prevents cards being covered by app bars
    <Paper square sx={{ pt: "70px", pb: "70px" }}>
      <Stack alignItems="center" spacing={2}>
        {
          // If CurrentAC is not blank, list checklist items for selected aircraft
          ac !== ""
            ? checklistItems.map(item =>
                ac === item.tail ? (
                  currentPhase === item.phase ? (
                    <Item key={item.id} itemData={item} />
                  ) : null
                ) : null
              )
            : null
        }
      </Stack>
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        onClick={() => setDialogState(true)}
      >
        <AddIcon />
      </Fab>
    </Paper>
  );
}

export default ItemList;
