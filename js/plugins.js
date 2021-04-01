/*!
 * BWB (http://bwb.js.org)
 * Copyright (c) 2021 bwb.js.org
 * Licensed under MIT (https://github.com/shbwb/bwb/blob/main/LICENSE)
 */
/*! plugins.js | MIT License */
function snackbar() {
  var x = document.getElementById("snackbar")
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
function scrollToTop() { 
  window.scrollTo(0, 0); 
} 
/* function timer() {
	setTimeout(function() {alert(text)},time)
}
// Please use the plugin "BWB Timer".
*/
