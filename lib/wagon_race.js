
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
    // console.log(nextChild)
  }
  if (nextChild === lastChild) {
    const removeCell = nextChild.classList.remove("active");
    const secondChild = firstChild.nextElementSibling;
    if (secondChild) {
      secondChild.classList.add("active");
    }  
    alert("Red wagon won the game. Start again");
  }
  }
});
