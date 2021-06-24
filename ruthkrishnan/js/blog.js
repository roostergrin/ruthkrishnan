/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/resources/blog-archives.js":
/*!************************************************!*\
  !*** ./src/scripts/resources/blog-archives.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blogArchives": () => (/* binding */ blogArchives)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var blogArchives = function blogArchives() {
  console.log('run');
  var slidesContainer = document.querySelector('.blog-archives__slides');
  var postsArr = Array.from(document.querySelectorAll('.blog-archives__date'));
  var colArr = [];
  var slidesArr = []; // replace first archive link text to most recent

  postsArr[0].children[0].innerHTML = 'Most Recent'; // remove default output of all archive links from WP

  postsArr.forEach(function (el) {
    return el.remove();
  }); // display slides container

  slidesContainer.style.display = 'block'; // create array of columns containing 4 archive links

  while (postsArr.length > 0) {
    colArr.push(postsArr.splice(0, 4));
  } // create array of slides containing 5 columns


  while (colArr.length > 0) {
    slidesArr.push(colArr.splice(0, 5));
  } // append links to columns, then columns into slides and then slides into slides container


  slidesArr.forEach(function (slide, i) {
    var slideWrapper = document.createElement('div');
    slideWrapper.classList.add('blog-archives__slide');
    i === 0 ? slideWrapper.classList.add('blog-archives__slide--active') : null;
    slidesContainer.appendChild(slideWrapper);
    slide.forEach(function (column) {
      var colwrapper = document.createElement('div');
      colwrapper.classList.add('blog-archives__slide-column');
      slideWrapper.appendChild(colwrapper);
      column.forEach(function (el) {
        colwrapper.appendChild(el);
        el.children[0].getAttribute('href') === window.location.href ? el.classList.add('blog-archives__date--active') : null;
      });
    });
  }); // Set Slide Heights

  var slideElems = Array.from(document.querySelectorAll('.blog-archives__slide'));
  var slideHeights = slideElems.map(function (slide) {
    return slide.scrollHeight;
  });
  slidesContainer.style.height = Math.max.apply(Math, _toConsumableArray(slideHeights)) + 'px';
  var prevButton = document.querySelector('.blog-archives__navigation--prev');
  var nextButton = document.querySelector('.blog-archives__navigation--next');

  var changeSlide = function changeSlide(dir) {
    var currSlide; // find current slide index and remove active class

    slideElems.forEach(function (slide, i) {
      if (Array.from(slide.classList).includes('blog-archives__slide--active')) {
        currSlide = i;
      }

      slide.classList.remove('blog-archives__slide--active');
    }); // set active class to next/prev slide

    if (dir === 'prev') {
      currSlide - 1 >= 0 ? slideElems[currSlide - 1].classList.add('blog-archives__slide--active') : slideElems[slideElems.length - 1].classList.add('blog-archives__slide--active');
    } else if (dir === 'next') {
      currSlide + 1 < slideElems.length ? slideElems[currSlide + 1].classList.add('blog-archives__slide--active') : slideElems[0].classList.add('blog-archives__slide--active');
    }
  }; // add event listeners to next and prev buttons


  prevButton.addEventListener('click', function () {
    changeSlide('prev');
  });
  nextButton.addEventListener('click', function () {
    changeSlide('next');
  });
};

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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************************!*\
  !*** ./src/scripts/pages/blog.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_blog_archives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resources/blog-archives */ "./src/scripts/resources/blog-archives.js");

document.addEventListener('DOMContentLoaded', function () {
  (0,_resources_blog_archives__WEBPACK_IMPORTED_MODULE_0__.blogArchives)();
  var postRows = document.querySelectorAll('.page-blog-main__posts-row');
  postRows.forEach(function (el, i) {
    if (i % 2 !== 0) {
      el.classList.add('page-blog-main__posts-row--alt');
    }
  });
});
})();

/******/ })()
;