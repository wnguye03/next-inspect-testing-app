let youClickedOn; 
chrome.devtools.panels.create("NextInspect Network", "icon.png", "panel.html", panel => {
    // code invoked on panel creation
    // onshown.addListener is fired when the user switches to the panel
    panel.onShown.addListener( (extPanelWindow) => {
      // extPanelWindow points to panel.html
        

        let sayHello = extPanelWindow.document.querySelector('#sayHello');
        youClickedOn = extPanelWindow.document.querySelector('#youClickedOn');
        sayHello.addEventListener("click", () => {
            // show a greeting alert in the inspected page
            // inspectedWindow API allows interaction with inspected window


            
            chrome.devtools.inspectedWindow.eval('alert("Hello from the DevTools Extension");');


        });             
    });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // Messages from content scripts should have sender.tab set
    // onMessage event is fired when postMessage is called by other end of the port
    // look into onMessageExternal for our Nextjs express server
    if (sender.tab && request.click == true) {
        let logHarLog;
        chrome.devtools.network.getHAR(function (harLog) {
          // Handle the HAR log
          logHarLog = harLog
        });
        if (youClickedOn) {
            youClickedOn.innerHTML = `You clicked on position (${request.xPosition}, ${request.yPosition}) in the inspected page.`;
        }
        sendResponse({
            xPosition: request.xPosition,
            yPosition: request.yPosition,
            logHarLog: 1
        });
    }
});



// Create a connection to the background service worker
const backgroundPageConnection = chrome.runtime.connect({
    name: "devtools-page"
});

// Relay the tab ID to the background service worker
backgroundPageConnection.postMessage({
    name: 'init',
    tabId: chrome.devtools.inspectedWindow.tabId
});
