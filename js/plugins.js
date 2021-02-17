function snackbar() {
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
/* function timer() {
	setTimeout(function() {alert(text)},time)
}
// Please use the plugin "BWB Timer".
*/
