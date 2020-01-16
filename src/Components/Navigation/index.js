(function () {
    /*FIXED HEADER*/
    let header = document.getElementById('header');
    let introH;
    let scrollPos = window.scrollY;

    window.addEventListener('scroll', function (e) {
        introH = 20;
        scrollPos = this.scrollY;
        if (scrollPos > introH) {
            header.classList.add('fixed');

        } else {
            header.classList.remove('fixed');

        }

    });


    /*Nav Toggle*/
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('navToggle');
    navToggle.onclick = function () {
        nav.classList.toggle('show');
    };




})();
