import React, { useState } from "react";

const EmergencyContext = React.createContext();

function EmergencyProvider({ children }) {
  const [isEmergency, setIsEmergency] = useState(false);

  return (
    <EmergencyContext.Provider value={{ isEmergency, setIsEmergency }}>
      {children}
    </EmergencyContext.Provider>
  );
}

export { EmergencyContext, EmergencyProvider };
