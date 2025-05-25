const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");
    
//pointerdown misto click, aby to fugovalo na label
hamburger.addEventListener("pointerdown", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav_menu li").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))