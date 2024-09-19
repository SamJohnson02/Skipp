document.getElementById('skipIntro').addEventListener('change', updateSettings);

function updateSettings() {
  const skipIntro = document.getElementById('skipIntro').checked;

  chrome.storage.sync.set({ skipIntro });

  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
      skipIntro,
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.sync.get(['skipIntro'], (data) => {
    document.getElementById('skipIntro').checked = data.skipIntro || false;
  });
});
