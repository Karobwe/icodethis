const themeToggler = document.querySelector("#theme-toggler");
const menuToggler = document.querySelector("#toggle-responsive-nav");
const responsiveMenu = document.querySelector("nav");

themeToggler.addEventListener("click", function() {
    document.documentElement.classList.toggle("dark");
});

menuToggler.addEventListener("click", function() {
    let opened = responsiveMenu.getAttribute("data-open");

    toggleState(responsiveMenu);
});


const toggleState = (element) => {
    let state = element.getAttribute("data-open");

    if (state === "true") {
        element.setAttribute('data-open', 'false');
    } else {
        element.setAttribute('data-open', 'true');
    }
};