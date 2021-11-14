var submit = document.getElementById("submit");

submit.addEventListener("click", function(e){
    e.preventDefault();

    var name = document.getElementById("name").value;
    var color = document.getElementById("color").value;
    
    var deleteMe = document.createElement("button");
    deleteMe.innerHTML = "Delete ->";

    var li = document.createElement("li");
    var text = document.createTextNode(" Name: " + name);
    li.appendChild(deleteMe);
    li.appendChild(text);
    
    var deleteMe2 = document.createElement("button");
    deleteMe2.innerHTML = "Delete ->";

    var li2 = document.createElement("li");
    var text2 = document.createTextNode(" Color in code: " + color);
    li2.appendChild(deleteMe2);
    li2.appendChild(text2);

    document.querySelector("ul").appendChild(li);
    document.querySelector("ul").appendChild(li2);

    document.getElementById("name").value = "";
    document.getElementById("color").value = "";

deleteMe.addEventListener("click", function(){
    this.closest("li").remove();
})
deleteMe2.addEventListener("click", function(){
    this.closest("li").remove();
})

})


