 chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return { cancel: true };
    },
    {
        urls: [defaultFilters],
     },
    
    ["blocking"]
 )    

 defaultFilters = [
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

 ]