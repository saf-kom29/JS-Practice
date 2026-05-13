const div = document.querySelector("div")
const btn = document.getElementById("click")
div.addEventListener("click", console.log("click"))

btn.addEventListener("click", console.log("click"))

const el = document.getElementById("color")
el.style.color = "red"