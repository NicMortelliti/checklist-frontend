import React, { useState } from "react";

const AcContext = React.createContext();

function AcProvider({ children }) {
  const [currentAc, setCurrentAc] = useState("");
  return (
    <AcContext.Provider value={{ currentAc, setCurrentAc }}>
      {children}
    </AcContext.Provider>
  );
}

export { AcContext, AcProvider };
