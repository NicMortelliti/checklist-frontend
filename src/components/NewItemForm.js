import React, { useContext, useState } from "react";
import { Button, FormControl, FormGroup, Paper } from "@mui/material";
import { AcContext } from "../context/ac";
import NewItemPhase from "./NewItemPhase";
import NewItemDescription from "./NewItemDescription";
import NewItemResponse from "./NewItemResponse";

function NewItemForm({ url, acArray, setAcArray }) {
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
      .then(r => console.log("Success:", JSON.stringify(r)))
      .then(newItem => setAcArray([...acArray, newItem]))
      .then(updateStates);
  }

  function updateStates() {
    setPhase("");
    setCall("");
    setResponse("");
  }

  return (
    <Paper sx={{ pt: "50px" }}>
      <FormGroup>
        <FormControl required>
          <NewItemPhase phase={phase} setPhase={setPhase} />
          <NewItemDescription call={call} setCall={setCall} />
          <NewItemResponse response={response} setResponse={setResponse} />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={e => handleSubmit(e)}
          >
            Submit
          </Button>
        </FormControl>
      </FormGroup>
    </Paper>
  );
}

export default NewItemForm;
