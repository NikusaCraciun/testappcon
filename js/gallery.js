
// SwiperJs: https://swiperjs.com/get-started/
// Jquery: https://jquery.com/download/ 

$(document).ready(function() {

    $('.back-to-front').click(function() {
        var swiper = $('.swiper-wrapper')
        swiper.addClass('swiper-back');
        setInterval(function(){
            swiper.removeClass('swiper-back');
        }, 1500);

        swiper.css('transform', 'translate3d(0px, 0px, 0px)', 'transition-duration', '1000ms !important');
    });

var swiperBottomScrollbarFull = new Swiper('.swiper-bottom-scrollbar-full', {
    allowTouchMove: true,
    slidesPerView: 'auto',
    grabCursor: true,
    preventClicks: true,
    spaceBetween: 30,
    keyboardControl: true,
    speed: 1000,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        hide: false,
        snapOnRelease: true
    },
    mousewheel: {
        enable: true
    },
    keyboard: {
        enabled: true
    }
});




})