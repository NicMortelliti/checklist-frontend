import React, { useContext, useEffect, useState } from "react";
import NavBar from "./NavBar";
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";
import AcList from "./AcList";
import { Box } from "@mui/material";
import { AcContext } from "../context/ac";
import { PhaseContext } from "../context/phase";

const URL = "http://localhost:3000";

function App() {
  // Set up states
  const [rawDataArray, setRawDataArray] = useState([]);
  const [acArray, setAcArray] = useState([]);
  const [dialogState, setDialogState] = useState(false);
  const { ac } = useContext(AcContext);
  const { setCurrentPhase } = useContext(PhaseContext);

  // Fetch GET checklist data
  useEffect(() => {
    fetch(`${URL}/checklist`)
      .then(r => r.json())
      .then(data => {
        data.map(eachItem => {
          return (eachItem.checked = false);
        });
        setRawDataArray(data);
      });
  }, []);

  useEffect(() => {
    fetch(`${URL}/aircraft`)
      .then(r => r.json())
      .then(data => setAcArray(data));
  }, []);

  useEffect(() => {
    setCurrentPhase(ac ? "Preflight" : "");
  }, [ac]);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <NavBar />
        {ac ? (
          <Box component="main" sx={{ flexGrow: 1 }}>
            <ItemList
              checklistItems={rawDataArray}
              handleAddClick={setDialogState}
            />
          </Box>
        ) : null}
        {ac ? (
          <>
            <NewItemForm
              dialogState={dialogState}
              setDialogState={setDialogState}
              url={URL}
              acArray={acArray}
              setAcArray={setAcArray}
            />
          </>
        ) : null}
        <AcList acArray={acArray} />
      </Box>
    </>
  );
}

export default App;
