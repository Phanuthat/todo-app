import React, { useContext, useState } from "react"
import { StyleWapper } from "./Style"
import { notification, Button } from "antd"
import { Formik } from "formik"
import axios from "axios"
import { StoreContext } from "../../context/store"
import { validLoginForm } from "../../validForm/loginForm"
import { InputWithErrorMessage } from "../../common"
import { Redirect } from "react-router-dom"
export const Login = (props) => {
  const { auth } = useContext(StoreContext)
  const [redirect, setRedirect] = useState(false)
  const login = async (values, actions) => {
    const { username, password } = values
    const validLogin = validLoginForm(username, password)
    if (validLogin) {
      actions.setErrors(validLogin)
    }
    try {
      const res = await axios.post(
        `https://candidate.neversitup.com/todo/users/auth`,
        {
          username,
          password,
        },
      )
      const data = res.data
      if (data) {
        auth.setToken(localStorage.setItem("token", JSON.stringify(data)))
        axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`
        props.history.push("/todo")
      }
    } catch (error) {
      openNotificationWithIcon("error", error, error.message)
    }
  }

  const openNotificationWithIcon = (type, error, message) => {
    notification[type]({
      message: `${error}`,
      description: `${message}`,
    })
  }

  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={(values, actions) => {
          login(values, actions)
        }}
      >
        {({ values, handleChange, handleSubmit, errors }) => (
          <StyleWapper>
            <div className='card-login'>
              <h1>Log In</h1>
              <div className='input-wapper-vertical '>
                <InputWithErrorMessage
                  onChange={handleChange("username")}
                  value={values.username}
                  placeholder='username'
                  isErrorStatus={!!errors.username}
                  errorMessage={errors.username}
                />
              </div>
              <div className='input-wapper-vertical '>
                <InputWithErrorMessage
                  onChange={handleChange("password")}
                  value={values.password}
                  placeholder='password'
                  type='password'
                  isErrorStatus={!!errors.password}
                  errorMessage={errors.password}
                />
              </div>
              <div className='button-login'>
                <Button
                  type='primary'
                  onClick={handleSubmit}
                  disabled={!values.username && !values.password}
                >
                  Log in
                </Button>
              </div>
            </div>
          </StyleWapper>
        )}
      </Formik>
    </div>
  )
}
