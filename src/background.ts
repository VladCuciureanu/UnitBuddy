import { setupSettingsInBackground } from "~services/settings"

chrome.runtime.onInstalled.addListener(async () => {
  await setupSettingsInBackground()
})
