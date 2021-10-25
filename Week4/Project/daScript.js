let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let num4 = document.getElementById("num4");
let num5 = document.getElementById("num5");
let num6 = document.getElementById("num6");
let num7 = document.getElementById("num7");
let num8 = document.getElementById("num8");

let sum = document.getElementById("sum");
let sub = document.getElementById("sub");
let mul = document.getElementById("mul");
let div = document.getElementById("div");

let button1 = document.getElementById("sumbutton");
let button2 = document.getElementById("subbutton");
let button3 = document.getElementById("mulbutton");
let button4 = document.getElementById("divbutton");

button1.addEventListener("click", function() {
    result = Number(num1.value) + Number(num2.value);
    sum.innerText = result;
})
button2.addEventListener("click", function() {
    result = Number(num3.value) - Number(num4.value);
    sub.innerText = result;
})
button3.addEventListener("click", function() {
    result = Number(num5.value) * Number(num6.value);
    mul.innerText = result;
})
button4.addEventListener("click", function() {
    result = Number(num7.value) / Number(num8.value);
    div.innerText = result;
})
