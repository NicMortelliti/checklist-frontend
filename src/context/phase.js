import React, { useState } from "react";

const PhaseContext = React.createContext();

function PhaseProvider({ children }) {
  const [currentPhase, setCurrentPhase] = useState("Preflight");
  return (
    <PhaseContext.Provider value={{ currentPhase, setCurrentPhase }}>
      {children}
    </PhaseContext.Provider>
  );
}

export { PhaseContext, PhaseProvider };
