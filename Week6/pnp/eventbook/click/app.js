// make the box disapear when the user clicks it
var box = document.getElementsByClassName("red-box");

box[0].addEventListener("click", function(){
    var box = document.getElementsByClassName("red-box");
    box[0].style.opacity = 0;
})