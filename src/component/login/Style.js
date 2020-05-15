import styled from "styled-components"
import { colors } from "../../colors"

export const StyleWapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .card-login {
    display: flex;
    max-width: 600px;
    max-height: 400px;
    width: 40vw;
    height: 40vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border: solid 1px ${colors.WHITE_GRAY};
  }
  .input-wapper-vertical {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .button-login {
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: 20px;
  }
`
