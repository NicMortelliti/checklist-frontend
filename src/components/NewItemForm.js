import React, { useContext, useState } from "react";
import { Form, Input, Modal, Select } from "semantic-ui-react";
import { AcContext } from "../context/ac";

function NewItemForm({ modalState, setModalState }) {
  const { ac } = useContext(AcContext);

  const phaseOptions = [
    { key: "preflight", text: "Preflight", value: "preflight" },
    { key: "taxi", text: "Taxi", value: "taxi" },
    { key: "takeoff", text: "Takeoff", value: "takeoff" },
    { key: "cruise", text: "Cruise", value: "cruise" },
    { key: "landing", text: "Landing", value: "landing" },
  ];

  const responseOptions = [
    { key: "accessible", text: "ACCESSIBLE", value: "accessible" },
    { key: "check", text: "CHECK", value: "check" },
    { key: "complete", text: "COMPLETE", value: "complete" },
    { key: "extend", text: "EXTEND", value: "extend" },
    { key: "latched", text: "LATCHED", value: "latched" },
    { key: "off", text: "OFF", value: "off" },
    { key: "on", text: "ON", value: "on" },
    { key: "present", text: "PRESENT", value: "present" },
    { key: "retract", text: "RETRACT", value: "retract" },
    { key: "set", text: "SET", value: "set" },
  ];

  return (
    <Modal
      dimmer="blurring"
      onClose={() => setModalState(false)}
      onOpen={() => setModalState(true)}
      open={modalState}
    >
      <Modal.Header>{`Add new checklist item for ${ac}`} </Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field
            control={Select}
            label="Phase of flight"
            options={phaseOptions}
            placeholder="Phase"
          />
          <Form.Field
            control={Input}
            label='Description ("call")'
            placeholder="Fuel Quantity"
          />
          <Form.Field
            control={Select}
            label="Response"
            options={responseOptions}
            placeholder="Response"
          />
        </Form>
      </Modal.Content>
    </Modal>
  );
}

export default NewItemForm;
