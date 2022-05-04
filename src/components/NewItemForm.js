import React, { useContext, useState } from "react";
import { Button, FormControl, FormGroup, Paper } from "@mui/material";
import { AcContext } from "../context/ac";
import NewItemPhase from "./NewItemPhase";
import NewItemDescription from "./NewItemDescription";
import FormSelect from "./FormSelect";

function NewItemForm({ url, acArray, setAcArray }) {
  const { ac } = useContext(AcContext);
  const [controlPhase, setControlPhase] = useState("");
  const [controlCall, setControlCall] = useState("");
  const [controlResponse, setControlResponse] = useState("");

  // Array of responses
  const responseOptions = [
    "70 KTS",
    "ACCESSIBLE",
    "CHECK",
    "COMPLETE",
    "EXTEND",
  ];

  // Array of phases
  const phaseOptions = [
    "Preflight",
    "Taxi",
    "Takeoff",
    "Cruise",
    "Landing",
    "Emergency",
  ];

  function handleSubmit(e) {
    e.preventDefault();
    const itemData = {
      tail: ac,
      phase: controlPhase,
      description: controlCall,
      response: controlResponse,
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
    setControlPhase("");
    setControlCall("");
    setControlResponse("");
  }

  return (
    <Paper sx={{ pt: "50px" }}>
      <FormGroup>
        <FormControl required>
          <FormSelect
            array={phaseOptions}
            handleChange={setControlPhase}
            label={"Phase of flight*"}
            controlValue={controlPhase}
          />
          <NewItemDescription call={controlCall} setCall={setControlCall} />
          <FormSelect
            array={responseOptions}
            handleChange={setControlResponse}
            label={"Response*"}
            controlValue={controlResponse}
          />
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
