let input = document.getElementById("input1");
let addButton = document.getElementById("addbtn");
let content = document.getElementById("addblock");

addButton.addEventListener("click", function () {
  let x = document.createElement("p");
  x.classList.add("content_deco");
  x.innerHTML = input.value;
  content.appendChild(x);
  input.value = "";
  x.addEventListener("click", function () {
    x.style.textDecoration = "line-through";
  });
  x.addEventListener("dblclick", function () {
    content.removeChild(x);
  });
});
