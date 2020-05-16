import React, { useState, createContext } from "react"

export const StoreContext = createContext({})

export const StoreContextProvider = ({ children }) => {
  const [token, setToken] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState("")

  const store = {
    auth: {
      token: localStorage.getItem("token") || token,
      setToken,
    },
    modal: {
      showModal,
      setShowModal,
      modalType,
      setModalType,
    },
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
