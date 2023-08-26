const movePlayer = (player) => {
  const currentCell = document.querySelector(`#player${player}-race td.active`);

  const removeClass = currentCell.classList.remove("active");
  const nextSibling = currentCell.nextElementSibling;
  if (nextSibling) {
    nextSibling.classList.add("active");
  } else {
    alert(`player ${player} won the game`);
    window.location.reload();
  }
}

const moveWagons = (event) => {
  if (event.key === "P") {
    movePlayer(1);
  }  else if (event.key === "Q") {
    movePlayer(2);
  }
}

window.addEventListener("keyup", moveWagons);