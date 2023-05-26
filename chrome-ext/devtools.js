chrome.devtools.panels.create("Network Panel",
    "MyPanelIcon.png",
    "panel.html",
    function(panel) {
      // code invoked on panel creation
      console.log("created panel")
    }
);