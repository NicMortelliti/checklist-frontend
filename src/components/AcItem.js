import React, { useContext } from "react";
import { Button } from "semantic-ui-react";
import { AcContext } from "../context/ac";

function AcItem({ itemData }) {
  const { setAc } = useContext(AcContext);

  return (
    <Button size="massive" fluid onClick={() => setAc(itemData)}>
      {itemData}
    </Button>
  );
}

export default AcItem;
