import { createContext, useState } from "react";

export const UserContext = createContext({
  //it is going to have the initial object value
  currentUser: null,
  setCurentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};