import styled from "styled-components"
import { colors } from "../../colors"
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
