import '../../node_modules/focus-visible/dist/focus-visible';
import '../scss/main.scss';
import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 100,
  slidesPerView: 2,
  spaceBetween: 0,
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
});