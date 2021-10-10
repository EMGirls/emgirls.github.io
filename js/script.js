
var girlsInvolved = document.getElementById("girls-involved");
var countriesInvolved = document.getElementById("countries-involved");
var mentorsInvolved = document.getElementById("mentors-involved");
var impact = document.getElementById("impact");
var slides = document.getElementById("slides");
var slideLink = document.getElementById("slide-link-thing-idk-how-to-name-yes");

const images = ["/assets/images/index/eec_graphic.png", 
    "/assets/images/index/hiring_graphic.png", 
    "/assets/images/index/intern_graphic.png"];
const links = [
    "https://docs.google.com/forms/d/e/1FAIpQLSfMoKw9dbHadiwa0K_tCwZULc2AW5LTsd-Movt2VLM6tkUwGA/viewform?usp=sf_link",
    "https://forms.gle/agYrq8P9t32Noj23A",
    "https://docs.google.com/forms/d/e/1FAIpQLSfXkJ0aN3XKaj0smOrK10441AspWXtAJf5bMjt7LcFXuSAnnQ/viewform?usp=sf_link"
];
let index = 0;

let count = [0, 0, 0];
const finalCount = [3000, 50, 40];
const increment = [10, 1, 1];

document.addEventListener("scroll", () => {
    if (isInViewport(impact)) {
        counter();
    }
})

function counter() {
    for (let i = 0;i < count.length; i++) {
        if (count[i] < finalCount[i]) {
            count[i] += increment[i];
        }
    }
    girlsInvolved.innerHTML = `${count[0]}+`;
    countriesInvolved.innerHTML = `${count[1]}+`;
    mentorsInvolved.innerHTML = `${count[2]}+`;
    setTimeout(counter, 1);
}

function changeImage() {
    index %= images.length;
    slides.src = images[index];
    slideLink.href = links[index];
}

function nextImage() {
    index++;
    changeImage();
}

function idk() {
    nextImage();
    setTimeout(idk, 5000);
}