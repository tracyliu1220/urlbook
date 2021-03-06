function clickbar_chap (target) {
  //clear previous active
  if(active_chap != -1){
    var pre_chap = document.getElementById('chap_'+active_chap)
    pre_chap.className = "bold"
    if(current_book.chaps[active_chap].subchaps.length > 0){
      var pre_chap_body = document.getElementById('chap_state_'+active_chap)
      pre_chap_body.className = "collapsible-body"
    }
  }
  //new active
  if(target != active_chap){
    var chap = document.getElementById('chap_'+target)
    chap.className = "bold active"
    active_chap = target
    if(current_book.chaps[target].subchaps.length > 0){
      var chap_body = document.getElementById('chap_state_'+target)
      chap_body.className = "active"
    }
  }else{
    active_chap = -1
  }
}


function clickbar_subchap (target_chap, target_subchap) {
  if(active_subchap_chap != -1){
    var pre_subchap = document.getElementById('chap_'+active_subchap_chap+'_subchap_'+active_subchap_subchap)
    pre_subchap.className = ""
  }
  var subchap = document.getElementById('chap_'+target_chap+'_subchap_'+target_subchap)
  subchap.className = "active"
  active_subchap_chap = target_chap
  active_subchap_subchap = target_subchap
  var iframe = document.getElementById('iframe')
  iframe.src = current_book.chaps[target_chap].subchaps[target_subchap].link
}

function back(){
  var window = remote.getCurrentWindow();
  window.close();
}

function screen() {
  var window = remote.getCurrentWindow();
  if(window.isMaximized())
    window.unmaximize();
  else
    window.maximize();
}
