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
sq.addEventListener("mouseup", function() {
    sq.style.backgroundColor = "blue";
})
document.addEventListener("scroll", function() {
    sq.style.backgroundColor = "purple";
})

document.addEventListener("keydown", function() {
    sq.style.backgroundColor = "red";
})
