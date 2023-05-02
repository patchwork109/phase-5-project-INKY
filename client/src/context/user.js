import React, { useState } from "react";

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [currentCart, setCurrentCart] = useState(null);
  return (
    <UserContext.Provider value={{ currentCart, setCurrentCart }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };