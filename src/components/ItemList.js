import React from "react";
import Item from "./Item";

function ItemList({checklistItems}) {
  return (
    <div>
      {checklistItems.map(item => {
        return <Item itemData={item}/>})
  }
    </div>

  );
}

export default ItemList;
