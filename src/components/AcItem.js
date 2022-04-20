import React, { useContext } from "react";
import { Card, Image } from "semantic-ui-react";
import { AcContext } from "../context/ac";

function AcItem({ itemData }) {
  const { setAc } = useContext(AcContext);

  return (
    <Card fluid onClick={() => setAc(itemData.tail)}>
      <Image src={itemData.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{itemData.tail}</Card.Header>
        <Card.Description>{itemData.model}</Card.Description>
      </Card.Content>
    </Card>
  );
}

export default AcItem;
