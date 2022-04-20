import React from "react";
import { Card, Button } from "semantic-ui-react";

function Item({ itemData: { id, tail, phase, description, response } }) {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>{description}</Card.Header>
        <Button fluid size="medium" color="green">
          {response}
        </Button>
      </Card.Content>
    </Card>
  );
}

export default Item;
