
window.addEventListener("keyup", (event) => {
 if (event.key === "P") {
  const activeChild = document.querySelector("#player1-race td.active");

  const removeClass = activeChild.classList.remove("active");
  const nextChild = activeChild.nextElementSibling;
  if (nextChild) {
    nextChild.classList.add("active");
  } else {
    alert("Red wagon won the game. Start again"); 
    window.location.reload();
  }
 } else if (event.key === "Q") {
    const activeChild = document.querySelector("#player2-race td.active");
    const firstChild = document.querySelector("#player2-race td");
    
    const removeClass = activeChild.classList.remove("active");
    const nextChild = activeChild.nextElementSibling;
    if (nextChild) {
      nextChild.classList.add("active");
    } else {
      alert("Yellow wagon won the game. Start again"); 
      window.location.reload();
    }
  }
});
