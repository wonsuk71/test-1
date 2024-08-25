function onButtonClick() {
  const p = document.querySelector("p");
  p.style.color = "green";
}

const button = document.querySelector("button");

button.addEventListener("click", onButtonClick);

const newButton = document.createElement("button");

newButton.textContent = "Click!";

document.body.appendChild(newButton);

newButton.addEventListener("click", () => {
  alert("New button clicked!");
});
