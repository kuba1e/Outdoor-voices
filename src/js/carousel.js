import '../../node_modules/focus-visible/dist/focus-visible';
import '../scss/main.scss';
import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
  speed: 400,
  slidesPerView: 2,
  spaceBetween: 0,
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1
    },
    // when window width is >= 480px
    1200: {
      slidesPerView: 2
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
});