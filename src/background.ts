import { setupSettingsInBackground } from "~/shared/services/settings"

chrome.runtime.onInstalled.addListener(async () => {
  await setupSettingsInBackground()
})
