import React, { useContext } from "react";
import { Card } from "semantic-ui-react";
import { AcContext } from "../context/ac";

function AcItem({ itemData }) {
  const { setAc } = useContext(AcContext);

  return (
    <Card raised fluid onClick={() => setAc(itemData.tail)}>
      <Card.Header textAlign="center">{itemData.tail}</Card.Header>
    </Card>
  );
}

export default AcItem;
