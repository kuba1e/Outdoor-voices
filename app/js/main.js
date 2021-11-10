/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/carousel.js":
/*!************************!*\
  !*** ./js/carousel.js ***!
  \************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/focus-visible/dist/focus-visible */ "../node_modules/focus-visible/dist/focus-visible.js");
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/bundle */ "../node_modules/swiper/swiper-bundle.esm.js");



var swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_2__.default('.swiper', {
  speed: 400,
  slidesPerView: 1,
  spaceBetween: 0,
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  breakpoints: {
    480: {
      slidesPerView: 1
    },
    992: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 2
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev'
  }
});

/***/ }),

/***/ "./js/gsap.js":
/*!********************!*\
  !*** ./js/gsap.js ***!
  \********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "../node_modules/gsap/index.js");

var tl = gsap__WEBPACK_IMPORTED_MODULE_0__.default.timeline();
var state = false;
var burger = document.querySelector('.burger');
var burgerMenu = document.querySelector('.burger-menu');
burger.addEventListener('click', function (e) {
  if (!state) {
    gsap__WEBPACK_IMPORTED_MODULE_0__.default.to('.burger-line1', {
      duration: 0.2,
      rotate: 45,
      width: '50px',
      height: '7px',
      top: '45%'
    });
    gsap__WEBPACK_IMPORTED_MODULE_0__.default.to('.burger-line3', {
      duration: 0.2,
      rotate: -45,
      width: '50px',
      height: '7px',
      top: '45%'
    });
    gsap__WEBPACK_IMPORTED_MODULE_0__.default.to('.burger-line2', {
      duration: 0.1,
      opacity: 0
    });
    tl.to(burgerMenu, {
      duration: 1,
      x: '-100vw'
    });
    document.body.classList.add('body-hidden');
    state = true;
  } else {
    gsap__WEBPACK_IMPORTED_MODULE_0__.default.to('.burger-line1', {
      duration: 0.2,
      rotate: 0,
      width: '45px',
      height: '5px',
      top: '30%'
    });
    gsap__WEBPACK_IMPORTED_MODULE_0__.default.to('.burger-line3', {
      duration: 0.2,
      rotate: 0,
      width: '45px',
      height: '5px',
      top: '65%'
    });
    gsap__WEBPACK_IMPORTED_MODULE_0__.default.to('.burger-line2', {
      duration: 0.1,
      opacity: 1
    });
    tl.to(burgerMenu, {
      duration: 1,
      x: '100vw'
    });
    document.body.classList.remove('body-hidden');
    state = false;
  } //tl.to('.burger-menu', {duration: 2, x:'-100vw'})

});

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel */ "./js/carousel.js");
/* harmony import */ var _gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gsap */ "./js/gsap.js");




/***/ }),

/***/ "./img/Bracket.png":
/*!*************************!*\
  !*** ./img/Bracket.png ***!
  \*************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/Bracket.png");

/***/ }),

/***/ "./img/Frame.png":
/*!***********************!*\
  !*** ./img/Frame.png ***!
  \***********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/Frame.png");

/***/ }),

/***/ "./img/Main.png":
/*!**********************!*\
  !*** ./img/Main.png ***!
  \**********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/Main.png");

/***/ }),

/***/ "./img/Rectangle.png":
/*!***************************!*\
  !*** ./img/Rectangle.png ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/Rectangle.png");

/***/ }),

/***/ "./img/Rectangle1.png":
/*!****************************!*\
  !*** ./img/Rectangle1.png ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/Rectangle1.png");

/***/ }),

/***/ "./img/Rectangle2.png":
/*!****************************!*\
  !*** ./img/Rectangle2.png ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/Rectangle2.png");

/***/ }),

/***/ "./img/Rectangle3.png":
/*!****************************!*\
  !*** ./img/Rectangle3.png ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/Rectangle3.png");

/***/ }),

/***/ "./img/Rectangle4.png":
/*!****************************!*\
  !*** ./img/Rectangle4.png ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/Rectangle4.png");

/***/ }),

/***/ "./img/Rectangle5.png":
/*!****************************!*\
  !*** ./img/Rectangle5.png ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/Rectangle5.png");

/***/ }),

/***/ "./img/Rectangle6.png":
/*!****************************!*\
  !*** ./img/Rectangle6.png ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/Rectangle6.png");

/***/ }),

/***/ "./img/Rectangle7.png":
/*!****************************!*\
  !*** ./img/Rectangle7.png ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/Rectangle7.png");

/***/ }),

/***/ "./img/Rectangle8.png":
/*!****************************!*\
  !*** ./img/Rectangle8.png ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/Rectangle8.png");

/***/ }),

/***/ "./img/Search.png":
/*!************************!*\
  !*** ./img/Search.png ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/Search.png");

/***/ }),

/***/ "./img/SignUp.png":
/*!************************!*\
  !*** ./img/SignUp.png ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/SignUp.png");

/***/ }),

/***/ "./img/arrow.png":
/*!***********************!*\
  !*** ./img/arrow.png ***!
  \***********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/arrow.png");

/***/ }),

/***/ "./img/back-arrow.png":
/*!****************************!*\
  !*** ./img/back-arrow.png ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./img/back-arrow.png");

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 38:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(/*! ./img/Frame.png */ "./img/Frame.png");
var ___HTML_LOADER_IMPORT_1___ = __webpack_require__(/*! ./img/Search.png */ "./img/Search.png");
var ___HTML_LOADER_IMPORT_2___ = __webpack_require__(/*! ./img/SignUp.png */ "./img/SignUp.png");
var ___HTML_LOADER_IMPORT_3___ = __webpack_require__(/*! ./img/Bracket.png */ "./img/Bracket.png");
var ___HTML_LOADER_IMPORT_4___ = __webpack_require__(/*! ./img/Main.png */ "./img/Main.png");
var ___HTML_LOADER_IMPORT_5___ = __webpack_require__(/*! ./img/Rectangle1.png */ "./img/Rectangle1.png");
var ___HTML_LOADER_IMPORT_6___ = __webpack_require__(/*! ./img/Rectangle2.png */ "./img/Rectangle2.png");
var ___HTML_LOADER_IMPORT_7___ = __webpack_require__(/*! ./img/Rectangle.png */ "./img/Rectangle.png");
var ___HTML_LOADER_IMPORT_8___ = __webpack_require__(/*! ./img/Rectangle3.png */ "./img/Rectangle3.png");
var ___HTML_LOADER_IMPORT_9___ = __webpack_require__(/*! ./img/Rectangle4.png */ "./img/Rectangle4.png");
var ___HTML_LOADER_IMPORT_10___ = __webpack_require__(/*! ./img/Rectangle5.png */ "./img/Rectangle5.png");
var ___HTML_LOADER_IMPORT_11___ = __webpack_require__(/*! ./img/Rectangle6.png */ "./img/Rectangle6.png");
var ___HTML_LOADER_IMPORT_12___ = __webpack_require__(/*! ./img/arrow.png */ "./img/arrow.png");
var ___HTML_LOADER_IMPORT_13___ = __webpack_require__(/*! ./img/back-arrow.png */ "./img/back-arrow.png");
var ___HTML_LOADER_IMPORT_14___ = __webpack_require__(/*! ./img/Rectangle8.png */ "./img/Rectangle8.png");
var ___HTML_LOADER_IMPORT_15___ = __webpack_require__(/*! ./img/Rectangle7.png */ "./img/Rectangle7.png");
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_15___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <title>Document</title>\r\n</head>\r\n<body>\r\n  <header class=\"header\">\r\n    <div class=\"header__container container\">\r\n      <nav class=\"header__nav nav\">\r\n        <ul class=\" header__list nav__list\">\r\n          <li class=\"nav__item header__item\"><a class=\"nav__link\" href=\"#\">Women</a></li>\r\n          <li class=\"nav__item header__item\"><a class=\"nav__link\" href=\"#\">Men</a></li>\r\n          <li class=\"nav__item header__item\"><a class=\"nav__link\" href=\"#\">OV Kits</a></li>\r\n        </ul>\r\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"Outdoor voices\" class=\"header__logo logo\">\r\n        <ul class=\"header__menu nav__menu\">\r\n        <li class=\"nav__item-logo header__item-logo\"><a class=\"nav__link\" href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\"></a></li>\r\n        <li class=\"nav__item-logo header__item-logo\"><a class=\"nav__link\" href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\"></a></li>\r\n        <li class=\"nav__item-logo header__item-logo\"><a class=\"nav__link\" href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\"></a></li>\r\n      </ul>\r\n      <div class=\"burger\">\r\n        <span class=\"burger-line1\"></span>\r\n        <span class=\"burger-line2\"></span>\r\n        <span class=\"burger-line3\"></span>\r\n      </div>\r\n      </div>\r\n\r\n      <div class=\"burger-menu\">\r\n        <ul class=\"nav__menu nav__menu--show-up\">\r\n          <li class=\"nav__item-logo\"><a class=\"nav__link\" href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\"></a></li>\r\n          <li class=\"nav__item-logo\"><a class=\"nav__link\" href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\"></a></li>\r\n          <li class=\"nav__item-logo\"><a class=\"nav__link\" href=\"#\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\"></a></li>\r\n        </ul>\r\n\r\n        <ul class=\"nav__list nav__list--show-up\">\r\n          <li class=\"nav__item nav__item--padding\"><a class=\"nav__link\" href=\"#\">Women</a></li>\r\n          <li class=\"nav__item nav__item--padding\"><a class=\"nav__link\" href=\"#\">Men</a></li>\r\n          <li class=\"nav__item nav__item--padding\"><a class=\"nav__link\" href=\"#\">OV Kits</a></li>\r\n        </ul>\r\n\r\n\r\n      </nav>\r\n    </div>\r\n  </header>\r\n    <div class=\"head-block head-block--margin\">\r\n      <div class=\"main-image\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"main-image\"></div>\r\n      <div class=\"head-block__content\">\r\n    <h1 class=\"head-block__title\">Explore your playground.</h1>\r\n    <p class=\"head-block__text head-block__text--margin\">Our new Outdoors collection is built to keep you Doing Things when the going gets chilly.</p>\r\n    <button class=\"button\">Shop — Outdoors</button>\r\n      </div>\r\n    </div>\r\n\r\n  <main class=\"main\">\r\n      <div class=\"slider main-container\">\r\n      <h2 class=\"slider__title\">This just in.</h2>\r\n      <button class=\"slider__button block__button--black button\">Shop — New Arrivals</button>  \r\n      </div>\r\n    <div class=\"swiper\">\r\n      <!-- Additional required wrapper -->\r\n      <div class=\"swiper-wrapper\">\r\n        <!-- Slides -->\r\n        <div class=\"swiper-slide\">\r\n          <img class=\"swiper__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\">\r\n          <p class=\"slider__caption\" >Primo Fleece Vest</p>\r\n          <p class=\"slider__info\">3 colors available.</p>\r\n        </div>\r\n        <div class=\"swiper-slide\"> \r\n          <img class=\"swiper__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"\">\r\n          <p class=\"slider__caption\">Primo Fleece Vest</p>\r\n          <p class=\"slider__info\">3 colors available.</p>\r\n        </div>\r\n        <div class=\"swiper-slide\">\r\n          <img class=\"swiper__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\">\r\n          <p class=\"slider__caption\">Primo Fleece Vest</p>\r\n          <p class=\"slider__info\">3 colors available.</p>\r\n        </div>\r\n        <div class=\"swiper-slide\"> \r\n          <img class=\"swiper__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"\">\r\n          <p class=\"slider__caption\">Primo Fleece Vest</p>\r\n          <p class=\"slider__info\">3 colors available.</p>\r\n        </div>\r\n        <div class=\"swiper-slide\">\r\n          <img class=\"swiper__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\">\r\n          <p class=\"slider__caption\">Primo Fleece Vest</p>\r\n          <p class=\"slider__info\">3 colors available.</p>\r\n        </div>\r\n        <div class=\"swiper-slide\"> \r\n          <img class=\"swiper__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"\">\r\n          <p class=\"slider__caption\">Primo Fleece Vest</p>\r\n          <p class=\"slider__info\">3 colors available.</p>\r\n        </div>\r\n    </div>\r\n  </div> \r\n\r\n\r\n      </div>\r\n\r\n    <div class=\"main-container\">\r\n      <div class=\"main__block block\">\r\n        <div class=\"block__info\">\r\n          <span class=\"block__title title\">Zip-Offs for all.</span>\r\n          <p class=\"block__main-text\">Our most functional pant now comes in a men’s and women’s version.</p>\r\n          <button class=\"button block__button--black\">Shop — Rectrek</button>\r\n        </div>\r\n        <img class=\"block__image\"  src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\">\r\n      </div>\r\n      <div class=\"main__block main__block--flex-direction block\">\r\n        <img class=\"block__image\"  src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"\">\r\n        <div class=\"block__info\">\r\n          <span class=\"block__title title\">Trail mix or granola?</span>\r\n          <p class=\"block__main-text\">Be the hiking buddy who brings the Snacks.</p>\r\n          <button class=\"button block__button--black\">Shop — Leggings</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"main__block block\">\r\n        <div class=\"block__info\">\r\n          <span class=\"block__title title\">Get outside.</span>\r\n          <p class=\"block__main-text\">Recreational essentials for your stomping grounds — wherever they may be.</p>\r\n          <button class=\"button block__button--black\">Shop — Shoes & Accessories</button>\r\n        </div>\r\n        <img class=\"block__image\"  src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"\">\r\n      </div>\r\n    </div>\r\n    <div class=\"category-block\">\r\n      <div class=\"categoty-block__left-part\">\r\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"shop women\">\r\n      </div>\r\n      <div class=\"categoty-block__right-part\">\r\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"shop men\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"post main-container\">\r\n      <p class=\"post__text\">Outdoor Voices is on a mission to get the world moving. We believe freeing fitness from performance starts with having fun and generating endorphins. That's why we create high quality products for Recreation that make you feel strong, confident, and ready for</p>\r\n      <span class=\"post__title\">#DoingThings</span>\r\n      <div class=\"arrow-button\"><span class=\"arrow-button__text\">Our Story</span><img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\"></div>\r\n    </div>\r\n\r\n    <div class=\"slider\">\r\n      <h2 class=\"slider__title\">The Recreationalist</h2>\r\n      <button class=\"slider__button block__button--black button\">Read More</button>  \r\n      </div>\r\n      <div class=\"swiper-container\">\r\n      <div class=\"swiper-prev\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\"></div>\r\n      <div class=\"swiper-next\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"\"></div>\r\n    <div class=\"swiper\">\r\n      <!-- Additional required wrapper -->\r\n      <div class=\"swiper-wrapper\">\r\n        <!-- Slides -->\r\n        <div class=\"swiper-slide\">\r\n          <img class=\"swiper__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\">\r\n          <p class=\"slider__info\">By Caitlin Rounds</p>\r\n          <p class=\" slider__caption\">A New Wave For Surf Culture</p>\r\n        </div>\r\n        <div class=\"swiper-slide\"> \r\n          <img class=\"swiper__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"\">\r\n          <p class=\"slider__info\">By The Recreationalist</p>\r\n          <p class=\"slider__caption\">Playlist: Walk in the Park</p>\r\n        </div>\r\n        <div class=\"swiper-slide\">\r\n          <img class=\"swiper__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\">\r\n          <p class=\"slider__info\">By Caitlin Rounds</p>\r\n          <p class=\" slider__caption\">A New Wave For Surf Culture</p>\r\n        </div>\r\n        <div class=\"swiper-slide\"> \r\n          <img class=\"swiper__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"\">\r\n          <p class=\"slider__info\">By The Recreationalist</p>\r\n          <p class=\"slider__caption\">Playlist: Walk in the Park</p>\r\n        </div>\r\n        <div class=\"swiper-slide\">\r\n          <img class=\"swiper__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\">\r\n          <p class=\"slider__info\">By Caitlin Rounds</p>\r\n          <p class=\" slider__caption\">A New Wave For Surf Culture</p>\r\n        </div>\r\n        <div class=\"swiper-slide\"> \r\n          <img class=\"swiper__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"\">\r\n          <p class=\"slider__info\">By The Recreationalist</p>\r\n          <p class=\"slider__caption\">Playlist: Walk in the Park</p>\r\n        </div>\r\n    </div>\r\n  </div> \r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </main>\r\n  <footer>\r\n\r\n  </footer>\r\n</body>\r\n</html>";
// Exports
module.exports = code;

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./js/main.js","vendors-node_modules_focus-visible_dist_focus-visible_js-node_modules_gsap_index_js-node_modu-0bc9a2"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = () => {
/******/ 		
/******/ 		};
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = () => {
/******/ 		
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = () => {
/******/ 		
/******/ 			}
/******/ 			chunkLoadingGlobal = chunkLoadingGlobal.slice();
/******/ 			for(var i = 0; i < chunkLoadingGlobal.length; i++) webpackJsonpCallback(chunkLoadingGlobal[i]);
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;
//# sourceMappingURL=main.js.map