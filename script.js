const navbar = document.querySelector("nav ul li a");
const header = document.querySelector("header");
const menuBtn = document.querySelector("#menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

// Toggle mobile menu on menu button click
menuBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));

// Close mobile menu on close button click
closeMenuBtn.addEventListener("click", () => menuBtn.click());

// toggle sticky nav

window.addEventListener("scroll", () => {
    window.addEventListener("scroll", function(){
        var header = document.querySelector("header");
        header.classList.toggle("Sticky", window.scrollY > 0);
    })
});