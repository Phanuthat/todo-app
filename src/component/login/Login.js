import React, { useState, useContext } from "react"
import { StyleWapper } from "./Style"
import { Alert } from "antd"
import styled from "styled-components"
import { Formik } from "formik"
import { Button } from "antd"
import axios from "axios"
import { StoreContext } from "../../context/store"
export const Login = (props) => {
  const { token } = useContext(StoreContext)
  console.log(token)
  const login = async (values, actions) => {
    console.log(values, actions)
    const { username, password } = values

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
        token.setToken(data)
      }
    } catch (error) {
      console.log("error", error.message)
    }
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
        {({ values, handleChange, handleSubmit }) => (
          <StyleWapper>
            <div className='card-login'>
              <h1>Log In</h1>
              <div className='input-wapper-vertical '>
                <InputWithMessageError
                  onChange={handleChange("username")}
                  value={values.username}
                  placeholder='username'
                />
              </div>
              <div className='input-wapper-vertical '>
                <InputWithMessageError
                  onChange={handleChange("password")}
                  value={values.password}
                  placeholder='password'
                  type='password'
                />
              </div>

              <div className='button-login'>
                <Button
                  type='primary'
                  //   loading={loadings[0]}
                  //   onClick={() => this.enterLoading(0)}
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
const InputWithMessageError = ({
  onKeyPress = () => {},
  onKeyUp = () => {},
  onKeyDown = () => {},
  type,
  isErrorStatus = false,
  onFocus = () => {},
  onChange = () => {},
  disabled = false,
  placeholder = "",
  value = "",
  ...otherProps
}) => {
  return (
    <Column isErrorStatus={isErrorStatus}>
      <div>
        <Input
          onKeyPress={onKeyPress}
          onKeyUp={onKeyUp}
          onKeyDown={onKeyDown}
          type={type}
          placeholder={placeholder}
          value={value}
          isErrorStatus={isErrorStatus}
          onChange={onChange}
          onFocus={onFocus}
          disabled={disabled}
          {...otherProps}
        />
      </div>
      {isErrorStatus ? (
        <WarningContainer isErrorStatus={isErrorStatus}>
          <Alert message='Error' type='error' showIcon />
        </WarningContainer>
      ) : (
        <div />
      )}
    </Column>
  )
}
const colors = {
  BLACK: "#26292c",
  LIGHT_GRAY: "#c7c7c7",
  GRAY: "#666666",
  SILVER: "#bebbbb",
  DUST: "#e5e5e5",
  WHITE: "#ffffff",
  WHITE_GRAY: "#e3e3e3",
  RED: "#a31e1e",
}

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`
export const Input = styled.input`
  width: 100%;
  min-width: 30vw;
  height: 40px;
  border: solid 1px ${colors.WHITE_GRAY};
  background-color: ${colors.WHITE};
  padding-left: 5px;
  ${(props) =>
    props.isErrorStatus
      ? "border: solid 1px red"
      : `border: solid 1px ${colors.WHITE_GRAY}`}
  &:focus {
    outline: none;
  }
`

export const WarningContainer = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 5px;
  ${(props) =>
    props.isErrorStatus ? "margin-bottom:5px" : "margin-bottom:0px;"}
`
