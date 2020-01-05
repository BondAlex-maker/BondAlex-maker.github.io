import styles from './assets/sass/style.scss';

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
        /*Nav toggle*/
    let nav = document.getElementById('nav');
    nav.classList.add('nav');
    let navToggle = document.getElementById('navToggle');
    navToggle.onclick = function (e) {
        e.preventDefault();
        nav.classList.add('show');

    }

})();