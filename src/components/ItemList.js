import React from "react";
import Item from "./Item";

function ItemList({ currentAC, checklistItems }) {
  return (
    <div>
      {checklistItems.map(item =>
        // If checklist item tail number matches currentAC, render it.
        currentAC === item.tail ? <Item key={item.id} itemData={item} /> : null
      )}
    </div>
  );
}

export default ItemList;
