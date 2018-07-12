function onclick_view(book_index) {
  const bookPath = path.join('file://', __dirname, 'view.html')
  var current_data = JSON.parse(fs.readFileSync('data/current.json'))
  current_data.book_index = book_index
  fs.writeFileSync('data/current.json', JSON.stringify(current_data))
  let win = new BrowserWindow({frame: false,
                               width: 1200,
                               height: 600,
                               minHeight: 600,
                               minWidth: 1200})
  win.on('close', function() {win = null})
  win.loadURL(bookPath)
  win.show()
}

function screen() {
  var window = remote.getCurrentWindow();
  var screen_index = document.getElementById('screen')
  if(window.isMaximized()){
    screen_index.innerHTML = "FULLSCREEN"
    window.unmaximize();
  }else{
    screen_index.innerHTML = "UNFULLSCREEN"
    window.maximize();
  }
}

function quit(){
  var window = remote.getCurrentWindow();
  window.close();
}
