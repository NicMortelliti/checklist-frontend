import React from "react";
import { Button, Modal } from "semantic-ui-react";
import AcItem from "./AcItem";

function AcListModal({ acArray }) {
  return (
    <Modal open={true} trigger={<Button>Select Aircraft</Button>}>
      <Modal.Content scrolling>
        <Modal.Header>Select an aircraft</Modal.Header>
        {acArray.map(aircraft => (
        <AcItem key={aircraft.id} itemData={aircraft} />
        ))}
      </Modal.Content>
    </Modal>
  );
}

export default AcListModal;
