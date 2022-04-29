import React, { useContext, useEffect, useState } from "react";
import NavBar from "./NavBar";
import ItemList from "./ItemList";
import EmergencyBtn from "./EmergencyBtn";
import NewItemForm from "./NewItemForm";
import AcListModal from "./AcListModal";
import { Box, Toolbar } from "@mui/material";
import { AcContext } from "../context/ac";
import { PhaseProvider } from "../context/phase";

const URL = "http://localhost:3000";

function App() {
  // Set up states
  const [rawDataArray, setRawDataArray] = useState([]);
  const [acArray, setAcArray] = useState([]);
  const [activePhase, setActivePhase] = useState("Preflight");
  const [dialogState, setDialogState] = useState(false);
  const { ac } = useContext(AcContext);

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

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <NavBar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <ItemList
            acArray={acArray}
            checklistItems={rawDataArray}
            activePhase={activePhase}
            setDialogState={setDialogState}
          />
        </Box>
        {ac ? (
          <>
            <NewItemForm
              dialogState={dialogState}
              setDialogState={setDialogState}
              url={URL}
              acArray={acArray}
              setAcArray={setAcArray}
            />
            <EmergencyBtn />
          </>
        ) : null}
        <AcListModal acArray={acArray} />
      </Box>
    </>
  );
}

export default App;
