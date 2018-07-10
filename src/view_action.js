const electron = require('electron')
const path = require('path')
const remote = electron.remote

var iframe = document.getElementById('iframe')


function clickbar_chap () {
  // var bar_element = document.getElementById('chap'+target)
  // var target = 1
  // loading_url = current_book.chaps[target].link
  // iframe.src = iframe.src
  var window = remote.getCurrentWindow();
  window.close();
}



// function clickbar_chap () {
//   var window = remote.getCurrentWindow();
//   window.close();
// }
