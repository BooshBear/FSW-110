/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */

var output = document.getElementById("output");

document.body.addEventListener("keydown", function(e){
    output.innerHTML = "You pressed " +e.code+ ". It's Key code is " +e.which;
})
