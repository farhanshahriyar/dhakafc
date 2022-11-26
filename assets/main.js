// menu bar js

let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('acitve');
}

// search box
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('acitve');
}

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}

// js 
var swiper = new Swiper(".home-slider", {
    spaceBetween: 120,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction:false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop:true,
});