
function skip() {

  const introButton = document.querySelector("#appMountPoint > div > div > div:nth-child(1) > div > div > div.active.default-ltr-cache-fntwn3 > div.default-ltr-cache-1m81c36 > div.watch-video--skip-content.default-ltr-cache-gpipej > button")

  if (introButton) {
    introButton.click();
  }
}
setInterval(function() {
  skip();  
}, 1000);  

/* div > div.watch-video--skip-content.default-ltr-cache-gpipej > button */