const container = document.querySelector("section")
const cardTemplate = document.querySelector("#card-template")

const PLANS = [
    {
        "title": "Starting up",
        "icon": "https://cdn-icons-png.flaticon.com/512/498/498221.png",
        "description": "Our Starting Up plan is ideal for individuals or small teams looking to establish a digital presence with a single domain. Get your ideas online with our basic offering that includes email support to guide you through any hitches.",
        "features": [
            "1 Domain",
            "Email Support",
            "200 GB Cloud Space"
        ],
        "price": 12,
        "color": "blue",
        "best_for": "Individuals or Small Teams"
    },
    {
        "title": "Growing business",
        "icon": "https://cdn-icons-png.flaticon.com/512/498/498227.png",
        "description": "Take your burgeoning business to the next level with our Growing Business plan. Manage multiple domains, enjoy enhanced support through email and phone, and store ample data with our generous cloud space allocation.",
        "features": [
            "10 domains",
            "Email and Phone Support",
            "500 GB Cloud Space"
        ],
        "price": 40,
        "color": "purple",
        "best_for": "Medium-sized Businesses"
    },
    {
        "title": "Enterprise",
        "icon": "https://cdn-icons-png.flaticon.com/512/498/498266.png",
        "description": "For large enterprises with extensive needs, our Enterprise plan provides a comprehensive solution. Benefit from round-the-clock support, unlimited cloud space, and the ability to manage a vast number of domains under a single plan.",
        "features": [
            "100 Domains",
            "24/7 Email and Phone Support",
            "Unlimited Cloud Space"
        ],
        "price": 52,
        "color": "red",
        "best_for": "Large Enterprises"
    }
]

function addCard(card) {
    const fragment = cardTemplate.content.cloneNode(true)
    const articleElement = fragment.querySelector("article")

    const title = articleElement.querySelector("h2")
    const priceOutput = articleElement.querySelector("output")
    const icon = articleElement.querySelector("img")
    const description = articleElement.querySelector("h2 + p")
    const features = articleElement.querySelector("ul")
    const ribbon = articleElement.querySelector(".ribbon")
    const selectButton = articleElement.querySelector("button")

    title.innerText = card.title
    priceOutput.innerText = card.price
    icon.src = card.icon
    description.innerText = card.description

    card.features.map(feature => {
        const liElement = document.createElement("li")
        liElement.innerText = feature
        features.appendChild(liElement)
    })
    ribbon.classList.add(card.color)

    selectButton.addEventListener("click", () => {
        articleElement.getAttribute("data-selected") === "true" ? articleElement.setAttribute("data-selected", "false") : articleElement.setAttribute("data-selected", "true")
        
        console.log(articleElement.getAttribute("data-selected"))
    })

    container.appendChild(articleElement)
}

document.addEventListener("DOMContentLoaded", () => {
    PLANS.map(plan => {
        addCard(plan)
    })
})