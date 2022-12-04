import { fold, isRight } from "fp-ts/lib/Either"
import { pipe } from "fp-ts/lib/function"
import _ from "lodash"
import { ExtensionStorage } from "~/shared/helpers/web-extension"
import { ExtensionSettings, UnitBuddySettings } from "~/shared/types/settings"

export async function getValidatedSettings(): Promise<ExtensionSettings> {
  const currentSettings = await ExtensionStorage.get<
    Partial<ExtensionSettings>
  >("settings")
  const settingsWithDefault = UnitBuddySettings.decode(currentSettings)

  if (!isRight(settingsWithDefault)) {
    const defaultSettings = pipe(
      UnitBuddySettings.decode({}),
      fold(() => "", _.identity)
    )
    // @ts-ignore
    return defaultSettings
  }
  return settingsWithDefault.right
}

export async function setupSettingsInBackground() {
  const settings = await getValidatedSettings()
  await ExtensionStorage.set("settings", settings)
}
