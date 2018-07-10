

for (i = 0; i < current_book.chaps.length; i ++) {
  if(i == active_chap)
    document.write('<li class="bold active"><a id="chap_'+i+'" class="waves-effect waves-grey">'+current_book.chaps[i].title+'</a>')
  else
    document.write('<li class="bold"><a id="chap_'+i+'" class="waves-effect waves-grey">'+current_book.chaps[i].title+'</a>')
  if(current_book.chaps[i].subchaps.length > 0) {
    if(i == active_chap)
      document.write('<div id="chap_state_'+i+'" class="active"><ul>')
    else
      document.write('<div id="chap_state_'+i+'" class="collapsible-body"><ul>')
  }
  for (j = 0; j < current_book.chaps[i].subchaps.length; j ++) {
    if(i == active_chap && j == active_subchap)
      document.write('<li id="subchap_'+i+'" class="active"><a>'+current_book.chaps[i].subchaps[j].title+'</a></li>')
    else
      document.write('<li id="subchap_'+i+'"><a>'+current_book.chaps[i].subchaps[j].title+'</a></li>')
  }
  if(current_book.chaps[i].subchaps.length > 0)
      document.write('</ul></div>')
  document.write('</li>')
}
