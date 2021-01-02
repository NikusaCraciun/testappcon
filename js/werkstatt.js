$(document).ready(function () {


    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        speed: 1000,
        loop: true,
        autoplay: {
            delay: 3000,
            waitForTransition: true,
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        }

    })


})