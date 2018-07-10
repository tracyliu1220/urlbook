

for (i = 0; i < current_book.chaps.length; i ++) {
  if(i == 0)
    document.write('<li class="bold active"><a class="waves-effect waves-teal">'+current_book.chaps[i].title+'</a>')
  else
    document.write('<li class="bold"><a class="waves-effect waves-teal">'+current_book.chaps[i].title+'</a>')
  if(current_book.chaps[i].subchaps.length > 0) {
    if(i == 0)
      document.write('<div class="active"><ul>')
    else
      document.write('<div class="collapsible-body"><ul>')
  }
  for (j = 0; j < current_book.chaps[i].subchaps.length; j ++) {
    if(i == 0 && j == 0)
      document.write('<li class="active"><a>'+current_book.chaps[i].subchaps[j].title+'</a></li>')
    else
      document.write('<li><a>'+current_book.chaps[i].subchaps[j].title+'</a></li>')
  }
  if(current_book.chaps[i].subchaps.length > 0)
      document.write('</ul></div>')
  document.write('</li>')
}
