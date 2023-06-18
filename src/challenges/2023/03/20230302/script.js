const themeToggler = document.querySelector("#status");

themeToggler.addEventListener("click", function() {
    document.documentElement.classList.toggle("dark");
});

const toggleState = (element) => {
    let state = element?.checked;

    if (state === "true") {
        element.checked = false;
    } else {
        element.checked = true;
    }
};