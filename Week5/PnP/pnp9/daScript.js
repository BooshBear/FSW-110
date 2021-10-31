let button = document.getElementById("btn");
button.addEventListener("click", function(){
    var a = document.forms["myForm"]["fname"].value;
    var b = document.forms["myForm"]["lname"].value;
    var c = document.forms["myForm"]["age"].value;
    var d = document.forms["myForm"]["yes_no"].value;
    var e = document.getElementById("recommend").value;
    var f = document.forms["myForm"]["dietR"].value;

    alert("First Name: " +a+
    "\nSecond Name: " +b+ 
    "\nAge: " +c+
    "\nHave you shopped with us before? " +d+
    "\nHow likely would you recommend this to a friend? " +e+ 
    "\nDo you have any dietary restrictions? " + f)
})