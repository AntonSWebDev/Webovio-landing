const owl = $('.top-slider');

owl.owlCarousel({
  items: 1,
  loop: true,
  autoplay: true
});

const deationSlider = $('.deation__slider');

deationSlider.owlCarousel({
  items: 4,
  autoplay: true,
  loop: true,
  responsive: {
    0: {
      items: 1
    },
    435: {
      items: 2
    },
    620: {
      items: 2
    },
    760: {
      items: 3
    },
    1000: {
      items: 3
    },
    1001: {
      items: 4
    }
  }
});