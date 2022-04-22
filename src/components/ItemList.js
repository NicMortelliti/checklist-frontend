import React, { useContext } from "react";
import Item from "./Item";
import AcItem from "./AcItem";
import { AcContext } from "../context/ac";
import { Segment } from "semantic-ui-react";

function ItemList({ acArray, checklistItems, activePhase }) {
  const { ac } = useContext(AcContext);
  return (
    <Segment attached="bottom">
      {
        // If CurrentAC is not blank, list checklist items for selected aircraft
        ac === ""
          ? acArray.map(aircraft => (
              <AcItem key={aircraft.id} itemData={aircraft} />
            ))
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
