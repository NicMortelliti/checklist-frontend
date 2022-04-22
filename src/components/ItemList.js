import React, { useContext } from "react";
import Item from "./Item";
import { AcContext } from "../context/ac";
import { Segment } from "semantic-ui-react";

function ItemList({ checklistItems, activePhase }) {
  const { ac } = useContext(AcContext);
  return (
    <Segment attached="bottom">
      {
        // If CurrentAC is not blank, list checklist items for selected aircraft
        ac === ""
          ? null
          : checklistItems.map(item =>
              ac === item.tail ? (
                activePhase === item.phase ? (
                  <Item key={item.id} itemData={item} />
                ) : null
              ) : null
            )
      }
    </Segment>
  );
}

export default ItemList;
