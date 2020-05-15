import React, { useState, createContext } from "react"

export const StoreContext = createContext({})

export const StoreContextProvider = ({ children }) => {
  const [token, setToken] = useState("")
  console.log("token", token)
  const store = {
    token: {
      token,
      setToken,
    },
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
