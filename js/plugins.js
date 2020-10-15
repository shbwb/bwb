function snackbar() {
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
function opennav() {
    document.getElementById("mySidenav").style.width = "250px";
}
function closenav() {
    document.getElementById("mySidenav").style.width = "0";
}
