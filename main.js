import "./src/frontend/modules/particlebg.js"

//on scroll, if visible, pop up
let hideOffScreenObj = document.querySelectorAll(".hide");
window.addEventListener("scroll", () => {
    hideOffScreenObj.forEach((obj) => {
        let windowBottom = window.innerHeight + window.scrollY;
        let objTop = obj.getBoundingClientRect().top + window.scrollY + 100;
        if (objTop < windowBottom)
                obj.animate({"opacity": "1"}, {duration: 1000, easing: "ease-in-out", fill: "both"});
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

    hero.style.transform = `rotateY(${mouseX / 250}deg) rotateX(${-mouseY / 250}deg)`;
    hero.style.boxShadow = `${-mouseX / 100}px ${-mouseY / 100}px 20px rgba(255, 0, 0, 1)`;
    hero.style.border = '1px solid rgba(255, 0, 0, 1)'
});

hero.addEventListener("mouseleave", () => {
    hero.style.transform = "rotateX(0deg) rotateY(0deg)";
    hero.style.boxShadow = "0 0 40px rgb(130, 0, 0)";
    hero.style.border = "1px solid rgb(80, 0, 0)";
});

let specialText = document.querySelector(".special");
let underline = document.createElement("div");
specialText.appendChild(underline);

specialText.addEventListener("mousemove", () => {
    console.log("true");
})