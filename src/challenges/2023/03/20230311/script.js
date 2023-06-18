let listItems = document.querySelectorAll("li");

listItems.forEach((item) => { 
    let input = item.querySelector("input");
    let label = item.querySelector("label");

    input.addEventListener("change", () => {
        toggleState(label);
    });
});

const toggleState = (element) => {
    let state = element.getAttribute("data-checked");

    if (state === "true") {
        element.setAttribute('data-checked', 'false');
    } else {
        element.setAttribute('data-checked', 'true');
    }
};