import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import { AcProvider } from "./context/ac";
import { PhaseProvider } from "./context/phase";

ReactDOM.render(
  <AcProvider>
    <PhaseProvider>
      <Router>
        <App />
      </Router>
    </PhaseProvider>
  </AcProvider>,
  document.getElementById("root")
);
