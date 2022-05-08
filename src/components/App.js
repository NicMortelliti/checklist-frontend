import React, { useContext, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Toolbar } from "@mui/material";
import { AcContext } from "../context/ac";
import { PhaseContext } from "../context/phase";
import ItemList from "./ItemList";
import NavBar from "./NavBar";
import NewItemForm from "./NewItemForm";

// Set URL variable
const URL = "http://localhost:3000";

function App() {
  // Set up states
  const [rawDataArray, setRawDataArray] = useState([]);
  const [acArray, setAcArray] = useState([]);
  const [phaseArray, setPhaseArray] = useState([]);
  const [responseArray, setResponseArray] = useState([]);

  // Set up contexts
  const { ac } = useContext(AcContext);
  const { currentPhase, setCurrentPhase } = useContext(PhaseContext);

  // Fetch GET checklist data
  useEffect(() => {
    fetch(`${URL}/checklist`)
      .then((r) => r.json())
      .then((data) => {
        data.map((eachItem) => {
          return (eachItem.isChecked = false);
        });
        setRawDataArray(data);
      });
  }, []);

  // Fetch GET aircraft data
  useEffect(() => {
    fetch(`${URL}/aircraft`)
      .then((r) => r.json())
      .then((data) => setAcArray(data));
  }, []);

  // Fetch GET phase data
  useEffect(() => {
    fetch(`${URL}/phases`)
      .then((r) => r.json())
      .then((data) => setPhaseArray(data));
  }, []);

  // Fetch GET response data
  useEffect(() => {
    fetch(`${URL}/responses`)
      .then((r) => r.json())
      .then((data) => setResponseArray(data));
  }, []);

  // If Aircraft is not selected, set current phase to blank string
  useEffect(() => {
    return ac ? null : setCurrentPhase("");
  }, [ac, setCurrentPhase]);

  // If checklist item is checked/unchecked update checked state
  function handleCheck(id) {
    const newRawDataArray = rawDataArray.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isChecked: !item.isChecked,
        };
      } else {
        return item;
      }
    });
    setRawDataArray(newRawDataArray);
  }

  return (
    <div className="App">
      <NavBar />
      <Toolbar />
      <div className="content">
        <Switch>
          {/* Render aircraft list component */}
          <Route exact path="/">
            <ItemList listItems={acArray} />
          </Route>

          {/* Render flight phase selection page */}
          <Route exact path={`/${ac}`}>
            <ItemList listItems={phaseArray} />
          </Route>

          {/* Render checklist component */}
          {/* This worked --> path="/N6044P/Preflight" */}
          <Route exact path={`/${ac}/${currentPhase}`}>
            <ItemList listItems={rawDataArray} handleClick={handleCheck} />
          </Route>

          {/* Render new checklist item form */}
          <Route exact path={`/${ac}/newitem`}>
            <NewItemForm
              url={URL}
              listItems={responseArray}
              data={rawDataArray}
              setData={setRawDataArray}
            />
          </Route>

          {/* Render page not found */}
          <Route>
            <Toolbar />
            <h5>Page not found</h5>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
