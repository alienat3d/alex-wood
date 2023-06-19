const swiper = new Swiper(".gallery-slider__slider", {
  direction: "vertical",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
