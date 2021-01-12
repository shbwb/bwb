function snackbar() {
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
$(document).ready(function(){
  $(".dropdown").click(function(){
    $("#dropdown-content").slideToggle("slow");
  });
});
