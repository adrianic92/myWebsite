const h2 = document.createElement("h2");
h2.textContent = "Hello, world. This is my first website.";
document.querySelector("body").appendChild(h2);

document.getElementById("hulk").onmouseover = function() {mouseOver()};
document.getElementById("hulk").onmouseout = function() {mouseOut()};
function mouseOver() {
    document.getElementById("hulk").style.color = "green";
}
function mouseOut() {
    document.getElementById("hulk").style.color = "white";
}