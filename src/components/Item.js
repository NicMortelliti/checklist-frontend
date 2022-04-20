import React from "react";
import { Segment, Button } from "semantic-ui-react";

function Item({ itemData: { id, tail, phase, description, response } }) {
  return (
    <>
      <Segment attached="top">{description}</Segment>
      <Button
        attached="bottom"
        content={response}
        onClick={() => console.log(response)}
      />
    </>
  );
}

export default Item;
