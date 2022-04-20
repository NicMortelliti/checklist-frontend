import React, { useContext } from "react";
import Item from "./Item";
import AcItem from "./AcItem";
import { AcContext } from "../context/ac";
import { Container } from "semantic-ui-react";

function ItemList({ acArray, checklistItems, activePhase }) {
  const { ac } = useContext(AcContext);
  return (
    <Container>
      {
        // If CurrentAC is not blank, list checklist items for selected aircraft
        ac === ""
          ? acArray.map(ac => <AcItem key={ac} itemData={ac} />)
          : checklistItems.map(item =>
              ac === item.tail ? (
                activePhase === item.phase ? (
                  <Item key={item.id} itemData={item} />
                ) : null
              ) : null
            )
      }
    </Container>
  );
}

export default ItemList;
