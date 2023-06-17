import React, { useState} from "react";

export const UserContext = React.createContext({});

export function UserContextProvider({children}) {

  const [isClicked, setIsClicked] = useState(false)

  return (
    <UserContext.Provider value={{isClicked, setIsClicked}}>
      {children}
    </UserContext.Provider>
  );
}