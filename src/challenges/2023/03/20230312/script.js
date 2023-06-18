let listItems = document.querySelectorAll("li");
let progress = document.querySelector("#progress");
let output = document.querySelector("#progress + p");

listItems.forEach((item) => { 
    let input = item.querySelector("input");
    let label = item.querySelector("label");

    input.addEventListener("change", () => {
        toggleState(label);
        updateProgress();
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

const getCheckedItemsCount = () => {
    let checkboxes = document.querySelectorAll("input[type=checkbox]");
    let total = 0;

    checkboxes.forEach(checkbox => {
        if(checkbox.checked) total++;
    });

    return total;
}

const updateProgress = () => {
    let items = progress.querySelectorAll("span");

    for (let i = 0; i < getCheckedItemsCount(); i++) {
        const element = items[i];
        
        element.setAttribute("data-checked", true);
    }

    output.innerHTML = `${items.length - getCheckedItemsCount()} remaining to complete`;
}