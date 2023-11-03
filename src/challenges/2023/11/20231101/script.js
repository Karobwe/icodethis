const title = document.querySelector("h2")
const description = document.querySelector("p")
const image = document.querySelector("img")
const navigationButtons = document.querySelectorAll("footer button")
const skipButton = document.querySelector("#skip")
const nextButton = document.querySelector("#next")

const DATA = [
    {
        title: "Find campings near you",
        description: "Browse through a variety of camping sites based on your location to find the perfect spot for your outdoor adventure.",
        icon: "https://www.svgrepo.com/show/395969/camping.svg",
    },
    {
        title: "Reserve directly from your phone",
        description: "Secure your spot with a few taps on your phone, making reservations hassle-free and instant.",
        icon: "https://www.svgrepo.com/show/262869/smartphone-chat.svg",
    },
    {
        title: "Get directions to the locations",
        description: "Never get lost on your way with precise directions right to the entrance of your reserved camping site.",
        icon: "https://www.svgrepo.com/show/396056/compass.svg",
    },
]


document.addEventListener("DOMContentLoaded", () => {
    setItem(DATA[0])

    navigationButtons.forEach(button => {
        button.addEventListener("click", () => {
            const index = parseInt(button.getAttribute("data-index"))
            updateView(() => {
                setItem(DATA[index])

                if(parseInt(index) === DATA.length - 1) nextButton.innerText = "Start"
            })

            navigationButtons.forEach(button => {
                if(button.getAttribute("data-index") != index) {
                    button.setAttribute("data-active", "false")
                } else {
                    button.setAttribute("data-active", "true")
                }
            })
        })
    })

    skipButton.addEventListener("click", event => {
        const activeItem = document.querySelector('.noname button[data-active="true"]')
        console.log(activeItem)
    })
    
    nextButton.addEventListener("click", event => {
        console.log(event.target)
    })
})

function setItem(item) {
    title.innerText = item.title
    description.innerText = item.description
    image.src = item.icon
}

function updateView(callback) {
    if (!document.startViewTransition) {
      callback()
      return
    }

    document.startViewTransition(() => {
      callback()
    });
}