import { useEffect } from "react"
import styled from "styled-components"

import { useStorage } from "@plasmohq/storage/hook"

import GlobalStyle from "~styles/global"
import type { ExtensionSettings } from "~types/settings-types"

function OptionsPage() {
  const [settings, setSettings] = useStorage<ExtensionSettings>("settings")

  useEffect(() => {
    console.log(settings)
  }, [settings])

  return (
    <Container>
      <GlobalStyle />
      {JSON.stringify(settings)}
    </Container>
  )
}

const Container = styled.div`
  background-color: red;
`

export default OptionsPage
