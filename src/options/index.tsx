import "./index.css"

import { useEffect } from "react"

import { useStorage } from "@plasmohq/storage/hook"

import type { ExtensionSettings } from "~types/settings-types"

function OptionsPage() {
  const [settings, setSettings] = useStorage<ExtensionSettings>("settings")

  useEffect(() => {
    console.log(settings)
  }, [settings])

  return <div id="options-main-container">{JSON.stringify(settings)}</div>
}

export default OptionsPage
