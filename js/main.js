
  var menuButton = document.querySelector('.menu-btn');

menuButton.addEventListener('click', function(){
  console.log('Клик');
  document.querySelector('.header__nav').classList.toggle('header__nav_mobile_visible');
  document.querySelector('body').classList.toggle('menu-opened');
  document.querySelector('.menu-btn_top').classList.toggle('menu-btn_top_rotate');
  document.querySelector('.menu-btn_middle').classList.toggle('menu-btn_middle_hidden');
  document.querySelector('.menu-btn_bottom').classList.toggle('menu-btn_bottom_rotate');
});

var modalButton = $(".booking__button");
var closeModalButton = $(".modal__close");

modalButton.on("click", function() {
  console.log('клик');
  openModal();
});
closeModalButton.on("click", function() {
  closeModal();
});

function openModal() {
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.addClass("modal__overlay_visible")
  modalDialog.addClass("modal__dialog_visible")
}
function closeModal() {
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.removeClass("modal__overlay_visible")
  modalDialog.removeClass("modal__dialog_visible")
}

var hotelSwiper = new Swiper('.hotel-slider__container', {
  
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

$('.newsletter').parallax({
    imageSrc: 'img/newsletter-bg.jpg',
    speed: 0.1
});

var reviewsSwiper = new Swiper('.reviews-slider', {
  
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },

  keyboard: {
    enabled: true,
  },

});

ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("hotel-map", {
            center: [6.932790, 79.845550],
            zoom: 13
        }, {
            searchControlProvider: 'yandex#search'
        }),

    // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: []
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: ' ',
                hintContent: 'GRAND HILTON HOTEL'
                
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: false
            
        });
       
    myMap.geoObjects
        .add(new ymaps.Placemark([6.932790, 79.845550], {
            balloonContent: 'GRAND HILTON HOTEL'
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }));
    }
