import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";
import { Container } from "semantic-ui-react";

const URL = "http://localhost:3000/checklist";

function App() {
  // Initialize and set up setter for server data state
  const [rawDataArray, setRawDataArray] = useState([]);
  const [currentAC, setCurrentAC] = useState("N6044P");

  // Fetch GET checklist data
  useEffect(() => {
    fetch(URL)
      .then(r => r.json())
      .then(data => setRawDataArray(data));
  }, []);

  return (
    <Container style={{ margin: 20 }}>
      <div className="App">
        <header className="App-header">
          <NavBar currentAC={currentAC} />
        </header>
        <div>
          <ItemList currentAC={currentAC} checklistItems={rawDataArray} />
          <NewItemForm />
        </div>
      </div>
    </Container>
  );
}

export default App;
