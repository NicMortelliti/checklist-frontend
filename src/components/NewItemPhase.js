import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function NewItemPhase({ phase, setPhase }) {
  // Array of phases
  const phaseOptions = [
    { key: "preflight", text: "Preflight", value: "preflight" },
    { key: "taxi", text: "Taxi", value: "taxi" },
    { key: "takeoff", text: "Takeoff", value: "takeoff" },
    { key: "cruise", text: "Cruise", value: "cruise" },
    { key: "landing", text: "Landing", value: "landing" },
  ];

  return (
    <FormControl sx={{ m: 1, width: 250 }}>
      <InputLabel id="phase-select-label">Phase of flight *</InputLabel>
      <Select
        labelId="phase-select"
        id="phase-select"
        value={phase}
        label="Phase of flight *"
        onChange={e => setPhase(e.target.value)}
      >
        {phaseOptions.map(phase => (
          <MenuItem value={phase.key}>{phase.text}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default NewItemPhase;
