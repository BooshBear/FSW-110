for (let i = 0; i < 10; i++) {
    var greeting = document.createElement("h1");
    greeting.textContent = "Hello World";
    document.body.appendChild(greeting);
    document.getElementsByTagName("H1")[i].setAttribute("style", "color: red;");
}

const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];

for (let i = 0; i < names.length; i++) {
    var arr = document.createElement("p")
    arr.textContent = names[i];
    document.body.appendChild(arr);
}