const hamburger = document.querySelector(".hamburger__menu")
const nav = document.querySelector(".nav__link")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active")
})

document.querySelectorAll(".nav__links").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
}))