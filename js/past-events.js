var gallery = document.getElementById("past-events-slideshow");
var image = document.getElementById("past-events-slideshow-image");

const images = ["/assets/images/events/2pscreenshot1.png",
    "/assets/images/events/2pscreenshot2.png"];
let index = 0;

function changeImage() {
    index %= images.length;
    image.src = images[index];
}

function nextImage() {
    index++;
    changeImage();
}

function idk() {
    nextImage();
    setTimeout(idk, 2000);
}