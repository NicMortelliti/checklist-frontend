import React, { useContext } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { PhaseContext } from "../context/phase";

function PhaseSelect() {
  const { currentPhase, setCurrentPhase } = useContext(PhaseContext);

  const phases = ["Preflight", "Taxi", "Takeoff", "Cruise", "Landing"];

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="phase">Phase</InputLabel>
      <Select labelId="phase" id="phase" value={currentPhase} label="Phase">
        {phases.map(phase => {
          return (
            <MenuItem
              key={phase}
              value={phase}
              onClick={() => setCurrentPhase(phase)}
            >
              {phase}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

export default PhaseSelect;
