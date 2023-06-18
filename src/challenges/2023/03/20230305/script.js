// const themeToggler = document.querySelector("#theme-toggler");
const menuToggler = document.querySelector("#toggle-responsive-nav");
const responsiveMenu = document.querySelector("nav");
let subMenuTogglers = document.querySelectorAll("nav button");

// themeToggler.addEventListener("click", function () {
//     document.documentElement.classList.toggle("dark");
// });

menuToggler.addEventListener("click", function () {
    let opened = responsiveMenu.getAttribute("data-open");

    toggleState(responsiveMenu);
});

subMenuTogglers.forEach(button =>{
    button.addEventListener("click", () => {
        let submenu = document.querySelector("nav + div[data-open]");
        toggleState(submenu);
    });
});


const toggleState = (element) => {
    let state = element.getAttribute("data-open");

    if (state === "true") {
        element.setAttribute('data-open', 'false');
    } else {
        element.setAttribute('data-open', 'true');
    }
};