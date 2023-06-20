var swiperEl = document.querySelector(".mySwiper-lograras");
    Object.assign(swiperEl, {
      grabCursor: true,
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
    });
    swiperEl.initialize()
    // SWIPE PERFIL
    var swiper6El = document.querySelector(".mySwiper-cards");
    Object.assign(swiper6El, {
      grabCursor: true,
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          origin: "left center",
          translate: ["-5%", 0, -200],
          rotate: [0, 100, 0],
        },
        next: {
          origin: "right center",
          translate: ["5%", 0, -200],
          rotate: [0, -100, 0],
        },
      },
    });
    swiper6El.initialize()
    