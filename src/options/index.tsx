import styled from "styled-components"
import "./index.css"
import GlobalStyle from "~/shared/styles/global"
import ContentPane from "./components/content-pane"

function OptionsPage() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <ContentPane />
      </Container>
    </>
  )
}

const Container = styled.div`
  background-color: hsl(var(--colors-gray-3));
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-weight: 500;
`

export default OptionsPage
