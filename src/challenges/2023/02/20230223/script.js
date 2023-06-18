const popup = document.querySelector("#popup");
const button = document.querySelector("#open-popup");

button.addEventListener("click", () => {
    popup.dataset.open = popup.dataset.open == "true" ? "false" : "true";
});