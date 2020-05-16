import React from "react"
import "./App.css"
import { LoginPage } from "./pages/LoginPage"
import { TodoPage } from "./pages/TodoPage"
import "antd/dist/antd.css"
import { StoreContextProvider } from "./context/store"
import { BrowserRouter, Switch, Route } from "react-router-dom"
function App() {
  return (
    <StoreContextProvider>
      <BrowserRouter>
        <Switch>
          <Route component={LoginPage} path='/login' />
          <Route component={TodoPage} path='/todo' />
          <Route component={TodoPage} path='/' exact />
        </Switch>
      </BrowserRouter>
    </StoreContextProvider>
  )
}

export default App
