const loginButton = document.getElementById("login")
const subscribeButton = document.getElementById("subscribe")
const categoriesButton = document.getElementById("categories")
const iconsPreview = document.getElementById("icons-preview")
const articleFooter = document.querySelector("article footer")

const pumpkinSVGIconTemplate = document.getElementById("pumpkin")
const witchSVGIconTemplate = document.getElementById("witch")
const webSVGIconTemplate = document.getElementById("web")
const spiderSVGIconTemplate = document.getElementById("spider")
const crescentMoonSVGIconTemplate = document.getElementById("crescent-moon")
const fullMoonSVGIconTemplate = document.getElementById("full-moon")
const cloud1SVGIconTemplate = document.getElementById("cloud1")
const cloud2SVGIconTemplate = document.getElementById("cloud2")
const cloud3SVGIconTemplate = document.getElementById("cloud3")

document.addEventListener("DOMContentLoaded", () => {
    if (document.createElement("template").content) {
        console.info("Your browser supports template!");
    } else {
        window.alert("Your browser does not supports <template> HTML tag!");
    }
    
    /******** Login button *********/
    addElement(cloud1SVGIconTemplate, loginButton, "-bottom-2.5 left-32 w-12 h-12 text-blue-700")
    addElement(cloud3SVGIconTemplate, loginButton, "-bottom-3.5 left-52 w-16 h-16 text-blue-700")
    addElement(crescentMoonSVGIconTemplate, loginButton, "top-2.5 right-3 w-12 h-12 text-amber-500 rotate-[-10deg] animate-pulse")

    /******** Subscribe button *********/
    // Pumkin
    addElement(pumpkinSVGIconTemplate, subscribeButton, "top-2 right-3 w-10 h-10 text-amber-500 rotate-45 animate-pulse")
    addElement(webSVGIconTemplate, subscribeButton, "-left-6 -top-2 w-24 h-24 text-indigo-200")
    addElement(spiderSVGIconTemplate, subscribeButton, "left-3 bottom-4 w-6 h-6 text-amber-700 origin-[0em_-.2em] animate-spider [animation-duration:5s]")
    
    /******** Categories button *********/
    addElement(fullMoonSVGIconTemplate, categoriesButton, "-right-6 -bottom-12 w-32 h-32 text-amber-700 animate-spin [animation-duration:30s]")
    addElement(witchSVGIconTemplate, categoriesButton, "right-8 bottom-3 w-8 h-8 text-amber-700 animate-bounce [animation-duration:2s]")
    addElement(cloud2SVGIconTemplate, categoriesButton, "-bottom-2.5 left-8 w-12 h-12 text-blue-700")
    addElement(cloud3SVGIconTemplate, categoriesButton, "-bottom-3.5 left-56 w-20 h-20 text-blue-700 scale-x-[-1]")
    
    /******** Article's footer *********/
    addElement(web, articleFooter, "-right-24 -bottom-8 w-56 h-56 text-indigo-200 animate-[var(--animation-pulse)] [animation-duration:2s]")
    addElement(spiderSVGIconTemplate, articleFooter, "right-8 bottom-3 w-8 h-8 text-amber-700 -rotate-[30deg]")
})

function addElement(template, parentContainer, classList) {
    const fragment = template.content.cloneNode(true)
    const element = fragment.querySelector("svg")
    element.classList = `-z-10 absolute ${classList}`
    parentContainer.classList.add("relative", "isolate", "overflow-hidden")
    parentContainer.appendChild(element)
}