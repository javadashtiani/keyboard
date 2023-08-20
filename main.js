
let showType = document.querySelector(".show-type");

document.addEventListener("keyup", (e) => {
  // space
  if (e.keyCode === 32) {
    showType.innerHTML += " ";
  }
  // back space
  if (e.key === "Backspace") {
    showType.innerHTML = showType.innerHTML.slice(0, -1);
    return;
  }
  showType.innerHTML += e.key;

});
