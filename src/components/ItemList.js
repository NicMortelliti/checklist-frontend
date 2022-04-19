import React from "react";
import Item from "./Item";
import AcItem from "./AcItem";

function ItemList({ currentAc, acArray, checklistItems }) {
  return (
    <div>
      {
        // If CurrentAC is not blank, list checklist items for selected aircraft
        currentAc === ""
          ? acArray.map(ac => <AcItem key={ac} itemData={ac} />)
          : checklistItems.map(item =>
              currentAc === item.tail ? ( // If checklist item tail number matches currentAC, render it.
                <Item key={item.id} itemData={item} />
              ) : null
            )
      }
    </div>
  );
}

export default ItemList;
