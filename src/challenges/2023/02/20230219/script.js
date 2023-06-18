const progress = document.querySelector("progress");
const output = document.querySelector("output");

const event = new CustomEvent("progress", { detail: progress.value });

progress.addEventListener("progress", (e) => {
    console.log(e);
});

progress.dispatchEvent(event);

setTimeout(() => {
    progress.value += 1;
}, 1000)