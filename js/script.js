
var girlsInvolved = document.getElementById("girls-involved");
var countriesInvolved = document.getElementById("countries-involved");
var mentorsInvolved = document.getElementById("mentors-involved");
var impact = document.getElementById("impact");
var slides = document.getElementById("slides");

const images = ["/assets/images/index/unknown.png", 
    "/assets/images/index/emintern_team_graphic.png", 
    "/assets/images/index/now_hiring_website_graphic.png"];
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
}

function nextImage() {
    index++;
    changeImage();
}

function idk() {
    nextImage();
    setTimeout(idk, 2000);
}