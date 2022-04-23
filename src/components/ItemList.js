import React, { useContext } from "react";
import Item from "./Item";
import { AcContext } from "../context/ac";

function ItemList({ checklistItems, activePhase }) {
  const { ac } = useContext(AcContext);
  return (
    <>
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
    </>
  );
}

export default ItemList;
