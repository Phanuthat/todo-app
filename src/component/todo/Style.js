import styled from "styled-components"
import { colors } from "../../colors"

export const StyleWapper = styled.div`
  align-items: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 50px;
  .space-card {
    margin-bottom: 50px;
  }
  .button-center {
    display: flex;
    justify-content: center;
  }
`
export const StyleCardWapper = styled.div`
  display: flex;
  width: 60vw;
  height: 40vh;
  flex-direction: column;
  padding: 20px;
  border: solid 1px ${colors.WHITE_GRAY};
  .position-end {
    display: flex;
    justify-content: flex-end;
  }
`
