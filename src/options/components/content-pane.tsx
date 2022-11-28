import styled from "styled-components"

import { useStorage } from "@plasmohq/storage/hook"

import type { ExtensionSettings } from "~types/settings-types"

import Option from "./option"
import MeasurementSystemSwitch from "./option/special/measurement-system"

export default function ContentPane() {
  const [settings, setSettings] = useStorage<ExtensionSettings>("settings")

  const setValue = (key, value) => {
    const newSettings = { ...settings }
    newSettings[key] = value
    setSettings(newSettings)
  }

  if (!settings) return <></>

  return (
    <Container>
      <Category>Measurement System</Category>
      <MeasurementSystemSwitch
        name="measurementSystem"
        value={settings.measurementSystem}
        onChange={(value) => setValue("measurementSystem", value)}
      />

      <Category>Miscellaneous</Category>
      {Object.keys(settings).map((key) => {
        if (key === "measurementSystem") return <></>
        return (
          <Option
            key={key}
            name={key}
            value={settings[key]}
            onChange={(value) => setValue(key, value)}
          />
        )
      })}
    </Container>
  )
}

const Container = styled.div`
  background-color: hsl(var(--colors-bg));
  width: 55rem;
  box-shadow: 0.5rem 0px 0.75rem hsla(var(--colors-highContrast), 0.2),
    -0.5rem 0px 0.75rem hsla(var(--colors-highContrast), 0.2);
  padding: 2.5rem;
`

const Category = styled.h1`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.8rem;
  color: hsl(var(--colors-lowContrast));
  &:not(:first-of-type) {
    margin-top: 1.25rem;
  }
`
