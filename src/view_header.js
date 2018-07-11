const electron = require('electron')

var fs = require('fs')
var user_data = fs.readFileSync('data/user.json', 'utf-8')

var current_book_id = JSON.parse(fs.readFileSync('data/current.json', 'utf-8')).book_index
var current_book = JSON.parse(user_data).user.books[current_book_id]

var color = current_book.color
var title = current_book.title

var active_chap = -1
var active_subchap_chap = -1
var active_subchap_subchap = -1
