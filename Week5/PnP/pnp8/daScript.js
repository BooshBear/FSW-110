let form = document.forms["myForm"]["fin"].value;
let button = document.getElementById("btn");
button.addEventListener("click", function(){
    var a = document.getElementById("1").value;
    var b = document.getElementById("2").value;
    var c = document.getElementById("3").value;
    alert(a +" "+b+" "+ c);
})
