import styled from "styled-components"
import { useStorage } from "@plasmohq/storage/hook"
import type { ExtensionSettings } from "~/shared/types/settings"
import { MeasurementSystems } from "~/shared/types/settings/enums"
import BooleanOption from "./option/primitives/boolean-option"
import EnumOption from "./option/primitives/enum-option"

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
      <EnumOption
        name="measurementSystem"
        value={settings.measurementSystem}
        onChange={(value) => setValue("measurementSystem", value)}
        type={MeasurementSystems}
      />

      <Category>Miscellaneous</Category>
      <BooleanOption
        name="useMM"
        value={settings.useMM}
        onChange={(value) => setValue("useMM", value)}
      />
      <BooleanOption
        name="useComma"
        value={settings.useComma}
        onChange={(value) => setValue("useComma", value)}
      />
      <BooleanOption
        name="useRounding"
        value={settings.useRounding}
        onChange={(value) => setValue("useRounding", value)}
      />
      <BooleanOption
        name="useMO"
        value={settings.useMO}
        onChange={(value) => setValue("useMO", value)}
      />
      <BooleanOption
        name="useGiga"
        value={settings.useGiga}
        onChange={(value) => setValue("useGiga", value)}
      />
      <BooleanOption
        name="useSpaces"
        value={settings.useSpaces}
        onChange={(value) => setValue("useSpaces", value)}
      />
      <BooleanOption
        name="useKelvin"
        value={settings.useKelvin}
        onChange={(value) => setValue("useKelvin", value)}
      />
      <BooleanOption
        name="useBold"
        value={settings.useBold}
        onChange={(value) => setValue("useBold", value)}
      />
      <BooleanOption
        name="useBrackets"
        value={settings.useBrackets}
        onChange={(value) => setValue("useBrackets", value)}
      />
      <BooleanOption
        name="exclusiveMode"
        value={settings.exclusiveMode}
        onChange={(value) => setValue("exclusiveMode", value)}
      />
      <BooleanOption
        name="convertBracketed"
        value={settings.convertBracketed}
        onChange={(value) => setValue("convertBracketed", value)}
      />
      <BooleanOption
        name="matchIn"
        value={settings.matchIn}
        onChange={(value) => setValue("matchIn", value)}
      />
      <BooleanOption
        name="includeQuotes"
        value={settings.includeQuotes}
        onChange={(value) => setValue("includeQuotes", value)}
      />
      <BooleanOption
        name="includeImproperSymbols"
        value={settings.includeImproperSymbols}
        onChange={(value) => setValue("includeImproperSymbols", value)}
      />
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
