import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function NewItemResponse({ response, setResponse }) {
  // Array of responses
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
    <FormControl sx={{ m: 1, width: 250 }}>
      <InputLabel id="response-select-label">Response *</InputLabel>
      <Select
        labelId="response-select"
        id="response-select"
        value={response}
        label="Response *"
        onChange={e => setResponse(e.target.value)}
      >
        {responseOptions.map(response => (
          <MenuItem value={response.key}>{response.text}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default NewItemResponse;
