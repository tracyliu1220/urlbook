if(user.books.length > 0){
  document.write('<div class="books-flexbox-container">')
  for(i = 0; i < user.books.length; i ++){
    document.write('<div class="book-margin"><div class="card medium hoverable" style="width: 400px">')
    document.write('<div class="card-image"><img src="../assets/images/'+user.books[i].color+'.png"><span class="card-title">'+user.books[i].title+'</span></div>')
    document.write('<div class="card-content" style="color: #B0BEC5"><p>'+user.books[i].description+'</p></div>')
    document.write('<div class="card-action button-container" style="padding-right: 0px;">')
    document.write('<a class="waves-effect waves-grey btn-flat" style="color: #'+user.books[i].color+'">EDIT</a>')
    document.write('<a onclick="return onclick_view('+i+')" class="waves-effect waves-grey btn-flat" style="color: #'+user.books[i].color+'">VIEW</a>')
    document.write('</div></div></div>')
  }
  document.write('<div class="books-flexbox-container">')
}else{
  document.write('<div class="welcome"><p>haven\'t created any book yet.</p></div>')
}
