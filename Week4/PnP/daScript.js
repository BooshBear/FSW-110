let sq = document.querySelector("#square");

window.addEventListener("load", function() {
    sq.style.backgroundColor = "black";
})
sq.addEventListener("mouseover", function() {
    sq.style.backgroundColor = "green";
})
sq.addEventListener("mousedown", function() {
    sq.style.backgroundColor = "yellow";
})
sq.addEventListener("dblclick", function(){
    sq.style.backgroundColor = "red";
})
sq.addEventListener("mouseup", function() {
    sq.style.backgroundColor = "blue";
})
document.addEventListener("scroll", function() {
    sq.style.backgroundColor = "purple";
})

document.addEventListener("keydown", keypressed, false)

function keypressed(key) {
    switch (key.key) {
        case "r":
            sq.style.backgroundColor = "red";
            break;
        case "y":
            sq.style.backgroundColor = "yellow";
            break;
        case "b":
            sq.style.backgroundColor = "blue";
            break;
        case "g":
            sq.style.backgroundColor = "green";
            break;
        case "p":
            sq.style.backgroundColor = "purple";
            break;
        default:
            break;
    }
}

