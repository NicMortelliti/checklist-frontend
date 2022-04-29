import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { AcProvider } from "./context/ac";
import { PhaseProvider } from "./context/phase";

ReactDOM.render(
  <AcProvider>
    <PhaseProvider>
      <App />
    </PhaseProvider>
  </AcProvider>,
  document.getElementById("root")
);
