

//class="waves-effect waves-grey"
for (i = 0; i < current_book.chaps.length; i ++) {
  if(i == active_chap)
    document.write('<li id="chap_'+i+'" class="bold active"><a class="waves-effect waves-'+color+'" onclick="return clickbar_chap('+i+')">'+current_book.chaps[i].title+'</a>')
  else
    document.write('<li id="chap_'+i+'" class="bold"><a class="waves-effect waves-'+color+'" onclick="return clickbar_chap('+i+')">'+current_book.chaps[i].title+'</a>')
  if(current_book.chaps[i].subchaps.length > 0) {
    if(i == active_chap)
      document.write('<div id="chap_state_'+i+'" class="active"><ul>')
    else
      document.write('<div id="chap_state_'+i+'" class="collapsible-body"><ul>')
  }
  for (j = 0; j < current_book.chaps[i].subchaps.length; j ++) {
    if(i == active_chap && j == active_subchap)
      document.write('<li id="chap_'+i+'_subchap_'+j+'" class="active"><a onclick="return clickbar_subchap('+i+','+j+')">'+current_book.chaps[i].subchaps[j].title+'</a></li>')
    else
      document.write('<li id="chap_'+i+'_subchap_'+j+'" class=""><a onclick="return clickbar_subchap('+i+','+j+')">'+current_book.chaps[i].subchaps[j].title+'</a></li>')
  }
  if(current_book.chaps[i].subchaps.length > 0)
      document.write('</ul></div>')
  document.write('</li>')
}
