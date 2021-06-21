import React from 'react'
export const UserContext = React.createContext();
export const UserStorage = ({children}) => {
  return <UserContext.Provider value={{user: 'Diego'}}>{children}</UserContext.Provider>
  
}
