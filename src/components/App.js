import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";
import AcList from "./AcList";
import { AcContext } from "../context/ac";

const URL = "http://localhost:3000";

function App() {
  // Set up states
  const [rawDataArray, setRawDataArray] = useState([]);
  const [acArray, setAcArray] = useState([]);
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

  // Fetch GET aircraft data
  useEffect(() => {
    fetch(`${URL}/aircraft`)
      .then(r => r.json())
      .then(data => setAcArray(data));
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <AcList acArray={acArray} />
            </Route>
            <Route exact path={ac + "/checklist"}>
              <ItemList checklistItems={rawDataArray} />
            </Route>
            <Route exact path={ac + "/checklist/newitem"}>
              <NewItemForm
                url={URL}
                acArray={acArray}
                setAcArray={setAcArray}
              />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
