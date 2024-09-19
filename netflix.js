let intervalId = null;

function skip(options) {

  if (options.skipIntro) {
    const introButton = document.querySelector("#appMountPoint > div > div > div:nth-child(1) > div > div > div.active.default-ltr-cache-fntwn3 > div.default-ltr-cache-1m81c36 > div.watch-video--skip-content.default-ltr-cache-gpipej > button");
    if (introButton) {
      introButton.click();
    }
  }
}

chrome.runtime.onMessage.addListener((message) => {
  if (intervalId) {
    clearInterval(intervalId);
  }

  if (message.skipIntro) {
    intervalId = setInterval(() => {
      skip(message);
    }, 1000);  // Check every second
  }
});