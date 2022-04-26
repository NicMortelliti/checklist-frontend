import React, { useContext, useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  FormGroup,
} from "@mui/material";
import { AcContext } from "../context/ac";
import NewItemPhase from "./NewItemPhase";
import NewItemDescription from "./NewItemDescription";
import NewItemResponse from "./NewItemResponse";

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
            <NewItemPhase phase={phase} setPhase={setPhase} />
            <NewItemDescription call={call} setCall={setCall} />
            <NewItemResponse response={response} setResponse={setResponse} />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </FormGroup>
        </FormControl>
        {/* <Form onSubmit={handleSubmit}>
          <Form.Field
            required
            control={Input}
            label='Description ("Call")'
            placeholder="e.g. Fuel Quantity"
            onChange={e => setCall(e.target.value)}
          />
        </Form> */}
      </DialogContent>
    </Dialog>
  );
}

export default NewItemForm;
