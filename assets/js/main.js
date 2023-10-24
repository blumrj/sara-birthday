// $(function() {
//     $.scrollify({
//         section : ".scrollify-container",
//         // scrollSpeed: 400,
//     });
// });

$(document).ready(function($) {
  $.scrollify({
section : ".scrollify-container",
scrollSpeed: 800,
});
});

AOS.init();

const paintingsSwiper = new Swiper("#paintings-swiper", {
    loop: true,
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: 30,
    breakpoints: {
        // when window width is >= 480px
        // 480: {
        //     slidesPerView: 2,
        //     slidesPerGroup: 2,
        //     spaceBetween: 20
        // },
        // 640: {
        //     slidesPerView: 4,
        //     slidesPerGroup: 4,
        //     spaceBetween: 30
        // }
      },

      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
})

const swiper = new Swiper('#sunset-swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
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

const facetimeSwiper = new Swiper("#facetime-swiper", {
    // loop: true,
    slidesPerView: "auto",
    slidesPerGroup: 1,
    // centeredSlides: true,
    spaceBetween: 30,
    breakpoints: {
        // when window width is >= 480px
        // 480: {
        //     slidesPerView: 2,
        //     slidesPerGroup: 1,
        //     spaceBetween: 20
        // },
        // 640: {
        //     slidesPerView: 5,
        //     slidesPerGroup: 1,
        //     spaceBetween: 30
        // }
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
})

const notesSwiper = new Swiper("#notes-swiper", {
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    // centeredSlides: true,
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
            spaceBetween: 30
        }
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
})

const accomplishmentsSwiper = new Swiper("#accomplishments-swiper", {
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    // centeredSlides: true,
    spaceBetween: 10,
    // breakpoints: {
    //     // when window width is >= 480px
    //     480: {
    //         slidesPerView: 2,
    //         slidesPerGroup: 1,
    //         spaceBetween: 20
    //     },
    //     640: {
    //         slidesPerView: 3,
    //         spaceBetween: 30
    //     }
    //   },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
})

  