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
  align-items: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 50px;
`
export const Card = styled.div`
  display: flex;
  width: 60vw;
  height: 40vh;
  flex-direction: column;
  padding: 20px;
  border: solid 1px ${colors.WHITE_GRAY};
`
