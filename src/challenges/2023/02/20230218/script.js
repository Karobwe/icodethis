const monthly = document.querySelector("#monthly");
const yearly = document.querySelector("#yearly");
const period = document.querySelector("div[data-payment]");

monthly.addEventListener("click", (e) => {
    toggleState(yearly);
    toggleState(monthly);

    if(monthly.getAttribute("data-selected") == "true") {
        period.setAttribute("data-payment", "monthly");
    } else {
        period.setAttribute("data-payment", "yearly");
    }
});

yearly.addEventListener("click", () => {
    toggleState(yearly);
    toggleState(monthly);

    if(monthly.getAttribute("data-selected") == "true") {
        period.setAttribute("data-payment", "monthly");
    } else {
        period.setAttribute("data-payment", "yearly");
    }
});

const toggleState = (element) => {
	let state = element.getAttribute("data-selected");

    if(state === "true") {
        element.setAttribute('data-selected', 'false');
    } else {
        element.setAttribute('data-selected', 'true');
    }
};