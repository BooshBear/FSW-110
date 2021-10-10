function appendinBody(varz){
    document.body.appendChild(varz);
}

var header = document.createElement("h1");
header.textContent = "Welcome to my JS site";
appendinBody(header);

var paragraph = document.createElement("p");
paragraph.textContent = "All of this was created with Javascript";
appendinBody(paragraph);

var myList = document.createElement("ol");
appendinBody(myList);

var list = document.createElement("li");
list.textContent = "pie";
var list2 = document.createElement("li");
list2.textContent = "is";
var list3 = document.createElement("li");
list3.textContent = "great";
myList.appendChild(list);
myList.appendChild(list2);
myList.appendChild(list3);