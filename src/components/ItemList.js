import React, { useContext } from "react";
import Item from "./Item";
import AcItem from "./AcItem";
import { AcContext } from "../context/ac";

function ItemList({ acArray, checklistItems }) {
  const { ac } = useContext(AcContext);
  return (
    <div>
      {
        // If CurrentAC is not blank, list checklist items for selected aircraft
        ac === ""
          ? acArray.map(ac => <AcItem key={ac} itemData={ac} />)
          : checklistItems.map(item =>
              ac === item.tail ? ( // If checklist item tail number matches currentAC, render it.
                <Item key={item.id} itemData={item} />
              ) : null
            )
      }
    </div>
  );
}

export default ItemList;
