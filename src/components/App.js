import React, { useEffect } from "react";
import NavBar from "./NavBar";
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";

const URL = "http://localhost:3000/checklist";

function App() {
  // Fetch GET checklist data
  useEffect(() => {
    fetch(URL)
      .then(r => r.json())
      .then(data => console.log(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div>
        <ItemList />
        <NewItemForm />
      </div>
    </div>
  );
}

export default App;
