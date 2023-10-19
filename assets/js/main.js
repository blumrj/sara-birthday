$(function() {
    $.scrollify({
        section : ".scrollify-container",
        scrollSpeed: 400,
    });
});

AOS.init();

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    centeredSlides: true,
    spaceBetween: 10,
    breakpoints: {
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20
        },
        640: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 30
        }
      },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});
  