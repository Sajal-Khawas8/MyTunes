let burger = document.querySelector(".burger");
let nav = document.querySelector(".nav");
let header = document.querySelector(".header");
let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");
let line3 = document.getElementById("line3");

burger.addEventListener("click", () => {
    header.classList.toggle("burger-height");
    line1.classList.toggle("line1");
    line2.classList.toggle("line2");
    line3.classList.toggle("line3");
})