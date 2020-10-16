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
// timer
function timer(){
        var time= new Date();//获取当前日期和对象
                var y=time.getFullYear();//获取年份
                 var M=time.getMonth()+1;//获取月份
                if(M<10){
                   M="0"+M;
                 }
                 var d=time.getDate();//获取日期
                 if(d<10){
                     d="0"+d;
                 }
                 var h=time.getHours();//获取小时
                 if(h<10){
                     h="0"+h;
                 }
                 var m=time.getMinutes();//获取分钟
                 if(m<10){
                    m="0"+m;
                 }
                 var s=time.getSeconds();//获取秒数
                 if(s<10){
                     s="0"+s;
                 }
                 var day=time.getDay();//获取星期几
                 switch(day){
                     case 0:
                       day="天";
                       break;
                       case 1:
                       day="一";
                       break;
                       case 2:
                       day="二";
                       break;
                        case 3:
                       day="三";
                       break; 
                       case 4:
                       day="四";
                       break;
                        case 5:
                       day="五";
                       break; 
                       case 6:
                       day="六";
                       break;
                    }
                    var str=y+"年"+M+"月"+d+"日"+" "+h+"时"+m+"分"+s+"秒"+" "+"星期"+day;
                     document.write(str);
	 }
// use <p onclick="timer()">Get time</p> to load
