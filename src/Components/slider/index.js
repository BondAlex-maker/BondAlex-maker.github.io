/*Slider
 ========= ============*/

const slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
const slideInterval = setInterval(nextSlide, 5000);

function secondSlide () {
    goToSlide(1);
}

function firstSlide () {
    goToSlide(0);
}

function nextSlide () {
    goToSlide(currentSlide + 1);
}

function goToSlide (n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'slide showing';
}

/*NEXT PREV*/

const next = document.getElementById('second');
const previous = document.getElementById('first');

next.onclick = function () {
    secondSlide();
};
previous.onclick = function () {
    firstSlide();
};
