/**
 * Created by richwilliams on 1/16/17.
 */
// background.js:


// test script
alert("here");
console.log("Hello, world!");


// change icon to green light
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        // read `newIconPath` from request and read `tab.id` from sender
        chrome.browserAction.setIcon({
            path: request.newIconPath,
            tabId: sender.tab.id
        });
    });