import React, { useContext, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  FormGroup,
  MenuItem,
  Select,
} from "@mui/material";
import { AcContext } from "../context/ac";

function NewItemForm({
  dialogState,
  setDialogState,
  url,
  acArray,
  setAcArray,
}) {
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
    const itemData = {
      tail: ac,
      phase: phase,
      description: call,
      response: response,
    };
    fetch(`${url}/checklist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    })
      .then(r => r.json())
      .then(newItem => setAcArray([...acArray, newItem]));
  }

  return (
    <Dialog open={dialogState}>
      <DialogTitle>{`Add new checklist item for ${ac}`} </DialogTitle>
      <DialogContent>
        <FormControl required>
          <FormGroup>
            <Select
              labelId="phase-select"
              id="phase-select"
              value="testing..."
              label="Phase of flight *"
              onChange={e => setPhase(e.target.innerText)}
            >
              {phaseOptions.map(phase => (
                <MenuItem value={phase}>{phase}</MenuItem>
              ))}
            </Select>
          </FormGroup>
        </FormControl>
        {/* <Form onSubmit={handleSubmit}>
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
            placeholder="e.g. Fuel Quantity"
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
        </Form> */}
      </DialogContent>
    </Dialog>
  );
}

export default NewItemForm;
