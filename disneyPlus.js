function skip() {
  // intro button 
  const introButton = document.querySelector("#hudson-wrapper > div > div > div > disney-web-player-ui > div > div.overlay.overlay__skip > button")

  const nextEpisode = document.querySelector("#section_index > section > div > section > div.ai71jt2.xgfbc13z7.xgfbc142j > button._5gjogg1.nwsbsc3.nwsbsc1.xgfbc1cn.xgfbc1cz.xgfbc1d7.xgfbc120.xgfbc1cj.xgfbc1d6.xgfbc1cf.xgfbc1r7.xgfbc11cz.xgfbc11mj.xgfbc13zf.xgfbc1ca.xgfbc142j.xgfbc1ab.xgfbc143n.xgfbc18q")

  /*
  const recapButton = 
  */

  if (introButton) {
    introButton.click();
  }
  if (nextEpisode) {
    nextEpisode.click();
  }
  /*
  if (recapButton) {
    recapButton.click();
  }
  */
}
  
setInterval(function() {
  skip();  
}, 1000); 