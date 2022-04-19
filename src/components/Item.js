import React from "react";
import { Container } from 'semantic-ui-react'


function Item({itemData:{
  id,
  tail,
  phase,
  description,
  response}}) {
  return (
    <Container>
      <p key={id}>{`${tail}: ${phase} ${description} - ${response}`}</p>
    </Container>
  );
}

export default Item;
