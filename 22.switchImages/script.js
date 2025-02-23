/* script.js */
const images = ["images/image1.jpeg", "images/image2.jpeg", "images/image3.jpg"];
let currentIndex = 0;

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("slideImage").src = images[currentIndex];
}// JavaScript Document