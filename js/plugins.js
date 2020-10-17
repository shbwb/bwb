/* 
plugins.js: copyright (c) crq(crqblog)(crq.js.org)2020
The script was written by runoob.com and crqblog
If you want to copy the code,please tell us.
Welcome to use
*/
// snackbar
function snackbar() {
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
// sidenav
function opennav() {
    document.getElementById("sidenav").style.width = "250px";
}
function closenav() {
    document.getElementById("sidenav").style.width = "0";
}
// enter
var input = document.getElementById("enter");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("enterbutton").click();
    }
});
// information
function info() {
    var info = document.getElementById("info");
    info.classList.toggle("show");
}
