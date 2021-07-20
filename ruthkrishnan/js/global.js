/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/global.js":
/*!*******************************!*\
  !*** ./src/scripts/global.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources/navigation */ "./src/scripts/resources/navigation.js");
/* harmony import */ var _resources_testimonials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources/testimonials */ "./src/scripts/resources/testimonials.js");
/* harmony import */ var _resources_form_get_in_touch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources/form-get-in-touch */ "./src/scripts/resources/form-get-in-touch.js");

 // import { formSubscribe } from './resources/form-subscribe'


document.addEventListener('DOMContentLoaded', function () {
  (0,_resources_navigation__WEBPACK_IMPORTED_MODULE_0__.navigation)();
  (0,_resources_testimonials__WEBPACK_IMPORTED_MODULE_1__.testimonials)(); // formSubscribe();

  (0,_resources_form_get_in_touch__WEBPACK_IMPORTED_MODULE_2__.formGetInTouch)();
});

/***/ }),

/***/ "./src/scripts/resources/form-get-in-touch.js":
/*!****************************************************!*\
  !*** ./src/scripts/resources/form-get-in-touch.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formGetInTouch": () => (/* binding */ formGetInTouch)
/* harmony export */ });
var formGetInTouch = function formGetInTouch() {
  var formElem = document.getElementById('get-in-touch-form');

  var sendEmail = function sendEmail() {
    axios.post('https://dev.ruthkrishnan.com/wp-json/rg-mail/v1/form-get-in-touch', {
      fullname: formElem.fullname.value,
      email: formElem.email.value,
      phone: formElem.phone.value,
      message: formElem.message.value
    }).then(function (res) {
      formElem.fullname.value = '';
      formElem.email.value = '';
      formElem.phone.value = '';
      formElem.message.value = '';
      setTimeout(function () {
        window.location.href = 'https://dev.ruthkrishnan.com/thank-you';
      }, 150);
    })["catch"](function (err) {
      console.log(err);
    });
  };

  formElem.addEventListener('submit', function (event) {
    event.preventDefault();
    sendEmail();
  });
};

/***/ }),

/***/ "./src/scripts/resources/navigation.js":
/*!*********************************************!*\
  !*** ./src/scripts/resources/navigation.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navigation": () => (/* binding */ navigation)
/* harmony export */ });
var navigation = function navigation() {
  var scrollPos = 0;
  var el = document.querySelector('.site-navigation'),
      hamburger = document.querySelector('.site-navigation__hamburger'),
      overlay = document.querySelector('.site-navigation__overlay'),
      drawer = document.querySelector('.site-navigation__drawer'); // close drawer when opening new page

  drawer.classList.remove('site-navigation__drawer--active');

  var handleScroll = function handleScroll() {
    scrollPos = window.pageYOffset;

    if (scrollPos > window.innerHeight * 0.25) {
      el.classList.add('site-navigation--active');
    } else {
      el.classList.remove('site-navigation--active');
    }
  };

  var toggleMenu = function toggleMenu() {
    hamburger.classList.contains('site-navigation__hamburger--active') ? hamburger.classList.remove('site-navigation__hamburger--active') : hamburger.classList.add('site-navigation__hamburger--active');
    overlay.classList.contains('site-navigation__overlay--active') ? overlay.classList.remove('site-navigation__overlay--active') : overlay.classList.add('site-navigation__overlay--active');
    drawer.classList.contains('site-navigation__drawer--active') ? drawer.classList.remove('site-navigation__drawer--active') : drawer.classList.add('site-navigation__drawer--active');
  };

  handleScroll();
  window.addEventListener('scroll', function () {
    handleScroll();
  });
  hamburger.addEventListener('click', function () {
    toggleMenu();
  });
};

/***/ }),

/***/ "./src/scripts/resources/testimonials.js":
/*!***********************************************!*\
  !*** ./src/scripts/resources/testimonials.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "testimonials": () => (/* binding */ testimonials)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var testimonials = function testimonials() {
  if (document.querySelector('.testimonials-section')) {
    var imageSlide = document.querySelectorAll('.testimonials-section__image-slide'),
        contentSlide = document.querySelectorAll('.testimonials-section__content-slide'),
        sliderLength = document.querySelector('.testimonials-section__images-slider').dataset.imageSliderLength,
        dot = document.querySelectorAll('.testimonials-section__dot'),
        content = Array.from(document.querySelectorAll('.testimonials-section__content')),
        contentWrapper = document.querySelector('.testimonials-section__content-wrapper');
    var currSlide = 0,
        maxHeight = Math.max.apply(Math, _toConsumableArray(content.map(function (el) {
      return el.clientHeight;
    })));
    contentWrapper.style.height = maxHeight + 'px';
    window.addEventListener('resize', function () {
      maxHeight = Math.max.apply(Math, _toConsumableArray(content.map(function (el) {
        return el.clientHeight;
      })));
      contentWrapper.style.height = maxHeight + 'px';
    });

    var setSlide = function setSlide() {
      imageSlide.forEach(function (image) {
        currSlide === +image.dataset.imageIndex - 1 ? image.classList.add('testimonials-section__image-slide--active') : image.classList.remove('testimonials-section__image-slide--active');
      });
      contentSlide.forEach(function (content) {
        currSlide === +content.dataset.contentIndex - 1 ? content.classList.add('testimonials-section__content-slide--active') : content.classList.remove('testimonials-section__content-slide--active');
      });
      dot.forEach(function (dot) {
        currSlide === +dot.dataset.index ? dot.classList.add('photo-gallery__dot--active') : dot.classList.remove('photo-gallery__dot--active');
      });
    };

    setSlide();
    var autoSlide = setInterval(function () {
      currSlide === sliderLength - 1 ? currSlide = 0 : currSlide++;
      setSlide();
    }, 7000);

    var goToSlide = function goToSlide(val) {
      clearInterval(autoSlide);
      currSlide = val;
      setSlide();
    };

    dot.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        goToSlide(i);
      });
    });
  }
};

/***/ }),

/***/ "./src/sass/pages/blog.sass":
/*!**********************************!*\
  !*** ./src/sass/pages/blog.sass ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sass/pages/single-blog.sass":
/*!*****************************************!*\
  !*** ./src/sass/pages/single-blog.sass ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sass/pages/archive.sass":
/*!*************************************!*\
  !*** ./src/sass/pages/archive.sass ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sass/pages/about.sass":
/*!***********************************!*\
  !*** ./src/sass/pages/about.sass ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sass/pages/single-listings.sass":
/*!*********************************************!*\
  !*** ./src/sass/pages/single-listings.sass ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sass/pages/thankyou.sass":
/*!**************************************!*\
  !*** ./src/sass/pages/thankyou.sass ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sass/global.sass":
/*!******************************!*\
  !*** ./src/sass/global.sass ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sass/pages/homepage.sass":
/*!**************************************!*\
  !*** ./src/sass/pages/homepage.sass ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sass/pages/newdevelopments.sass":
/*!*********************************************!*\
  !*** ./src/sass/pages/newdevelopments.sass ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sass/pages/single-newdevelopments.sass":
/*!****************************************************!*\
  !*** ./src/sass/pages/single-newdevelopments.sass ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sass/pages/neighborhoods.sass":
/*!*******************************************!*\
  !*** ./src/sass/pages/neighborhoods.sass ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/global": 0,
/******/ 			"styles/neighborhoods": 0,
/******/ 			"styles/single-newdevelopments": 0,
/******/ 			"styles/newdevelopments": 0,
/******/ 			"styles/homepage": 0,
/******/ 			"styles/global": 0,
/******/ 			"styles/thankyou": 0,
/******/ 			"styles/single-listings": 0,
/******/ 			"styles/about": 0,
/******/ 			"styles/archive": 0,
/******/ 			"styles/single-blog": 0,
/******/ 			"styles/blog": 0
/******/ 		};
/******/ 		
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkruthkrishnan"] = self["webpackChunkruthkrishnan"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["styles/neighborhoods","styles/single-newdevelopments","styles/newdevelopments","styles/homepage","styles/global","styles/thankyou","styles/single-listings","styles/about","styles/archive","styles/single-blog","styles/blog"], () => (__webpack_require__("./src/scripts/global.js")))
/******/ 	__webpack_require__.O(undefined, ["styles/neighborhoods","styles/single-newdevelopments","styles/newdevelopments","styles/homepage","styles/global","styles/thankyou","styles/single-listings","styles/about","styles/archive","styles/single-blog","styles/blog"], () => (__webpack_require__("./src/sass/global.sass")))
/******/ 	__webpack_require__.O(undefined, ["styles/neighborhoods","styles/single-newdevelopments","styles/newdevelopments","styles/homepage","styles/global","styles/thankyou","styles/single-listings","styles/about","styles/archive","styles/single-blog","styles/blog"], () => (__webpack_require__("./src/sass/pages/homepage.sass")))
/******/ 	__webpack_require__.O(undefined, ["styles/neighborhoods","styles/single-newdevelopments","styles/newdevelopments","styles/homepage","styles/global","styles/thankyou","styles/single-listings","styles/about","styles/archive","styles/single-blog","styles/blog"], () => (__webpack_require__("./src/sass/pages/newdevelopments.sass")))
/******/ 	__webpack_require__.O(undefined, ["styles/neighborhoods","styles/single-newdevelopments","styles/newdevelopments","styles/homepage","styles/global","styles/thankyou","styles/single-listings","styles/about","styles/archive","styles/single-blog","styles/blog"], () => (__webpack_require__("./src/sass/pages/single-newdevelopments.sass")))
/******/ 	__webpack_require__.O(undefined, ["styles/neighborhoods","styles/single-newdevelopments","styles/newdevelopments","styles/homepage","styles/global","styles/thankyou","styles/single-listings","styles/about","styles/archive","styles/single-blog","styles/blog"], () => (__webpack_require__("./src/sass/pages/neighborhoods.sass")))
/******/ 	__webpack_require__.O(undefined, ["styles/neighborhoods","styles/single-newdevelopments","styles/newdevelopments","styles/homepage","styles/global","styles/thankyou","styles/single-listings","styles/about","styles/archive","styles/single-blog","styles/blog"], () => (__webpack_require__("./src/sass/pages/blog.sass")))
/******/ 	__webpack_require__.O(undefined, ["styles/neighborhoods","styles/single-newdevelopments","styles/newdevelopments","styles/homepage","styles/global","styles/thankyou","styles/single-listings","styles/about","styles/archive","styles/single-blog","styles/blog"], () => (__webpack_require__("./src/sass/pages/single-blog.sass")))
/******/ 	__webpack_require__.O(undefined, ["styles/neighborhoods","styles/single-newdevelopments","styles/newdevelopments","styles/homepage","styles/global","styles/thankyou","styles/single-listings","styles/about","styles/archive","styles/single-blog","styles/blog"], () => (__webpack_require__("./src/sass/pages/archive.sass")))
/******/ 	__webpack_require__.O(undefined, ["styles/neighborhoods","styles/single-newdevelopments","styles/newdevelopments","styles/homepage","styles/global","styles/thankyou","styles/single-listings","styles/about","styles/archive","styles/single-blog","styles/blog"], () => (__webpack_require__("./src/sass/pages/about.sass")))
/******/ 	__webpack_require__.O(undefined, ["styles/neighborhoods","styles/single-newdevelopments","styles/newdevelopments","styles/homepage","styles/global","styles/thankyou","styles/single-listings","styles/about","styles/archive","styles/single-blog","styles/blog"], () => (__webpack_require__("./src/sass/pages/single-listings.sass")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["styles/neighborhoods","styles/single-newdevelopments","styles/newdevelopments","styles/homepage","styles/global","styles/thankyou","styles/single-listings","styles/about","styles/archive","styles/single-blog","styles/blog"], () => (__webpack_require__("./src/sass/pages/thankyou.sass")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;