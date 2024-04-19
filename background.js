chrome.runtime.onInstalled.addListener(async () => {
   try {
     const response = await fetch(chrome.runtime.getURL('ad_block_rules.json'));
 
     if (!response.ok) {
       throw new Error('Failed to fetch ad blocking rules');
     }
 
     const rules = await response.json();
 
     // Add a delay before calling updateRuleset
     setTimeout(async () => {
       await chrome.declarativeNetRequest.updateRuleset({
         priority: 1,
         ruleSets: [{
           id: "ad_blocker_rules",
           rules: rules
         }]
       });
 
       console.log("Ad blocking rules loaded successfully.");
     }, 1000);  // Adjust the delay as needed
   } catch (error) {
     console.error("Failed to load ad blocking rules:", error);
   }
 });
 