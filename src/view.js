const electron = require('electron')
const path = require('path')
const remote = electron.remote

var bar_element
var iframe = document.getElementById("iframe")

bar_element = document.getElementById("chap_1")
bar_element.addEventListener('click', function () {
  loading_url = current_book.chaps[i].link
  iframe.contentWindow.location.reload(true)
  var window = remote.getCurrentWindow();
  window.close();
});
