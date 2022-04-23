import React, { useContext } from "react";
import Item from "./Item";
import { AcContext } from "../context/ac";
import { Stack } from "@mui/material";

function ItemList({ checklistItems, activePhase }) {
  const { ac } = useContext(AcContext);
  return (
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
  );
}

export default ItemList;
