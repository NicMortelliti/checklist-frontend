import React, { useContext, useState } from "react";
import { Button, Form, Input, Message, Modal, Select } from "semantic-ui-react";
import { AcContext } from "../context/ac";

function NewItemForm({ modalState, setModalState, url }) {
  const { ac } = useContext(AcContext);
  const [phase, setPhase] = useState("");
  const [call, setCall] = useState("");
  const [response, setResponse] = useState("");

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

  function handleSubmit(e) {
    e.preventDefault();
    console.log(phase, call, response);
    <Message
      success
      header="Successfully added the following checklist item"
    />;
    
  }

  return (
    <Modal
      size="small"
      dimmer="blurring"
      onClose={() => setModalState(false)}
      onOpen={() => setModalState(true)}
      open={modalState}
    >
      <Modal.Header>{`Add new checklist item for ${ac}`} </Modal.Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
          <Form.Field
            required
            control={Select}
            label="Phase of flight"
            options={phaseOptions}
            placeholder="Phase"
            onChange={e => setPhase(e.target.innerText)}
          />
          <Form.Field
            required
            control={Input}
            label='Description ("Call")'
            placeholder="Fuel Quantity"
            onChange={e => setCall(e.target.value)}
          />
          <Form.Field
            required
            control={Select}
            label="Response"
            options={responseOptions}
            placeholder="Response"
            onChange={e => setResponse(e.target.innerText)}
          />
          <Button type="submit">Submit</Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
}

export default NewItemForm;
