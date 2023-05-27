document.addEventListener("click", (event) => {
  // fires every time user clicks
  chrome.runtime.sendMessage({
    // sends one time json from scipt to extension
      click: true,
      xPosition: event.clientX + document.body.scrollLeft,
      yPosition: event.clientY + document.body.scrollTop
      
    },
    response => {
      console.log("Received response", response);
    }
  );
});
