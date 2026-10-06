// JS code conventie: variables/DOM elements > event listeners > functions > debugging

// Hamburger menu

const menuNav = document.querySelector("nav")
const menuClick = document.querySelector("#mobile-menu")

menuClick.addEventListener("click", openMenu)

function openMenu() {
    menuNav.classList.toggle("is-open")

    if (menuNav.classList.contains("is-open")) {
        console.log("<nav> has is-open")
    } else {
        console.log("<nav> does not have is-open")
    }
}
// console.log(menuNav)
// console.log(menuClick)

// theme toggle. stap 1, pak de button, en de huidige thema. 2. bewaar en laad de gekozen thema. 3. luister forr clicks. 4. bepaal de huidige thema. 5. toggle state.

const rootHTML = document.documentElement
const savedTheme = localStorage.getItem("theme")
const themeToggle = document.querySelector("#theme-toggle")
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)")
let currentTheme = savedTheme ?? (prefersDark.matches ? "dark" : "light")

themeToggle.addEventListener("click", toggleTheme)

rootHTML.dataset.theme = savedTheme

function toggleTheme() {
    rootHTML.dataset.theme = currentTheme
    localStorage.setItem("theme", currentTheme)

    if (currentTheme === "dark") {
        currentTheme = "light"
        console.log("currentTheme: Dark")
    } else {
        currentTheme = "dark"
        console.log("currentTheme: Light")
    }
}

console.log("Current Theme:", currentTheme)
console.log("Saved Theme:", savedTheme)
console.log("Element selected:", themeToggle)
console.log("User prefers:", prefersDark)
