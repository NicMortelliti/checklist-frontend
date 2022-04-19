import React, { useState } from "react";

const AcContext = React.createContext();

function AcProvider({ children }) {
  const [ac, setAc] = useState("");
  return (
    <AcContext.Provider value={{ ac, setAc }}>{children}</AcContext.Provider>
  );
}

export { AcContext, AcProvider };
