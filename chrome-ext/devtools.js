let displayData; 
let count = 0;
chrome.devtools.panels.create("NextInspect Network", "icon.png", "panel.html", panel => {
    // code invoked on panel creation
    // onshown.addListener is fired when the user switches to the panel
    
    panel.onShown.addListener( (extPanelWindow) => {
      // extPanelWindow points to panel.html
        

        let sayHello = extPanelWindow.document.querySelector('#sayHello');
        youClickedOn = extPanelWindow.document.querySelector('#displayData');
        sayHello.addEventListener("click", () => {
            // show a greeting alert in the inspected page
            // inspectedWindow API allows interaction with inspected window


            
            chrome.devtools.inspectedWindow.eval('alert("Hello from the DevTools Extension");');


        }); 
        
        //one of the onRequestsFinished methods below should be commented out, depending on what appraoch you want for your data collection

        // option 1: get entire HAR log
        chrome.devtools.network.onRequestFinished.addListener((
            function(requestData){
                
                // if (requestData) {
                //     if (count === 1 || count === 9) {
                //         chrome.devtools.network.getHAR(
                //             function(harLog){
                //                 if(harLog) {
                //                     console.log(`huzzah: ${count}`);
                //                     let parsedData = JSON.stringify(harLog);
                //                     console.log(harLog)
                                    
                //                     if(harLogEntry){
                //                         harLogEntry.innerHTML += `REQUEST NUMBER ${count}: ${parsedData}`;
                //                     }
                                    
                //                 }
                //             }
                //             )        
                //         }
                //     count += 1;
                // }    
                
                // option 2: get individual HAR entries
                if(requestData){
                    // chrome.runtime.sendMessage({
                    //     // sends one time json from scipt to extension
                    //       done: true,
                    //     },
                    //     response => {
                    //       console.log(response);
                    //     }
                    // );
                    console.log(`huzzah: ${count}`);
                    let parsedData = JSON.stringify(requestData);
                    if (youClickedOn) {
                        console.log(`huzzah: ${count}`);
                        youClickedOn.innerHTML += `REQUEST NUMBER ${count} : ${parsedData}`;
                        count+=1;
                    }
                    // chrome.devtools.inspectedWindow.eval('alert("HUZZAH")')
                }  
            }
        ))
                    
    });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // Messages from content scripts should have sender.tab set
    // onMessage event is fired when postMessage is called by other end of the port
    // look into onMessageExternal for our Nextjs express server
    if (sender.tab && request.click == true) {
        // let logHarLog;
       
        if (youClickedOn) {
            youClickedOn.innerHTML = `You clicked on position (${request.xPosition}, ${request.yPosition}) in the inspected page.`;
        }
        sendResponse({
            xPosition: request.xPosition,
            yPosition: request.yPosition,
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

