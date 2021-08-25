var menuButton = document.querySelector(".menu-btn");
menuButton.addEventListener("click", function () {
  document
    .querySelector(".header__nav")
    .classList.toggle("header__nav_mobile_visible"),
    document.querySelector("body").classList.toggle("menu-opened"),
    document
      .querySelector(".menu-btn__line_top")
      .classList.toggle("menu-btn__line_top_rotate"),
    document
      .querySelector(".menu-btn__line_middle")
      .classList.toggle("menu-btn__line_middle_hidden"),
    document
      .querySelector(".menu-btn__line_bottom")
      .classList.toggle("menu-btn__line_bottom_rotate");
});
var modalButton = $('button[data-toggle="modal"]'),
  closeModalButton = $(".modal__close");
function openModal() {
  document.querySelector("body").classList.add("modal-opened");
  var e = $(".modal__overlay"),
    t = $(".modal__dialog");
  e.addClass("modal__overlay_visible"),
    t.addClass("modal__dialog_visible"),
    $(document).on("keydown", function (e) {
      27 === e.which && closeModal();
    });
}
function closeModal() {
  document.querySelector("body").classList.remove("modal-opened");
  var e = $(".modal__overlay"),
    t = $(".modal__dialog");
  e.removeClass("modal__overlay_visible"),
    t.removeClass("modal__dialog_visible");
}
modalButton.on("click", function () {
  openModal();
}),
  closeModalButton.on("click", function () {
    closeModal();
  }),
  $(".form").each(function () {
    $(this).validate({
      rules: {
        name: {
          minlength: 2,
        },
        email: {
          pattern: /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i,
        },
        phone: {
          minlength: 18,
        },
      },
      messages: {
        name: {
          required: "Please specify your name",
          minlength: jQuery.validator.format(
            "At least {0} characters required!"
          ),
        },
        phone: {
          required: "Please specify your telephone",
          minlength: jQuery.validator.format("Incorrect number"),
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
          pattern: "Format of email should be: name@domain.com",
        },
      },
    }),
      $(this).on(
        "input",
        ".footer__input_name, .modal__input_name",
        function () {
          this.value = this.value.replace(/[^a-z\s]/gi, "");
        }
      ),
      $(this).on("input", "footer__input_tel, .modal__input_tel", function () {
        if (this.value.match(/[^0-9]/g)) {
          this.value = this.value.replace(/[^0-9( )+-]/g, "");
        }
      }),
      $(".footer__input_tel, .modal__input_tel").mask("+7 (999) 999-99-99");
  });
var hotelSwiper = new Swiper(".hotel-slider__container", {
  loop: !0,
  navigation: {
    nextEl: ".hotel-slider__button_next",
    prevEl: ".hotel-slider__button_prev",
  },
  effect: "cube",
  cubeEffect: { shadow: !1 },
  keyboard: { enabled: !0 },
});
$(".newsletter").parallax({ imageSrc: "img/newsletter-bg.jpg", speed: 0.1 });
var reviewsSwiper = new Swiper(".reviews-slider", {
  loop: !0,
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
  keyboard: { enabled: !0 },
});
let mapLoaded = !1,
  mapBlock = document.getElementById("hotel-map");
mapBlock.addEventListener("mouseenter", function () {
  if (mapBlock.dataset.src) {
    mapBlock.setAttribute("src", mapBlock.getAttribute("data-src")),
      mapBlock.removeAttribute("data-src"),
      $(this).css("background", "transparent");
  }
});
const lazyImages = document.querySelectorAll("img[data-src]"),
  loadMapBlock = document.querySelectorAll(".hotel-grid__map");
windowHeight = document.documentElement.clientHeight;
let lazyImagesPositions = [];
function lazyScroll() {
  0 < document.querySelectorAll("img[data-src]").length && lazyScrollCheck();
}
function lazyScrollCheck() {
  var e = lazyImagesPositions.findIndex((e) => pageYOffset > e - windowHeight);
  0 <= e &&
    (lazyImages[e].dataset.src &&
      ((lazyImages[e].src = lazyImages[e].dataset.src),
      lazyImages[e].removeAttribute("data-src")),
    delete lazyImagesPositions[e]);
}
0 < lazyImages.length &&
  lazyImages.forEach((e) => {
    e.dataset.src &&
      (lazyImagesPositions.push(e.getBoundingClientRect().top + pageYOffset),
      lazyScrollCheck());
  }),
  window.addEventListener("scroll", lazyScroll),
  AOS.init();
