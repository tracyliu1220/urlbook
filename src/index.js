const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow

function onclick_view(book_index) {
  const bookPath = path.join('file://', __dirname, 'view.html')
  fs.writeFileSync('data/current.json', '{\n\t"book_index": '+book_index+'\n}')
  let win = new BrowserWindow({width: 1200,
                               height: 600,
                               minHeight: 600,
                               minWidth: 1200})
  win.on('close', function() {win = null})
  win.loadURL(bookPath)
  win.show()
}
