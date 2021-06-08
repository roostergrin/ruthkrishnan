/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/pages/newdevelopments.js":
/*!**********************************************!*\
  !*** ./src/scripts/pages/newdevelopments.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_site_hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resources/site-hero */ "./src/scripts/resources/site-hero.js");
/* harmony import */ var _resources_gmap_development__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/gmap-development */ "./src/scripts/resources/gmap-development.js");


document.addEventListener('DOMContentLoaded', function () {
  var allDevelopments = document.querySelectorAll('.page-new-developments__development');
  var availableNowElems = document.querySelectorAll('.page-new-developments__development--available-now');
  var comingSoonElems = document.querySelectorAll('.page-new-developments__development--coming-soon');
  var soldOutElems = document.querySelectorAll('.page-new-developments__development--sold-out');
  var filtersArr = document.querySelectorAll('.page-new-developments__filter');
  (0,_resources_site_hero__WEBPACK_IMPORTED_MODULE_0__.siteHero)();
  (0,_resources_gmap_development__WEBPACK_IMPORTED_MODULE_1__.setMap)('available-now');
  availableNowElems.forEach(function (el) {
    el.classList.add('page-new-developments__development--active');
  });
  filtersArr.forEach(function (el, i) {
    el.addEventListener('click', function () {
      (0,_resources_gmap_development__WEBPACK_IMPORTED_MODULE_1__.setMap)(el.dataset.filter);
      allDevelopments.forEach(function (elem) {
        return elem.classList.remove('page-new-developments__development--active');
      });

      if (el.dataset.filter === 'available-now') {
        availableNowElems.forEach(function (availableElem) {
          availableElem.classList.add('page-new-developments__development--active');
        });
      } else if (el.dataset.filter === 'coming-soon') {
        comingSoonElems.forEach(function (elem) {
          elem.classList.add('page-new-developments__development--active');
        });
      } else if (el.dataset.filter === 'sold-out') {
        soldOutElems.forEach(function (elem) {
          elem.classList.add('page-new-developments__development--active');
        });
      }

      if (!el.classList.contains('page-new-developments__filter--active')) {
        document.querySelector('.page-new-developments__filter--active').classList.remove('page-new-developments__filter--active');
        el.classList.add('page-new-developments__filter--active');
      }
    });
  });
});

/***/ }),

/***/ "./src/scripts/resources/gmap-development.js":
/*!***************************************************!*\
  !*** ./src/scripts/resources/gmap-development.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setMap": () => (/* binding */ setMap)
/* harmony export */ });
/* harmony import */ var _mapStyles_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapStyles.json */ "./src/scripts/resources/mapStyles.json");

var setMap = function setMap(category) {
  var geocoder = new google.maps.Geocoder();
  var developments = document.querySelectorAll(".page-new-developments__development-title-address--".concat(category));
  var openWindow = null;
  var map = new google.maps.Map(document.getElementById('gmapdev'), {
    center: {
      lat: 37.7766805,
      lng: -122.4508183
    },
    zoom: 13,
    fullscreenControl: false,
    styles: _mapStyles_json__WEBPACK_IMPORTED_MODULE_0__
  });
  developments.forEach(function (development, i) {
    if (development.dataset.address) {
      geocoder.geocode({
        address: development.dataset.address
      }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          var lat = results[0].geometry.location.lat();
          var lng = results[0].geometry.location.lng();
          var infoTitle = development.dataset.title;
          var infoAddress = results[0].formatted_address.slice(0, -5);
          var infoSlug = development.dataset.slug;
          var content = "\n          <h4>".concat(infoTitle, "</h4>\n          <p>").concat(infoAddress, "</p>\n          <a href='https://dev.ruthkrishnan.com/new-developments/").concat(infoSlug, "'>view property</a>\n          ");
          var infoWindow = new google.maps.InfoWindow({
            content: content
          });
          var marker = new google.maps.Marker({
            position: {
              lat: lat,
              lng: lng
            },
            map: map
          });
          marker.addListener('click', function () {
            if (openWindow === infoWindow) {
              openWindow.close();
              openWindow = null;
            } else if (openWindow) {
              openWindow.close();
              infoWindow.open(map, marker);
              openWindow = infoWindow;
            } else {
              infoWindow.open(map, marker);
              openWindow = infoWindow;
            }
          });
        }
      });
    }
  });
};

/***/ }),

/***/ "./src/scripts/resources/site-hero.js":
/*!********************************************!*\
  !*** ./src/scripts/resources/site-hero.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "siteHero": () => (/* binding */ siteHero)
/* harmony export */ });
var siteHero = function siteHero() {
  var el = document.querySelector('.hero-template__wrapper'),
      img = document.querySelector('.hero-template__background');
  img.style.objectPosition = el.dataset.positionX + ' ' + el.dataset.positionY;

  var onScroll = function onScroll() {
    var windowWidth = window.innerWidth,
        transformValue = window.pageYOffset / windowWidth * 500;

    if (windowWidth > 600) {
      el.style.transform = "translateY(".concat(transformValue, "px)");
    } else {
      el.style.transform = 'translateY(0)';
    }
  };

  window.addEventListener('scroll', onScroll);
};

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


/***/ }),

/***/ "./src/scripts/resources/mapStyles.json":
/*!**********************************************!*\
  !*** ./src/scripts/resources/mapStyles.json ***!
  \**********************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","stylers":[{"visibility":"simplified"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"color":"#af5b5b"},{"lightness":45}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#b0b0b0"}]},{"featureType":"road.local","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}]');

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
/******/ 			"/js/newdevelopments": 0,
/******/ 			"styles/neighborhoods": 0,
/******/ 			"styles/single-newdevelopments": 0,
/******/ 			"styles/newdevelopments": 0,
/******/ 			"styles/homepage": 0,
/******/ 			"styles/global": 0
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
/******/ 	__webpack_require__.O(undefined, ["styles/neighborhoods","styles/single-newdevelopments","styles/newdevelopments","styles/homepage","styles/global"], () => (__webpack_require__("./src/scripts/pages/newdevelopments.js")))
/******/ 	__webpack_require__.O(undefined, ["styles/neighborhoods","styles/single-newdevelopments","styles/newdevelopments","styles/homepage","styles/global"], () => (__webpack_require__("./src/sass/global.sass")))
/******/ 	__webpack_require__.O(undefined, ["styles/neighborhoods","styles/single-newdevelopments","styles/newdevelopments","styles/homepage","styles/global"], () => (__webpack_require__("./src/sass/pages/homepage.sass")))
/******/ 	__webpack_require__.O(undefined, ["styles/neighborhoods","styles/single-newdevelopments","styles/newdevelopments","styles/homepage","styles/global"], () => (__webpack_require__("./src/sass/pages/newdevelopments.sass")))
/******/ 	__webpack_require__.O(undefined, ["styles/neighborhoods","styles/single-newdevelopments","styles/newdevelopments","styles/homepage","styles/global"], () => (__webpack_require__("./src/sass/pages/single-newdevelopments.sass")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["styles/neighborhoods","styles/single-newdevelopments","styles/newdevelopments","styles/homepage","styles/global"], () => (__webpack_require__("./src/sass/pages/neighborhoods.sass")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;