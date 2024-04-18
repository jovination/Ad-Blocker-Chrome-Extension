JavaScript
const defaultFilters = [
  "*://*.doubleclick.net/*",
  "*://*.partner.googleadservices.com/*",
  "*://*.googlesyndication.com/*",
  "*://*.ytimg.com/*",
  "*://*.youtube-nocookie.com/*",
  "*://*google-analytics.com/*",
  "*://*.googletagmanager.com/*",
  "*://*.googletagservices.com/*",
  "*://*.adbrite.com/*",
  "*://*.exponential.com/*",
  "*://*.quantserve.com/*",
];

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return { cancel: true };
  },
  { urls: defaultFilters },
  ["blocking"]
);