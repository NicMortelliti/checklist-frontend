import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";

const URL = "http://localhost:3000/checklist";

function App() {
  // Initialize and set up setter for server data state
  const [rawDataArray, setRawDataArray] = useState([])

  // Fetch GET checklist data
  useEffect(() => {
    fetch(URL)
      .then(r => r.json())
      .then(data => setRawDataArray(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div>
        <ItemList checklistItems={rawDataArray}/>
        <NewItemForm />
      </div>
    </div>
  );
}

export default App;
