import React, { useContext, useEffect, useState } from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";
import AcList from "./AcList";
import { AcContext } from "../context/ac";
import { PhaseContext } from "../context/phase";
import { Toolbar } from "@mui/material";

const URL = "http://localhost:3000";

function App() {
  // Set up states
  const [rawDataArray, setRawDataArray] = useState([]);
  const [acArray, setAcArray] = useState([]);
  const { ac } = useContext(AcContext);
  const { currentPhase } = useContext(PhaseContext);
  const match = useRouteMatch();

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
    <div className="App">
      <NavBar />
      <div className="content">
        <Switch>
          {/* Render aircraft list component */}
          <Route exact path="/">
            <Toolbar />
            <AcList acArray={acArray} />
          </Route>

          {/* Render checklist component */}
          {/* This worked --> path="/N6044P/Preflight" */}
          <Route path={`/${ac}/${currentPhase}`}>
            <ItemList checklistItems={rawDataArray} />
          </Route>

          {/* Render new checklist item form */}
          <Route exact path={`/${ac}/newitem`}>
            <NewItemForm url={URL} acArray={acArray} setAcArray={setAcArray} />
          </Route>
          <Route>
            <Toolbar />
            <Toolbar />
            <h5>Page not found</h5>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
