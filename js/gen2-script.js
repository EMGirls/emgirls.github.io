var slides = document.getElementById("slideshow");

const images = [
    "/assets/images/intern/sponsors/0.thank_you.webp",
    "/assets/images/intern/sponsors/1.wil.webp",
    "/assets/images/intern/sponsors/2.supermoon.webp",
    "/assets/images/intern/sponsors/3.xyz.webp",
    "/assets/images/intern/sponsors/4.cgA.webp"
]

let index = 0;

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