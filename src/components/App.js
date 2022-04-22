import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";
import { Container } from "semantic-ui-react";
import { AcProvider } from "../context/ac";

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
    <Container style={{ margin: 20 }}>
      <div className="App">
        <AcProvider>
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
          <NewItemForm
            modalState={modalState}
            setModalState={setModalState}
            url={URL}
            acArray={acArray}
            setAcArray={setAcArray}
          />
        </AcProvider>
      </div>
    </Container>
  );
}

export default App;
