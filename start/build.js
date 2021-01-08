/* 
build.js: copyright (c) crq(shbwb)(crq.js.org,bwb.js.org)2020
*/
// snackbar
function snackbar() {
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
// enter
var input = document.getElementById("enter");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("enterbutton").click();
    }
});
// timer (if a user enter the code <button onclick="timer(time=3000,text='hello')">Front button</button> the box will show after 3 seconds.
function timer() {
    setTimeout(function(){ alert(text); }, time);
}
/* ----------------------------------------------------------------*/
/* browser */
/* ----------------------------------------------------------------*/

// history
function goback(){
	window.history.back()
}
function goforward(){
	window.history.forward()
}
// reload
function reload(){
  location.reload()
}
/*
      0-------------------------------------------0
     /                                           /|
    /                                           / |
   /                                           /  |
  /                                           /   |
 /                                           /    |
0-------------------------------------------0     |
|                                           |     |
|                                           |     |
|        |-----|    -----     |-----|       |     |
|        |     |      |       |     |       |     |
|        |-----|      |       |-----|       |     |
|        | \          |       |             |     |
|        |   \    .   |    .  |             |     |
|        |     \    -----     |             |     |
|                                           |     |
|                                           |     |
|            -----       |-----             |     |
|              |         |____              |     |
|              |              |             |     |
|              |              |             |     |
|          |___|         _____|             |     0
|                                           |    /
|                                           |   /
|                                           |  /    
|                                           | /     
|                                           |/
0-------------------------------------------0
*/
