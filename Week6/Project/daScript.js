let sum = document.getElementById("result");

sum.addEventListener("click", function(e){
    e.preventDefault();
    let bagel = document.getElementById("bagel").value;
    let bagelCost = bagel*3;
    let tea = document.getElementById("tea").value;
    let teaCost = tea*7;
    let coffee = document.getElementById("coffee").value;
    let coffeeCost = coffee*11;
    let total = bagelCost + teaCost + coffeeCost;

    let h2 = document.createElement("h2");
    let text = document.createTextNode("The cost will be $" + total + ".00 please.");
    h2.appendChild(text);
    document.body.appendChild(h2);
})