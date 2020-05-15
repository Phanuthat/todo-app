import React from "react"
import { Alert } from "antd"
import { Column, Input, WarningContainer } from "./Styled"
export const InputWithErrorMessage = ({
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
  errorMessage = "",
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
          <Alert message={errorMessage} type='error' showIcon />
        </WarningContainer>
      ) : (
        <div />
      )}
    </Column>
  )
}
