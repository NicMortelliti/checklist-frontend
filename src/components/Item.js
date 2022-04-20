import React, { useState } from "react";
import { Segment, Button } from "semantic-ui-react";

function Item({ itemData: { id, tail, phase, description, response } }) {
  const [checkedState, setCheckedState] = useState(false);

  return (
    <>
      <Segment attached="top">{description}</Segment>
      <Button
        toggle
        attached="bottom"
        active={checkedState}
        content={checkedState ? null : response}
        icon={checkedState ? "check" : null}
        onClick={() => setCheckedState(!checkedState)}
      />
    </>
  );
}

export default Item;
