import React from "react";
import { Card, Button } from 'semantic-ui-react'


function Item({itemData:{
  id,
  tail,
  phase,
  description,
  response}}) {
  return (
    <Card>
      <p>{description}</p>
      <Button color='green'>{response}</Button>
    </Card>
  );
}

export default Item;
