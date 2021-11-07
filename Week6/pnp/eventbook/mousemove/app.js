var box = document.getElementsByClassName("red-box");

box[0].addEventListener("mousemove", function(e){
    var box = document.getElementsByClassName("red-box");

    var posx = e.clientX;
    var posy = e.clientY;

    box[0].innerHTML = "posX = " +posx+ " " + "poxY = " + posy;
})
