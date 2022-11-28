// menu bar js

let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('acitve');
}


//scroll spy
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .nav a');

// search box
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('acitve');

    section.forEach(sec => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.Attribute('id');

        if(top => offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header .nav a[href*='+id+']').classList.add('active');
            });
        };
    });
}

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}

// swipe js 
var swiper = new Swiper(".home-slider", {
    spaceBetween: 120,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction:false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop:true,
});