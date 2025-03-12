let currentIndex = 0;
const totalSlides = 11;
const slideshow = document.querySelector('.slideshow');

document.head.insertAdjacentHTML('beforeend', `
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Kunstler+Script&display=swap');
        .text-overlay {
            font-family: 'Kunstler Script', cursive;
        }
    </style>
`);

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    slideshow.style.transform = `translateY(-${currentIndex * 100}vh)`;
}

setInterval(nextSlide, 3000);
