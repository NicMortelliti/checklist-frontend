import React, { useContext, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormGroup,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { AcContext } from "../context/ac";
import NewItemDescription from "./NewItemDescription";
import FormSelect from "./FormSelect";

function NewItemForm({ url, listItems, acArray, setAcArray }) {
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
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper variant="outlined" sx={{ my: 3, p: 2 }}>
        <Typography variant="h5" color="inherit" align="center">
          New Checklist Item
        </Typography>
        <Typography
          variant="subtitle2"
          color="inherit"
          align="center"
          gutterBottom
        >
          {ac}
        </Typography>

        <FormGroup>
          <FormControl>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item>
                <FormSelect
                  required
                  array={listItems}
                  handleChange={setControlPhase}
                  label={"Phase of flight*"}
                  controlValue={controlPhase}
                />
              </Grid>
              <Grid item>
                <NewItemDescription
                  call={controlCall}
                  setCall={setControlCall}
                />
              </Grid>
              <Grid item>
                <FormSelect
                  array={responseOptions}
                  handleChange={setControlResponse}
                  label={"Response*"}
                  controlValue={controlResponse}
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  onClick={e => handleSubmit(e)}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </FormControl>
        </FormGroup>
      </Paper>
    </Container>
  );
}

export default NewItemForm;
