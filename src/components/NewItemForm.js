import React, { useContext, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { AcContext } from "../context/ac";
import { PhaseContext } from "../context/phase";

// Array of responses
const RESPONSES = ["70 KTS", "ACCESSIBLE", "CHECK", "COMPLETE", "EXTEND"];

function NewItemForm({ url, listItems, acArray, setAcArray }) {
  const { ac } = useContext(AcContext);
  const { currentPhase } = useContext(PhaseContext);
  const [formData, setFormData] = useState({
    call: "",
    response: "",
  });

  // Post new form data to backend
  function handleSubmit(e) {
    // Prevent reloading page
    e.preventDefault();

    // Put information into single variable
    const itemData = {
      tail: ac,
      phase: currentPhase,
      description: formData.call,
      response: formData.response,
    };

    // Fetch POST data to backend
    fetch(`${url}/checklist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    })
      .then((r) => r.json())
      .then((r) => console.log("Success:", JSON.stringify(r)))
      .then((newItem) => setAcArray([...acArray, newItem]))
      .then(updateStates);
  }

  // Clear controlled form data
  function updateStates() {
    setFormData({
      call: "",
      response: "",
    });
  }

  return (
    // Constrain width of container with maxWidth property
    // in case page is displayed on desktop
    <Container component="main" maxWidth="sm">
      <FormGroup>
        <FormControl>
          {/* Header */}
          <Typography variant="h5" color="inherit" align="center">
            New Checklist Item
          </Typography>

          {/* Subheader */}
          <Typography
            variant="subtitle2"
            color="inherit"
            align="center"
            gutterBottom>
            {ac} - {currentPhase}
          </Typography>

          {/* Checklist item call text entry */}
          <TextField
            required
            sx={{ mb: 1, width: 1 }}
            value={formData.call}
            label="Call (e.g. 'Parking Brake')"
            variant="outlined"
            onChange={(e) => setFormData(e.target.value)}
          />

          {/* Checklist item response selection */}
          <InputLabel>"Response"</InputLabel>
          <Select
            required
            sx={{ width: 1 }}
            value={formData.response}
            label={"Response"}
            onChange={(e) => setFormData(e.target.value)}>
            {RESPONSES.map((arrayItem) => (
              <MenuItem key={arrayItem} value={arrayItem}>
                {arrayItem}
              </MenuItem>
            ))}
          </Select>

          {/* Submit button */}
          <Button
            // Button position calculation:
            //  screen width - button width
            //        = white space / left side and right side (2)
            //                = left starting position
            //  100% - 30% = 70% / 2 = 35%
            sx={{ left: "35%", width: "30%" }}
            variant="contained"
            color="primary"
            type="submit"
            component={Link}
            to={`/${ac}/${currentPhase}`}
            onClick={(e) => handleSubmit(e)}>
            Submit
          </Button>
        </FormControl>
      </FormGroup>
    </Container>
  );
}

export default NewItemForm;
