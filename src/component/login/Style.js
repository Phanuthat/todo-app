import styled from "styled-components"
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
