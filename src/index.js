import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import { AcProvider } from "./context/ac";
import { EmergencyProvider } from "./context/emergency";
import { PhaseProvider } from "./context/phase";

ReactDOM.render(
  <AcProvider>
    <EmergencyProvider>
      <PhaseProvider>
        <Router>
          <App />
        </Router>
      </PhaseProvider>
    </EmergencyProvider>
  </AcProvider>,
  document.getElementById("root")
);
