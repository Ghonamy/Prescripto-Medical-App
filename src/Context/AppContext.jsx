import { createContext } from "react";
import { doctors } from "../Assets/Assets";

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const ContextValue = { doctors };
  return (
    <AppContext.Provider value={ContextValue}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
