/* 
plugins.js: copyright (c) crq(crqblog)(crq.js.org)2020
The script was written by runoob.com and crqblog
If you want to copy the code,please tell us.
Welcome to use
*/
function snackbar() {
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
function opennav() {
    document.getElementById("sidenav").style.width = "250px";
}
function closenav() {
    document.getElementById("sidenav").style.width = "0";
}
