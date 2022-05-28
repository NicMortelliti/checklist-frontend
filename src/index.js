import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { usePromiseTracker } from "react-promise-tracker";
import { Rings } from "react-loader-spinner";
import App from "./components/App";
import { AcProvider } from "./context/ac";
import { PhaseProvider } from "./context/phase";

const LoadingIndicator = () => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress && (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Rings
          ariaLabel="loading-indicator"
          color="#0ead69"
          height={100}
          width={100}
        />
      </div>
    )
  );
};

ReactDOM.render(
  <AcProvider>
    <PhaseProvider>
      <Router>
        <App />
        <LoadingIndicator />
      </Router>
    </PhaseProvider>
  </AcProvider>,
  document.getElementById("root")
);
