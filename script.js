console.log("hello")

let slidein = document.querySelector("[data-slidein]");
let openBtn = document.querySelector("[data-slidein-open]");
let closeBtn = document.querySelector("[data-slidein-close]");

openBtn.addEventListener("click", () => slidein.classList.add("nav__ul--active"))
closeBtn.addEventListener("click", () => slidein.classList.remove("nav__ul--active"))
