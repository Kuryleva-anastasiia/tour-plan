var swiper = new Swiper('.hotel-slider__container', {
  
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button_next',
    prevEl: '.hotel-slider__button_prev',
  },

  effect: "cube",
  cubeEffect: {
    shadow: false
  },

  keyboard: {
    enabled: true,
  },
});