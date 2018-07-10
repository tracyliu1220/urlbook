var fs = require('fs')
var user_data = fs.readFileSync("../data/user.json", "utf-8")
var current_book_id = 0
var current_book = JSON.parse(user_data).user.books[current_book_id]
