/** @format */

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.contentScriptQuery == "savePage") {
    // Implement page saving logic here
    console.log("Saving page", request.url);
  }
});
