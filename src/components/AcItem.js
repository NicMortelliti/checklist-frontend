import React from "react";
import { Button } from "semantic-ui-react";

function AcItem({ itemData }) {
  return (
    <Button size="massive" fluid>
      {itemData}
    </Button>
  );
}

export default AcItem;
