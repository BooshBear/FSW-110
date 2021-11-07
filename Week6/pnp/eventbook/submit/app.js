// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function

let result = document.querySelector("button");


result.addEventListener("click", function(e){
    e.preventDefault()

    let namez = document.getElementById("name").value;
    let agez = document.getElementById("age").value;
    let headz = document.createElement("h1");
    let textz = document.createTextNode("Name: " + namez + " Age: " + agez);
    headz.appendChild(textz);
    document.body.appendChild(headz);
})