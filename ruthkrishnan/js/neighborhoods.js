/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/resources/slider-neighborhoods.js":
/*!*******************************************************!*\
  !*** ./src/scripts/resources/slider-neighborhoods.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sliderNeighborhoods": () => (/* binding */ sliderNeighborhoods)
/* harmony export */ });
var sliderNeighborhoods = function sliderNeighborhoods() {
  var slides = Array.from(document.querySelectorAll(".slider-neighborhoods__slide")),
      slideWrapper = document.querySelector(".slider-neighborhoods__track"),
      contentWrapper = Array.from(document.querySelectorAll(".slider-neighborhoods__content-wrapper")),
      contentColumn = document.querySelector(".slider-neighborhoods__content-column"),
      content = Array.from(document.querySelectorAll(".slider-neighborhoods__content")),
      iconArr = document.querySelectorAll(".map-neighborhoods__icon-neighborhood"),
      tooltipContainer = document.querySelector(".map-neighborhoods__tooltip"),
      tooltipContent = document.getElementById("tooltip-content"),
      closeContainer = document.getElementById("tooltip-close");
  var loc = window.location.pathname;
  var locArray = loc.split("/");
  var currentNeighborhood = locArray[locArray.length - 2]; // const dir = loc.substring(loc.lastIndexOf('/'));

  var debounceLastTimeout = null,
      sectionActive = false,
      maxTrackLength; // * Build slide array of objects *

  var allSlides = slides.map(function (el, i) {
    return {
      name: el.dataset.name,
      neighborhood: el.dataset.neighborhood,
      elem: el,
      HJICondoMonthly: JSON.parse(el.dataset.hjicondomonthly),
      HJISingleMonthly: JSON.parse(el.dataset.hjisinglemonthly),
      weather: el.dataset.weather,
      walkscore: el.dataset.walkscore,
      category: el.dataset.category
    };
  });
  var slidesArr = allSlides.filter(function (slide) {
    return slide.category === "active";
  });
  slidesArr.forEach(function (slide, i) {
    slide.position = i;
  });
  console.log(allSlides);
  maxTrackLength = document.querySelector(".slider-neighborhoods__slide").clientWidth * slidesArr.length; // * move slides *

  var changeSlide = function changeSlide(el, pos) {
    slideWrapper.style.transform = "translate3d(".concat(el.clientWidth * -pos - 16, "px, 0, 0)");
    slidesArr.forEach(function (slide) {
      if (slide.position === pos) {
        slide.elem.classList.add("slider-neighborhoods__slide--curr");
      } else {
        slide.elem.classList.remove("slider-neighborhoods__slide--curr");
      }
    });
    sectionActive ? closeToolTip() : null;
  }; // finds the min and max of condos and single
  // initializes min and max


  var minMedianSingle = allSlides[0].HJISingleMonthly.result.measurements.salePrice.median;
  var maxMedianSingle = allSlides[0].HJISingleMonthly.result.measurements.salePrice.median;
  var minMedianCondo = allSlides[0].HJICondoMonthly.result.measurements.salePrice.median;
  var maxMedianCondo = allSlides[0].HJICondoMonthly.result.measurements.salePrice.median;
  allSlides.forEach(function (slide) {
    if (slide.HJISingleMonthly) {
      if (slide.HJISingleMonthly.result.measurements.salePrice.median != 0) {
        if (slide.HJISingleMonthly.result.measurements.salePrice.median < minMedianSingle) minMedianSingle = slide.HJISingleMonthly.result.measurements.salePrice.median;
        if (slide.HJISingleMonthly.result.measurements.salePrice.median > maxMedianSingle) maxMedianSingle = slide.HJISingleMonthly.result.measurements.salePrice.median;
      }
    }

    if (slide.HJICondoMonthly) {
      if (slide.HJICondoMonthly.result.measurements.salePrice.median != 0) {
        if (slide.HJICondoMonthly.result.measurements.salePrice.median < minMedianCondo) minMedianCondo = slide.HJICondoMonthly.result.measurements.salePrice.median;
        if (slide.HJICondoMonthly.result.measurements.salePrice.median > maxMedianCondo) maxMedianCondo = slide.HJICondoMonthly.result.measurements.salePrice.median;
      }
    }
  }); // normalize data to 0-1 range

  function scaleRange(x, min, max) {
    // console.log((x - min) / (max - min))
    return (x - min) / (max - min);
  }

  function colorWeather(weather) {
    switch (weather) {
      case "cold & foggy with heavy winds":
        return "#365060";

      case "cold, with some fog and light winds":
        return "#196C55";

      case "cool to moderate, a mixture of foggy and clear days, light winds":
        return "#409983";

      case "cool to moderate, with some fog and light winds":
        return "#447211";

      case "moderate to hot, clear skies and heavy winds":
        return "#5F9409";

      case "moderate to hot, clear skies and light winds":
        return "#6C190D";

      default:
        return "black";
      // case "cold, with some fog and light winds":
      //   return "#409983";
      // case "cold & foggy with heavy winds":
      //   return "#3c5a6b";
      // case "cool to moderate, a mixture of foggy and clear days, light winds":
      //   return "#409983";
      // case "cool to moderate, with some fog and light winds":
      //   return "#a2cd74"
      // case "moderate to hot, clear skies and heavy winds":
      //   return "#edda61"
      // case "moderate to hot, clear skies and light winds":
      //   return "#ffaa5c";
      // default:
      //   return "black"
    }
  }

  function colorIconArr(value) {
    var inactiveColor = "gray";
    var currentNeighborhood = "red"; // updateLegend()

    iconArr.forEach(function (icon) {
      allSlides.forEach(function (slide) {
        if (icon.dataset.name == slide.neighborhood) {
          // a matched neighborhood and slide
          var domain;
          var min;
          var max;
          var color;

          if (value == 'single median sale price') {
            if (slide.HJISingleMonthly.result) {
              domain = slide.HJISingleMonthly.result.measurements.salePrice.median;
              color = "hsl(0, 41%, ".concat(Math.abs(scaleRange(domain, min, max) * 100 - 100), "%)");
            } else {
              console.log(slide);
              color = inactiveColor;
            }

            min = minMedianSingle;
            max = maxMedianSingle; // color = `hsl(${scaleRange(domain, min, max) * 255}, 41%, 50%)`
            // color = `hsl(0, 41%, ${Math.abs((scaleRange(domain, min, max) * 100)-100)}%)`
          } else if (value == 'walk score') {
            domain = slide.walkscore;
            min = 0;
            max = 100;
            color = "hsl(0, 41%, ".concat(Math.abs(scaleRange(domain, min, max) * 100 - 100), "%)"); // color = `hsl(${scaleRange(domain, min, max) * 255}, 41%, 50%)`
          } else if (value == "weather") {
            domain = slide.walkscore;
            color = colorWeather(slide.weather);
          }

          if (domain == 0) {
            // no data is available for the domain
            styleIcon(icon, inactiveColor, true);
          } else if (icon.dataset.name === currentNeighborhood) {
            // the current URL of the Neighborhood
            styleIcon(icon, currentNeighborhoodColor, true);
          } // Active neighborhoods with data
          else {
            styleIcon(icon, color);
          }
        }
      });
      var inactiveNeighborhoods = ["presidio", "golden-gate-park", "lincoln-park", "hunters-point", "tenderloin"];

      if (inactiveNeighborhoods.includes(icon.dataset.name)) {
        // an inactive neighborhood
        styleIcon(icon, inactiveColor, true);
      }
    });

    function styleIcon(icon, backgroundColor) {
      var disablePointerEvents = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      // gets the background and filters all text svgs
      var iconBackgrounds = Array.from(icon.children).filter(function (HTMLObjectElement) {
        return HTMLObjectElement.localName != "text";
      }); // loops through the background svgs

      iconBackgrounds.forEach(function (iconBackground) {
        // fills polygons
        iconBackground.style.fill = backgroundColor; // fills paths inside the g tag

        Array.from(iconBackground.children).forEach(function (path) {
          path.style.fill = backgroundColor;

          if (disablePointerEvents) {
            path.style.pointerEvents = "none";
          }
        });
      });
    }
  }

  colorIconArr('single median sale price');
  var filtersArr = Array.from(document.querySelectorAll(".slider-neighborhoods__filter"));

  function toggle() {}

  filtersArr.forEach(function (el) {
    el.addEventListener("click", function () {
      if (!el.classList.contains('slider-neighborhoods__filter--active')) {
        document.querySelector('.slider-neighborhoods__filter--active').classList.remove('slider-neighborhoods__filter--active');
        el.classList.add('slider-neighborhoods__filter--active');
      }

      var value = el.dataset.filter;
      colorIconArr(value);
    });
    el.addEventListener("keyup", function () {
      if (!el.classList.contains('slider-neighborhoods__filter--active')) {
        document.querySelector('.slider-neighborhoods__filter--active').classList.remove('slider-neighborhoods__filter--active');
        el.classList.add('slider-neighborhoods__filter--active');
      }

      var value = el.dataset.filter;
      colorIconArr(value);
    });
  }); // * set the correct slide active on first load *

  changeSlide(slidesArr[0].elem, 0); // * set height of column to be the height of largest content *

  var setContentHeight = function setContentHeight() {
    var currSlide = document.querySelector(".slider-neighborhoods__content-wrapper--active").children[0],
        contentContainer = document.querySelector(".slider-neighborhoods__content-container");
    contentContainer.style.height = "".concat(currSlide.scrollHeight + 18, "px");
  }; // * change the active content slide by adding active class *


  var changeContent = function changeContent(i) {
    contentWrapper.forEach(function (el) {
      +el.dataset.index === i ? el.classList.add("slider-neighborhoods__content-wrapper--active") : el.classList.remove("slider-neighborhoods__content-wrapper--active");
    });
    setContentHeight();
  }; // * set the correct content active on first load *


  changeContent(0);

  var highlight = function highlight(el) {
    iconArr.forEach(function (icon) {
      if (icon.dataset.name !== el.neighborhood) {
        z;
        icon.classList.add("map-neighborhoods__i con-neighborhood--deactive");
      } else {
        icon.classList.remove("map-neighborhoods__icon-neighborhood--deactive");
      }
    });
  }; // * Add event listener to all slides *


  slidesArr.forEach(function (el, i) {
    el.elem.addEventListener("click", function () {
      highlight(el);
      changeSlide(el.elem, el.position);
      changeContent(el.position);
    });
  }); // * change content and slide when neigborhood in map clicked *

  var mapSelectNeighborhood = function mapSelectNeighborhood(targetEl) {
    var slider = document.querySelector(".slider-neighborhoods__slider"),
        contentContainer = document.querySelector(".slider-neighborhoods__content-container");
    iconArr.forEach(function (icon) {
      return icon.classList.contains("map-neighborhoods__icon-neighborhood--active") ? icon.classList.remove("map-neighborhoods__icon-neighborhood--active") : null;
    });
    var activeElem = allSlides.find(function (el) {
      return el.neighborhood === targetEl.dataset.name;
    });

    if (activeElem.category === "active" && activeElem.neighborhood !== currentNeighborhood) {
      slidesArr.forEach(function (el) {
        if (el.neighborhood === targetEl.dataset.name) {
          changeSlide(el.elem, el.position);
          changeContent(el.position);
          targetEl.classList.add("map-neighborhoods__icon-neighborhood--active");
        }
      });
    } else {
      contentContainer.style.height = "0px";
      allSlides.forEach(function (el) {
        return el.elem.classList.remove("slider-neighborhoods__slide--curr");
      });
    }
  };

  var closeToolTip = function closeToolTip() {
    if (sectionActive) {
      tooltipContainer.style.opacity = 0;
      tooltipContainer.style.pointerEvents = "none";
      sectionActive.classList.add("map-neighborhoods__icon-neighborhood--matched");
      sectionActive = false;
    }
  };

  var openTooltip = function openTooltip(event, el) {
    var targetEl = allSlides.find(function (elem) {
      return elem.neighborhood === el.dataset.name;
    });
    var mapContent = "";

    if (!sectionActive) {
      // add tooltip information
      mapContent += "<div class='map-neighborhoods__tooltip-title'>".concat(targetEl.name, "</div>");

      if (targetEl.mapinfo) {
        if (targetEl.mapinfo.information) {
          targetEl.mapinfo.information.forEach(function (info) {
            mapContent += "<div class='map-neighborhoods__tooltip-info'>".concat(info.text, "</div>");
          });
        }
      } // Create our number formatter.


      var USDFormatterNoDec = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        // These options are needed to round to whole numbers if that's what you want.
        minimumFractionDigits: 0,
        // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        maximumFractionDigits: 0 // (causes 2500.99 to be printed as $2,501)

      });
      var USDFormatterDec = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD" // These options are needed to round to whole numbers if that's what you want.
        // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)

      });

      if (targetEl.HJICondoMonthly) {
        if (targetEl.HJICondoMonthly.result.measurements) {
          // console.log(targetEl.HJISingleMonthly.result);
          // console.log(targetEl.HJICondoMonthly.result);
          mapContent += "<div class='map-neighborhoods__tooltip-info'>House Median Price: ".concat(USDFormatterNoDec.format(targetEl.HJISingleMonthly.result.measurements.salePrice.median), "<br> Median $/SqFt: ").concat(USDFormatterDec.format(targetEl.HJISingleMonthly.result.measurements.listPricePerSqFt.median), "/sf</div>");
          mapContent += "<div class='map-neighborhoods__tooltip-info'>2BR/2BA Condo Median Price: ".concat(USDFormatterNoDec.format(targetEl.HJICondoMonthly.result.measurements.salePrice.median), "<br> Median $/SqFt: ").concat(USDFormatterDec.format(targetEl.HJICondoMonthly.result.measurements.listPricePerSqFt.median), "/sf</div>");
        }
      } // append tooltip information


      tooltipContent.innerHTML = mapContent; // show tooltip info window

      tooltipContainer.style.opacity = 1;
      tooltipContainer.style.pointerEvents = "auto"; // keep info window on screen (no overflow)

      if (event.clientY - 110 < tooltipContainer.clientHeight + 32) {
        tooltipContainer.style.top = "".concat(event.pageY, "px");
      } else {
        tooltipContainer.style.top = "".concat(event.pageY - tooltipContainer.clientHeight - 5, "px");
      }

      if (window.innerWidth < 601) {
        tooltipContainer.style.left = "50%";
        tooltipContainer.style.transform = "translateX(-50%)";
      } else if (event.clientX < tooltipContainer.clientWidth / 2 + 32) {
        tooltipContainer.style.left = "".concat(event.pageX + 16, "px");
      } else if (window.innerWidth - event.pageX < tooltipContainer.clientWidth / 2 + 32) {
        tooltipContainer.style.left = "".concat(event.pageX - tooltipContainer.clientWidth, "px");
      } else {
        tooltipContainer.style.left = "".concat(event.pageX - tooltipContainer.clientWidth / 2, "px");
      }

      iconArr.forEach(function (icon) {
        if (icon.dataset.name !== el.dataset.name) {
          icon.classList.add("map-neighborhoods__icon-neighborhood--deactive");
        } else {
          icon.classList.remove("map-neighborhoods__icon-neighborhood--deactive");
          icon.classList.remove("map-neighborhoods__icon-neighborhood--matched");
        }
      });
      sectionActive = el;
    }
  }; // close tooltip


  closeContainer.addEventListener("click", function () {
    closeToolTip();
  }); // * add event listener to all map neighborhoods *

  iconArr.forEach(function (el) {
    var activeEl = allSlides.find(function (elem) {
      return elem.neighborhood === el.dataset.name;
    });

    if (activeEl) {
      el.classList.add("map-neighborhoods__icon-neighborhood--matched");
    }

    el.addEventListener("click", function (event) {
      mapSelectNeighborhood(el);
      closeToolTip();
      openTooltip(event, el);
    });
  }); // debounce function

  var debounce = function debounce(func, args, wait, immediate) {
    var later = function later() {
      debounceLastTimeout = null;

      if (!immediate) {
        func(args);
      }
    };

    var callNow = immediate && !debounceLastTimeout;
    clearTimeout(debounceLastTimeout);
    debounceLastTimeout = setTimeout(later, wait);

    if (callNow) {
      func(args);
    }
  }; // resets the slide transform


  var reset = function reset() {
    var currElem = document.querySelector(".slider-neighborhoods__slide--curr"),
        currSlide = slidesArr.find(function (el) {
      return el.name === currElem.dataset.name;
    });
    changeSlide(currSlide.elem, currSlide.position);
    closeToolTip();
    setContentHeight();
  }; // watch screen resize to reset slide transform


  window.addEventListener("resize", function () {
    debounce(reset, null, 500);
  }); // go to the next slide

  var toNextSlide = function toNextSlide() {
    var currElem = document.querySelector(".slider-neighborhoods__slide--curr"),
        currSlide = slidesArr.find(function (el) {
      return el.name === currElem.dataset.name;
    }),
        nextSlide = slidesArr.find(function (el) {
      return el.position === currSlide.position + 1;
    });

    if (nextSlide) {
      highlight(nextSlide);
      changeSlide(nextSlide.elem, nextSlide.position);
      changeContent(nextSlide.position);
    }
  }; // go to the previous slide


  var toPrevSlide = function toPrevSlide() {
    var currElem = document.querySelector(".slider-neighborhoods__slide--curr"),
        currSlide = slidesArr.find(function (el) {
      return el.name === currElem.dataset.name;
    }),
        prevSlide = slidesArr.find(function (el) {
      return el.position === currSlide.position - 1;
    });

    if (prevSlide) {
      highlight(prevSlide);
      changeSlide(prevSlide.elem, prevSlide.position);
      changeContent(prevSlide.position);
    }
  };

  var swipedir,
      startY,
      distY,
      startX,
      distX,
      threshold = 1,
      allowedTime = 300,
      elapsedTime,
      startTime;

  var handleSwipe = function handleSwipe(swipedir) {
    if (swipedir === "left") {
      // debounce(toNextSlide, null, 500);
      toNextSlide();
    }

    if (swipedir === "right") {
      // debounce(toPrevSlide, null, 500);
      toPrevSlide();
    }
  };

  var sliderContainer = document.getElementById("slider-container");
  sliderContainer.addEventListener("touchstart", function (e) {
    var touchObj = e.changedTouches[0];
    swipedir = "none";
    distY = 0;
    distX = 0;
    startY = touchObj.pageY;
    startX = touchObj.pageX;
    startTime = new Date().getTime();
  });
  sliderContainer.addEventListener("touchmove", function (e) {
    e.preventDefault();
  });
  sliderContainer.addEventListener("touchend", function (e) {
    var touchObj = e.changedTouches[0];
    distY = touchObj.pageY - startY;
    distX = touchObj.pageX - startX;
    elapsedTime = new Date().getTime() - startTime;

    if (elapsedTime <= allowedTime && Math.abs(distX) > threshold && Math.abs(distY) <= 100) {
      swipedir = distX < 0 ? "left" : "right";
    }

    handleSwipe(swipedir);
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
/*!********************************************!*\
  !*** ./src/scripts/pages/neighborhoods.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_slider_neighborhoods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resources/slider-neighborhoods */ "./src/scripts/resources/slider-neighborhoods.js");

document.addEventListener('DOMContentLoaded', function () {
  (0,_resources_slider_neighborhoods__WEBPACK_IMPORTED_MODULE_0__.sliderNeighborhoods)();
});
})();

/******/ })()
;