document.getElementById("container");
document.querySelector("#container");
document.querySelectorAll(".second");
document.querySelector("ol .third");
var container = document.getElementById("container");
container.innerText = "Hello";

var footer = document.querySelector(".footer");
footer.classList.add("main");

footer.classList.remove("main");

var newLi = document.createElement("li");
newLi.innerText = "four";

var list = document.querySelector("ul");
list.appendChild(newLi);

var newList = document.querySelectorAll("ol li");
for(var i =0; i<newList.length; i++){
  newList[i].style.backgroundColor = "green";
}

var footer = document.querySelector(".footer");
footer.remove();
