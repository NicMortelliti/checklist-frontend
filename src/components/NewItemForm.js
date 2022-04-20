import React, { useState } from "react";
import { Modal } from "semantic-ui-react";

function NewItemForm() {
  const [modalState, setModalState] = useState(true);
  return (
    <Modal
      dimmer="blurring"
      onClose={() => setModalState(false)}
      onOpen={() => setModalState(true)}
      open={modalState}
    >
      <Modal.Header>Add new checklist item</Modal.Header>
    </Modal>
  );
}

export default NewItemForm;
