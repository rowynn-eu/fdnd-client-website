// JS
// hamburgar
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
console.log(menuNav)
console.log(menuClick)
