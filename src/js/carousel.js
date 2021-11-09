import '../../node_modules/focus-visible/dist/focus-visible';
import '../scss/main.scss';
import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
  speed: 400,
  slidesPerView: 1,
  spaceBetween: 0,        
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  breakpoints: {
    480: {
      slidesPerView: 1    },
    992: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 2,
    }},
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
});