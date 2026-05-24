import "./modules/particlebg.js"

//on scroll, if visible, pop up
let hideOffScreenObj = document.querySelectorAll(".hide");
window.addEventListener("scroll", () => {
    hideOffScreenObj.forEach((obj) => {
        let windowBottom = window.innerHeight + window.scrollY;
        let objTop = obj.getBoundingClientRect().top + window.scrollY + 300;
        if (objTop < windowBottom)
                obj.animate({opacity: 1}, {duration: 1000, easing: "ease-in-out", fill: "forwards"});
    });
});

let hero = document.querySelector(".hero");
let heroCenterX = 0;
let heroCenterY = 0;
hero.addEventListener("mouseenter", () => {
    heroCenterX = hero.getBoundingClientRect().left + (hero.getBoundingClientRect().width / 2);
    heroCenterY = hero.getBoundingClientRect().top + (hero.getBoundingClientRect().height / 2);
})

hero.addEventListener("mousemove", (e) => {
    let mouseX = e.clientX - heroCenterX;
    let mouseY = e.clientY - heroCenterY;

    hero.style.transform = `rotateY(${mouseX / 40}deg) rotateX(${-mouseY / 40}deg)`;
    hero.style.boxShadow = `${-mouseX / 40}px ${-mouseY / 40}px 20px rgba(255, 0, 0, 1)`;
})

hero.addEventListener("mouseleave", () => {
    hero.style.transform = "rotateX(0deg) rotateY(0deg)";
    hero.style.boxShadow = "0 0 40px rgb(141, 44, 44)";
});