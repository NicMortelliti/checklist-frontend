import React, { useContext } from "react";
import { Modal } from "semantic-ui-react";
import AcItem from "./AcItem";
import { AcContext } from "../context/ac";

function AcListModal({ acArray }) {
  const { ac } = useContext(AcContext);

  return (
    <Modal open={!ac} scrolling={true}>
      <Modal.Header>Select an aircraft</Modal.Header>
      <Modal.Content>
        {acArray.map(aircraft => (
          <AcItem key={aircraft.id} itemData={aircraft} />
        ))}
      </Modal.Content>
    </Modal>
  );
}

export default AcListModal;
