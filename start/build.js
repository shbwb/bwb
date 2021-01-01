function snackbar() {
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
var input = document.getElementById("enter");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("enterbutton").click();
    }
});
function timer() {
    setTimeout(function(){ alert(text); }, time);
}
var vartime=setInterval(function(){clock()},1);
function clock(){
	var d=new Date();
	var t=d.toLocaleTimeString();
	document.getElementById("clock").innerHTML=t;
}
function goback(){
	window.history.back()
}
function goforward(){
	window.history.forward()
}
function reload(){
  location.reload()
}
