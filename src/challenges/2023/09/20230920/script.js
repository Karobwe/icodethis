const output = document.querySelector("output")
const progress = document.querySelector('progress')
const visualProgress = document.querySelector('#visual-progress')
const rangeInput = document.querySelector('#completion')

rangeInput.addEventListener('input', (e) => {
    visualProgress.classList.forEach(className => {
        // remove Tailwind's width utility class
        if (/^w-\[/.test(className)) {
            visualProgress.classList.remove(className)
        }
    })

    output.innerText = e.target.value
    progress.value = e.target.value
    visualProgress.classList.add(`w-[${e.target.value}%]`)
})

document.addEventListener('DOMContentLoaded', () => {
    progress.value = rangeInput.value

    setInterval(() => {
        progress.value = progress.value + 1
    }, 100)
})