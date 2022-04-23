import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ItemList from "./ItemList";
// import NewItemForm from "./NewItemForm";
import AcListModal from "./AcListModal";
import { AcProvider } from "../context/ac";
import { PhaseProvider } from "../context/phase";

const URL = "http://localhost:3000";

function App() {
  // Set up states
  const [rawDataArray, setRawDataArray] = useState([]);
  const [acArray, setAcArray] = useState([]);
  const [activePhase, setActivePhase] = useState("Preflight");
  const [modalState, setModalState] = useState(false);

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
    <div className="App">
      <AcProvider>
        <PhaseProvider>
          <NavBar
            activePhase={activePhase}
            setActivePhase={setActivePhase}
            setModalState={setModalState}
          />
          <ItemList
            acArray={acArray}
            checklistItems={rawDataArray}
            activePhase={activePhase}
          />
          {/*<NewItemForm
            modalState={modalState}
            setModalState={setModalState}
            url={URL}
            acArray={acArray}
            setAcArray={setAcArray}
          /> */}
          <AcListModal acArray={acArray} />
        </PhaseProvider>
      </AcProvider>
    </div>
  );
}

export default App;
