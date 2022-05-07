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
  const { ac } = useContext(AcContext);
  const { currentPhase, setCurrentPhase } = useContext(PhaseContext);

  // Array of phases used by phase selection and new item form
  const phases = [
    "Preflight",
    "Taxi",
    "Takeoff",
    "Cruise",
    "Landing",
    "Emergency",
  ];

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

  // If Aircraft is not selected, set current phase to blank string
  useEffect(() => {
    return ac ? null : setCurrentPhase("");
  }, [ac, setCurrentPhase]);

  // If checklist item is checked/unchecked update checked state
  function handleCheck(id) {
    const newRawDataArray = rawDataArray.map((item) => {
      if (item.id === id) {
        console.log(`Is Checked: ${item.isChecked}`);
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
            <ItemList listItems={phases} />
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
              listItems={phases}
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
