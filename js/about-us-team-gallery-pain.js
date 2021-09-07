var gallery = document.getElementById("about-us-team-gallery");
var image = document.getElementById("about-us-team-gallery-image");

const images = ["/assets/images/teamimage1.png", 
    "/assets/images/teamimage2.png", 
    "/assets/images/teamimage3.png"];
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