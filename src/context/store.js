import React, { useState, createContext } from "react"

export const StoreContext = createContext({})

export const StoreContextProvider = ({ children }) => {
  const [token, setToken] = useState("")
  const store = {
    auth: {
      token: localStorage.getItem('token')|| token,
      setToken,
    },
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
