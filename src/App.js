import React from "react"
import "./App.css"
import { LoginPage } from "./pages/LoginPage"
import "antd/dist/antd.css"
import { StoreContextProvider } from "./context/store"
function App() {
  return (
    <StoreContextProvider>
      <LoginPage />
    </StoreContextProvider>
  )
}

export default App
