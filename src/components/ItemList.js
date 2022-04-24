import React, { useContext } from "react";
import Item from "./Item";
//import NewItemForm from "./NewItemForm";

import { AcContext } from "../context/ac";
import { Stack, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function ItemList({ checklistItems, activePhase }) {
  const { ac } = useContext(AcContext);
  return (
    <>
      <Stack alignItems="center" spacing={2}>
        {
          // If CurrentAC is not blank, list checklist items for selected aircraft
          ac !== ""
            ? checklistItems.map(item =>
                ac === item.tail ? (
                  activePhase === item.phase ? (
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
        sx={{ position: "absolute", bottom: 16, right: 16 }}
      >
        <AddIcon />
      </Fab>
    </>
  );
}

export default ItemList;
