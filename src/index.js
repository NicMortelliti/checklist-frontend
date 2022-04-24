import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { AcProvider } from "./context/ac";

ReactDOM.render(
  <AcProvider>
    <App />
  </AcProvider>,
  document.getElementById("root")
);
