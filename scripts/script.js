const pagesHolder = document.querySelector("#pagesHolder")
const heroHolder = document.querySelector("#heroHolder")
const cardHolder = document.querySelector("#cardHolder")

const turnLeft = document.querySelector("#turnLeft")
const turnRight = document.querySelector("#turnRight")



let currentPage = 0
let maxPages = ((pagesHolder.childElementCount + 1) / 2) - 1

function headerPageSwitch(page) {
    Array.from(pagesHolder.children).forEach((element, index) => {
        if (Array.from(element.classList).includes("current")) {
            element.classList.remove("current")
        }
        if (index / 2 == page) {
            element.classList.add("current")
        }
    })
}

function getOffset(el) {
    let rect = el.target.getBoundingClientRect();
    let x = el.clientX - rect.left; //x position within the element.
    let y = el.clientY - rect.top;  //y position within the element.
    return x, y
}

function mainPageSwitch(page) {
    heroHolder.style.right = (100 * page) + "%"
}

turnLeft.addEventListener("click", () => {
    headerPageSwitch(currentPage > 0 ? currentPage -= 1 : currentPage = maxPages)
    mainPageSwitch(currentPage)
})

turnRight.addEventListener("click", () => {
    headerPageSwitch(currentPage >= maxPages ? currentPage = 0 : currentPage += 1)
    mainPageSwitch(currentPage)
})

cardHolder.addEventListener("mousemove", (event) => {
    console.log(getOffset(event).x);
})


