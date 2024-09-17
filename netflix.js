function skip() {
  // recap button
  const recapButton =  document.querySelector("#appMountPoint > div > div > div:nth-child(1) > div > div > div.passive.default-ltr-cache-fntwn3 > div.default-ltr-cache-1m81c36 > div.watch-video--skip-content.default-ltr-cache-gpipej > button")

  // skip button 
  const introButton = document.querySelector("#appMountPoint > div > div > div:nth-child(1) > div > div > div.active.default-ltr-cache-fntwn3 > div.default-ltr-cache-1m81c36 > div.watch-video--skip-content.default-ltr-cache-gpipej > button")

  // next episode
  const nextEpisode = document.querySelector("#appMountPoint > div > div > div:nth-child(1) > div > div > div.active.default-ltr-cache-fntwn3 > div.nfa-pos-abs.nfa-top-0.nfa-left-0.nfa-right-0.nfa-bot-0.nfa-d-flex.nfa-ai-flex-end.nfa-jc-flex-end.SeamlessControls--container.SeamlessControls--container-visible > div.nfa-pos-abs.nfa-bot-6-em.nfa-right-5-em.nfa-d-flex > button.color-primary.hasLabel.hasIcon.default-ltr-cache-18ezbm2")

  if (recapButton) {
    recapButton.click();
  } 
  if (introButton) {
    introButton.click();
  }
  if (nextEpisode) {
    nextEpisode.click();
  }
}

setInterval(function() {
  skip();  
}, 1000);  

