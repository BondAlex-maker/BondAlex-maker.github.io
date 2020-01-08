import styles from './assets/sass/style.scss';

'use strict';

(function() {
    /*FIXED HEADER*/
    let header = document.getElementById("header");
    let intro = document.getElementById("intro");
    let introH;
    let scrollPos = window.scrollY;

    window.addEventListener("scroll", function (e) {
        introH = intro.offsetHeight;
        scrollPos = this.scrollY;
        if (scrollPos > introH){
            header.classList.add("fixed");


        } else {
            header.classList.remove("fixed");


        }

    });

    /*Nav Toggle*/
    let nav = document.getElementById('nav');
    let navToggle = document.getElementById('navToggle');
    navToggle.onclick = function() {
        nav.classList.toggle('show');
    }


})();



/*Slider
========= ============*/

const slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
const slideInterval = setInterval(nextSlide,5000);

function secondSlide() {
    goToSlide(1);
}

function firstSlide() {
    goToSlide(0);
}

function nextSlide () {
    goToSlide(currentSlide+1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

/*NEXT PREV*/

const next = document.getElementById('second');
const previous = document.getElementById('first');

next.onclick = function() {
    secondSlide();
};
previous.onclick = function() {
    firstSlide();
};