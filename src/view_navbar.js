

//class="waves-effect waves-grey"
for (i = 0; i < current_book.chaps.length; i ++) {
  document.write('<li id="chap_'+i+'" class="bold"><a class="waves-effect waves-grey" onclick="return clickbar_chap('+i+')">'+current_book.chaps[i].title+'</a>')
  if(current_book.chaps[i].subchaps.length > 0)
      document.write('<div id="chap_state_'+i+'" class="collapsible-body"><ul>')
  for (j = 0; j < current_book.chaps[i].subchaps.length; j ++)
      document.write('<li id="chap_'+i+'_subchap_'+j+'" class=""><a onclick="return clickbar_subchap('+i+','+j+')">'+current_book.chaps[i].subchaps[j].title+'</a></li>')
  if(current_book.chaps[i].subchaps.length > 0)
      document.write('</ul></div>')
  document.write('</li>')
}
