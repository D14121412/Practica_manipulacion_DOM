let paragraph = document.querySelector("p");
let button = document.getElementById("toggler");

button.addEventListener("click", updateName);

function updateName() {
  paragraph.classList.toggle("text-orange");
}
