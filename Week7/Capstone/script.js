var submit = document.getElementById("submit");

submit.addEventListener("click", function(e){
    e.preventDefault();

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    
    var deleteMe = document.createElement("button");
    deleteMe.innerHTML = "Delete ->";

    var li = document.createElement("li");
    var text = document.createTextNode(" Name: " + fname +" "+ lname);
    li.appendChild(deleteMe);
    li.appendChild(text);
    
    var deleteMe2 = document.createElement("button");
    deleteMe2.innerHTML = "Delete ->";

    document.querySelector("ul").appendChild(li);

    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";

deleteMe.addEventListener("click", function(){
    this.closest("li").remove();
})

})


