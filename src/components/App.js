import React, { useContext, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Toolbar } from "@mui/material";
import { AcContext } from "../context/ac";
import { PhaseContext } from "../context/phase";
import AddBtn from "./AddBtn";
import AcList from "./AcList";
import CheckList from "./CheckList";
import PhaseList from "./PhaseList";
import NavBar from "./NavBar";
import NewItemForm from "./NewItemForm";

// Set URL variable
const URL = "http://localhost:3000";

function App() {
  // Set up states
  const [checklistArray, setChecklistArray] = useState([]);
  const [acArray, setAcArray] = useState([]);
  const [phaseArray, setPhaseArray] = useState([]);
  const [responseArray, setResponseArray] = useState([]);

  // Set up contexts
  const { currentAc } = useContext(AcContext);
  const { currentPhase, setCurrentPhase } = useContext(PhaseContext);

  // Fetch GET data from backend
  useEffect(() => {
    // Iterate through this object
    [
      {
        category: "checklist",
        stateSetter: setChecklistArray,
      },
      {
        category: "aircraft",
        stateSetter: setAcArray,
      },
      {
        category: "phases",
        stateSetter: setPhaseArray,
      },
      {
        category: "responses",
        stateSetter: setResponseArray,
      },
    ].forEach((state) => {
      fetch(`${URL}/${state.category}`)
        .then((r) => r.json())
        .then((data) => state.stateSetter(data));
    });
  }, []);

  // If Aircraft is not selected, set current phase to blank string
  useEffect(() => {
    return currentAc ? null : setCurrentPhase("");
  }, [currentAc, setCurrentPhase]);

  // If checklist item is checked/unchecked update checked state
  function handleCheck(id) {
    const newRawDataArray = checklistArray.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isChecked: !item.isChecked,
        };
      } else {
        return item;
      }
    });
    setChecklistArray(newRawDataArray);
  }

  return (
    <div className="App">
      <NavBar />
      <Toolbar />
      {/* Display AddBtn component only when checklist is displayed */}
      {currentPhase ? <AddBtn /> : null}
      <div className="content">
        <Switch>
          {/* Render aircraft list component */}
          <Route exact path="/">
            <AcList aircraft={acArray} />
          </Route>

          {/* Render flight phase selection page */}
          <Route exact path={`/${currentAc}`}>
            <PhaseList phases={phaseArray} />
          </Route>

          {/* Render checklist component if not Emergency */}
          {/* This worked --> path="/N6044P/Preflight" */}
          {acArray.map((ac) => {
            return phaseArray.map((phase) => {
              return (
                <Route key={phase.id} exact path={`/${ac.tail}/${phase.phase}`}>
                  {console.log(`App /${ac.tail}/${phase.phase}`)}
                  <CheckList
                    checklist={checklistArray}
                    phase={phase.phase}
                    handleClick={handleCheck}
                  />
                </Route>
              );
            });
          })}

          {/* Render new checklist item form */}
          <Route exact path={`/${currentAc}/newitem`}>
            <NewItemForm
              url={URL}
              listItems={responseArray}
              data={checklistArray}
              setData={setChecklistArray}
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
