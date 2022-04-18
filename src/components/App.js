import React from "react";
import NavBar from "./NavBar";
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";

function App() {
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
