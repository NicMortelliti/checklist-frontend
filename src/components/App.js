import React, { useContext, useEffect, useState } from "react";
import NavBar from "./NavBar";
import AddBtn from "./AddBtn";
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";
import AcListModal from "./AcListModal";
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
            <ItemList acArray={acArray} checklistItems={rawDataArray} />
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
            <AddBtn handleClick={setDialogState} />
          </>
        ) : null}
        <AcListModal acArray={acArray} />
      </Box>
    </>
  );
}

export default App;
