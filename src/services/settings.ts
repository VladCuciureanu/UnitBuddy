import { fold, isRight } from "fp-ts/lib/Either"
import { pipe } from "fp-ts/lib/function"
import _ from "lodash"

import { ExtensionStorage } from "~helpers/web-extension"
import { ExtensionSettings, UnitBuddySettings } from "~types/settings-types"

const defaultSettings = pipe(
  UnitBuddySettings.decode({}),
  fold(() => "", _.identity)
)

export async function getValidatedSettings(): Promise<ExtensionSettings> {
  const currentSettings = await ExtensionStorage.get<
    Partial<ExtensionSettings>
  >("settings")
  const settingsWithDefault = UnitBuddySettings.decode(currentSettings)

  if (!isRight(settingsWithDefault)) {
    // @ts-ignore
    return defaultSettings
  }

  return settingsWithDefault.right
}

export async function setupSettingsInBackground() {
  const settings = await getValidatedSettings()
  console.log({ settings })
  await ExtensionStorage.set("settings", settings)
}
