
window.addEventListener("keyup", (event) => {
 if (event.key === "P") {
  const activeChild = document.querySelector("#player1-race td.active");
  const parent = document.querySelector("#player1-race");
  const firstChild = parent.firstElementChild
  const lastChild = parent.lastElementChild
  
  const removeClass = activeChild.classList.remove("active");
  const nextChild = activeChild.nextElementSibling;
  if (nextChild) {
    nextChild.classList.add("active");
  }
  if (nextChild === lastChild) {
    console.log(nextChild)
    alert("Red wagon won the game. Start again");
  }
 }
});
