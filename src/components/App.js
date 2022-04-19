import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";
import { Container } from "semantic-ui-react";
import { AcProvider } from "../context/ac";

const URL = "http://localhost:3000/checklist";

function App() {
  // Set up states
  const [rawDataArray, setRawDataArray] = useState([]);
  const [acArray, setAcArray] = useState([]);

  // Fetch GET checklist data
  useEffect(() => {
    fetch(URL)
      .then(r => r.json())
      .then(data => setRawDataArray(data));
  }, []);

  useEffect(() => {
    let newArray = [];
    rawDataArray.map(item => {
      return newArray.includes(item.tail) ? null : newArray.push(item.tail);
    });

    setAcArray(newArray);
  }, [rawDataArray]);

  return (
    <Container style={{ margin: 20 }}>
      <div className="App">
        <AcProvider>
          <NavBar />
          <ItemList acArray={acArray} checklistItems={rawDataArray} />
          <NewItemForm />
        </AcProvider>
      </div>
    </Container>
  );
}

export default App;
