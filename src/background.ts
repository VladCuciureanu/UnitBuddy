import { setupSettingsInBackground } from "~services/settings"

export {}

chrome.runtime.onInstalled.addListener(async () => {
  await setupSettingsInBackground()
})
