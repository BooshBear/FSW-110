function appendinBody(varz) {
    document.body.appendChild(varz);
}
function centering(varz) {
    varz.style.textAlign = "center";
    varz.style.fontSize = "30";
}

var navbar = document.createElement("nav");
centering(navbar);
appendinBody(navbar);

var link = document.createElement("a");
var link2 = document.createElement("a");
var link3 = document.createElement("a");
link.textContent = "Home |";
link2.textContent = " Merc |";
link3.textContent = " About Us";
navbar.appendChild(link);
navbar.appendChild(link2);
navbar.appendChild(link3);

var header = document.createElement("h1");
header.textContent = "Welcome to our webpage";
centering(header);
appendinBody(header);

var paragraph = document.createElement("p");
paragraph.textContent = "This page is our homepage";
centering(paragraph);
appendinBody(paragraph);

var myList = document.createElement("ol");
centering(myList);
appendinBody(myList);

var list = document.createElement("li");
var list2 = document.createElement("li");
var list3 = document.createElement("li");
list.textContent = "Time";
list2.textContent = "Is";
list3.textContent = "Limited";
myList.appendChild(list);
myList.appendChild(list2);
myList.appendChild(list3);

var foot = document.createElement("footer");
foot.style.textAlign = "right"
appendinBody(foot);

var paragraph2 = document.createElement("p");
paragraph2.textContent = "Author: Dylan Mailloux";
foot.appendChild(paragraph2);