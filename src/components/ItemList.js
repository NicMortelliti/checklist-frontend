import React from "react";
import Item from "./Item";

function ItemList({checklistItems}) {
  return (
    <div>
      {checklistItems.map(item => {
        return <Item key={item.id} itemData={item}/>})
  }
    </div>

  );
}

export default ItemList;
