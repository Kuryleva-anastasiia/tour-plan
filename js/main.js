var swiper = new Swiper('.swiper-container', {
  
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button--next',
    prevEl: '.swiper-button--prev',
  },

  effect: "cube",
  cubeEffect: {
    shadow: false
  },

  keyboard: {
    enabled: true,
  },
});