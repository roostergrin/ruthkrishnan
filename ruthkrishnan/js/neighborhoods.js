/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/resources/USDFormat.js":
/*!********************************************!*\
  !*** ./src/scripts/resources/USDFormat.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "USDFormatterDec": () => (/* binding */ USDFormatterDec),
/* harmony export */   "USDFormatterNoDec": () => (/* binding */ USDFormatterNoDec)
/* harmony export */ });
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

/***/ }),

/***/ "./src/scripts/resources/map-icon.js":
/*!*******************************************!*\
  !*** ./src/scripts/resources/map-icon.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapZoom": () => (/* binding */ mapZoom)
/* harmony export */ });
var mapZoom = function mapZoom() {
  var zoomInBtn = document.getElementById("map-neighborhoods__zoom-in"),
      zoomOutBtn = document.getElementById("map-neighborhoods__zoom-out"),
      wrapper = document.getElementById("map-neighborhoods__wrapper"),
      container = Array.from(document.getElementsByClassName("map-neighborhoods__icon"))[0],
      panScrollStartX = null,
      panScrollStartY = null,
      panActive = false,
      panStartX = null,
      panStartY = null;
  wrapper.addEventListener("mousedown", handlePanScrollMouseDown);
  window.addEventListener("mousemove", handlePanScrollMouseMove);
  window.addEventListener("mouseup", handlePanScrollMouseUp);
  zoomInBtn.addEventListener("click", function () {
    return handleZoom("increase");
  });
  zoomOutBtn.addEventListener("click", function () {
    return handleZoom("decrease");
  });

  function handlePanScrollMouseDown(event) {
    console.log('handlePanScrollMouseDown', event);
    container.style.cursor = "grabbing";
    panScrollStartX = wrapper.scrollLeft;
    panScrollStartY = wrapper.scrollTop;
    panStartX = event.clientX;
    panStartY = event.clientY;
    panActive = true;
  }

  ;

  function handlePanScrollMouseMove(event) {
    console.log('handlePanScrollMouseMove', panActive);
    event.preventDefault();

    if (panActive) {
      var currPosX = event.clientX;
      var currPosY = event.clientY;
      var top = panScrollStartY + (panStartY - currPosY);
      var left = panScrollStartX + (panStartX - currPosX);
      wrapper.scrollTop = top;
      wrapper.scrollLeft = left;
    }
  }

  ;

  function handlePanScrollMouseUp(event) {
    console.log('handlePanScrollMouseUp', event);
    container.style.cursor = "grab";
    panActive = false;
  }

  ;

  function handleZoom(control) {
    if (control === "increase") {
      var width = +container.clientWidth;
      if (width < 1500) container.style.width = "".concat(width + 150, "px");
    } else {
      // TODO: on mobile screens reset the width
      var _width = +container.clientWidth; // if ( width > 550) 


      container.style.width = "".concat(_width - 150, "px");
    }
  }

  ;
};

/***/ }),

/***/ "./src/scripts/resources/slider-neighborhoods.js":
/*!*******************************************************!*\
  !*** ./src/scripts/resources/slider-neighborhoods.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sliderNeighborhoods": () => (/* binding */ sliderNeighborhoods)
/* harmony export */ });
/* harmony import */ var _USDFormat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./USDFormat.js */ "./src/scripts/resources/USDFormat.js");
/* harmony import */ var _resources_map_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/map-icon */ "./src/scripts/resources/map-icon.js");


var sliderNeighborhoods = function sliderNeighborhoods() {
  (0,_resources_map_icon__WEBPACK_IMPORTED_MODULE_1__.mapZoom)();
  var slides = Array.from(document.querySelectorAll(".slider-neighborhoods__slide")),
      // contents = Array.from( document.querySelectorAll(".slider-neighborhoods__content-wrapper"))
  slideWrapper = document.querySelector(".slider-neighborhoods__track"),
      contentWrapper = Array.from(document.querySelectorAll(".slider-neighborhoods__content-wrapper")),
      iconArr = document.querySelectorAll(".map-neighborhoods__icon-neighborhood"),
      tooltipContainer = document.querySelector(".map-neighborhoods__tooltip"),
      tooltipContent = document.getElementById("tooltip-content"),
      closeContainer = document.getElementById("tooltip-close"),
      nextArrow = document.getElementById("next"),
      prevArrow = document.getElementById("previous"),
      emptyState = document.getElementById("empty-state"),
      paginationIndicator = document.getElementById("pagination-indicator");
  var debounceLastTimeout = null,
      sectionActive = false; // * Build slide array of objects *

  var allSlides = contentWrapper.map(function (el, i) {
    return {
      name: el.dataset.name,
      neighborhood: el.dataset.neighborhood,
      elem: el,
      HJICondoMonthly: el.dataset.hjicondomonthly ? JSON.parse(el.dataset.hjicondomonthly) : false,
      HJISingleMonthly: el.dataset.hjisinglemonthly ? JSON.parse(el.dataset.hjisinglemonthly) : false,
      weather: el.dataset.weather,
      walkscore: el.dataset.walkscore,
      transitscore: el.dataset.transitscore,
      category: el.dataset.category
    };
  });
  allSlides.forEach(function (slide) {
    slide.elem.querySelector('[id^="transit-score-"]').innerHTML = slide.transitscore;
    slide.elem.querySelector('[id^="walk-score-"]').innerHTML = slide.walkscore; // slide.elem.querySelector('[id^="weather-score-"]').innerHTML = slide.weather

    if (slide.HJICondoMonthly || slide.HJISingleMonthly) {
      slide.elem.querySelector('[id^="single-median-price-display-"]').innerHTML = slide.HJISingleMonthly.result.measurements.salePrice.median ? _USDFormat_js__WEBPACK_IMPORTED_MODULE_0__.USDFormatterNoDec.format(slide.HJISingleMonthly.result.measurements.salePrice.median) : 'no house data';
      slide.elem.querySelector('[id^="single-sq-ft-price-display-"]').innerHTML = slide.HJISingleMonthly.result.measurements.salePrice.median ? _USDFormat_js__WEBPACK_IMPORTED_MODULE_0__.USDFormatterDec.format(slide.HJISingleMonthly.result.measurements.salePrice.median / slide.HJISingleMonthly.result.measurements.size.median) : 'no house data';
      slide.elem.querySelector('[id^="condo-median-price-display-"]').innerHTML = slide.HJICondoMonthly.result.measurements.salePrice.median ? _USDFormat_js__WEBPACK_IMPORTED_MODULE_0__.USDFormatterNoDec.format(slide.HJICondoMonthly.result.measurements.salePrice.median) : 'no condo data';
      slide.elem.querySelector('[id^="condo-sq-ft-price-display-"]').innerHTML = slide.HJICondoMonthly.result.measurements.salePrice.median ? _USDFormat_js__WEBPACK_IMPORTED_MODULE_0__.USDFormatterDec.format(slide.HJICondoMonthly.result.measurements.salePrice.median / slide.HJICondoMonthly.result.measurements.size.median) : 'no condo data';
    }
  }); // Update content on slide 
  // run through all the slides, 
  // swap the child's inner html
  // * filter and index slides *

  var slidesArr = allSlides.filter(function (slide) {
    return slide.category === "active" || slide.category === "coming-soon";
  });
  slidesArr.forEach(function (slide, i) {
    slide.position = i;
  }); // * sets slide to currently selected *

  var setSlide = function setSlide(el, pos) {
    // slideWrapper.style.transform = `translate3d(${
    //   el.clientWidth * -pos - 16
    // }px, 0, 0)`;
    slidesArr.forEach(function (slide) {
      if (slide.position === pos) {
        slide.elem.classList.add("slider-neighborhoods__slide--curr");
      } else {
        slide.elem.classList.remove("slider-neighborhoods__slide--curr");
      }
    });
    paginationIndicator.style.width = "".concat(pos / slidesArr.length * 100, "%");
    sectionActive ? closeToolTip() : null;
  }; // * set the active content slide by adding active class *


  var setContent = function setContent(i) {
    emptyState.style.opacity = 0;
    contentWrapper.forEach(function (el) {
      if (+el.dataset.index === i) {
        el.classList.add("slider-neighborhoods__content-wrapper--active");
        console.log(el);

        if (el.querySelector(".slider-neighborhoods__content-link")) {
          el.querySelector(".slider-neighborhoods__content-link").tabIndex = "0";
        }
      } else {
        el.classList.remove("slider-neighborhoods__content-wrapper--active");

        if (el.querySelector(".slider-neighborhoods__content-link")) {
          el.querySelector(".slider-neighborhoods__content-link").tabIndex = "-1";
        }
      }
    });
  }; // * set the highlight on the neighborhood map *


  var setHighlight = function setHighlight(el) {
    iconArr.forEach(function (icon) {
      if (icon.dataset.name !== el.neighborhood) {
        icon.classList.add("map-neighborhoods__icon-neighborhood--deactive");
        icon.classList.remove("map-neighborhoods__icon-neighborhood--active");
      } else {
        icon.classList.add("map-neighborhoods__icon-neighborhood--active");
        icon.classList.remove("map-neighborhoods__icon-neighborhood--deactive");
      }
    });
  }; // * set map, content, and slide when the neighborhood map icon is clicked *


  var setMapIcon = function setMapIcon(targetEl) {
    slidesArr.forEach(function (el) {
      if (el.neighborhood === targetEl.dataset.name) {
        setSlide(el.elem, el.position);
        setContent(el.position); // active map icon

        targetEl.classList.add("map-neighborhoods__icon-neighborhood--active");
      }
    });
  }; // * Add event listener to all slides *


  slidesArr.forEach(function (el, i) {
    el.elem.addEventListener("click", function () {
      setHighlight(el);
      setContent(el.position);
      setSlide(el.elem, el.position);
    });
  }); // * helper function for the neighborhood map

  var activateNeighborhoodOpacity = function activateNeighborhoodOpacity(el) {
    var activeEl = allSlides.find(function (elem) {
      return elem.neighborhood === el.dataset.name;
    });

    if (activeEl) {
      el.classList.add("map-neighborhoods__icon-neighborhood--matched");
    }
  }; // * add event listeners and activate neighborhood map opacity *


  iconArr.forEach(function (el) {
    activateNeighborhoodOpacity(el);
    el.addEventListener("click", function () {
      closeToolTip();
      setHighlight(el);
      setMapIcon(el);
    }); // el.addEventListener("mouseenter", (event) => {
    //   if (value === "single median sale price") {
    //     closeToolTip();
    //     openTooltip(event, el);
    //     tooltipContainer.style.pointerEvents = "none";
    //     closeContainer.style.display = "none";
    //   } else {
    //     tooltipContainer.style.pointerEvents = "auto";
    //     closeContainer.style.display = "block";
    //   }
    // });
  });

  var closeToolTip = function closeToolTip() {
    if (sectionActive) {
      tooltipContainer.style.opacity = 0;
      tooltipContainer.style.pointerEvents = "auto";
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
      mapContent += "<div class='map-neighborhoods__tooltip-title'>".concat(targetEl.name, "</div>"); // Create our number formatter.

      if (targetEl.HJICondoMonthly) {
        if (targetEl.HJICondoMonthly.result.measurements) {
          // console.log(targetEl.HJISingleMonthly.result);
          // console.log(targetEl.HJICondoMonthly.result);
          if (targetEl.HJISingleMonthly.result.measurements.salePrice.median != 0) {
            mapContent += "<div class='map-neighborhoods__tooltip-info'>House Median Price: ".concat(_USDFormat_js__WEBPACK_IMPORTED_MODULE_0__.USDFormatterNoDec.format(targetEl.HJISingleMonthly.result.measurements.salePrice.median), "<br> Median $/SqFt: ").concat(_USDFormat_js__WEBPACK_IMPORTED_MODULE_0__.USDFormatterDec.format(targetEl.HJISingleMonthly.result.measurements.salePrice.median / targetEl.HJISingleMonthly.result.measurements.size.median), "/sf</div>");
          }

          if (targetEl.HJICondoMonthly.result.measurements.salePrice.median != 0) mapContent += "<div class='map-neighborhoods__tooltip-info'>2BR/2BA Condo Median Price: ".concat(_USDFormat_js__WEBPACK_IMPORTED_MODULE_0__.USDFormatterNoDec.format(targetEl.HJICondoMonthly.result.measurements.salePrice.median), "<br> Median $/SqFt: ").concat(_USDFormat_js__WEBPACK_IMPORTED_MODULE_0__.USDFormatterDec.format(targetEl.HJICondoMonthly.result.measurements.salePrice.median / targetEl.HJICondoMonthly.result.measurements.size.median), "/sf</div>");
          mapContent += "<p style='font-size:0.75em;'>(click on neighborhood to learn more below)<p>";
        }
      } // append tooltip information


      tooltipContent.innerHTML = mapContent; // show tooltip info window

      tooltipContainer.style.opacity = 1;
      tooltipContainer.style.pointerEvents = "no"; // keep info window on screen (no overflow)

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
  }; // go to the next slide


  var toNextSlide = function toNextSlide() {
    var currElem = document.querySelector(".slider-neighborhoods__slide--curr"),
        currSlide = slidesArr.find(function (el) {
      return el.name === currElem.dataset.name;
    }),
        nextSlide = slidesArr.find(function (el) {
      return el.position === currSlide.position + 1;
    });

    if (nextSlide) {
      setHighlight(nextSlide);
      setSlide(nextSlide.elem, nextSlide.position);
      setContent(nextSlide.position);
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
      setHighlight(prevSlide);
      setSlide(prevSlide.elem, prevSlide.position);
      setContent(prevSlide.position);
    }
  };

  nextArrow.addEventListener("click", function (e) {
    toNextSlide();
  });
  prevArrow.addEventListener("click", function (e) {
    toPrevSlide();
  }); // finds the min and max of condos and single
  // initializes min and max

  var minMedianSingle = allSlides[1].HJISingleMonthly.result.measurements.salePrice.median;
  var maxMedianSingle = allSlides[0].HJISingleMonthly.result.measurements.salePrice.median;
  var minMedianCondo = allSlides[0].HJICondoMonthly.result.measurements.salePrice.median;
  var maxMedianCondo = allSlides[0].HJICondoMonthly.result.measurements.salePrice.median;
  allSlides.forEach(function (slide) {
    if (slide.HJISingleMonthly.result) {
      if (slide.HJISingleMonthly.result.measurements.salePrice.median != 0) {
        if (slide.HJISingleMonthly.result.measurements.salePrice.median < minMedianSingle) minMedianSingle = slide.HJISingleMonthly.result.measurements.salePrice.median;
        if (slide.HJISingleMonthly.result.measurements.salePrice.median > maxMedianSingle) maxMedianSingle = slide.HJISingleMonthly.result.measurements.salePrice.median;
      }
    }

    if (slide.HJICondoMonthly.result) {
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

  var weatherPallette = ["#365060", "#196C55", "#447211", "#8954BE", "#8D3C8E", "#6C190D"];
  var weatherValues = [{
    temperature: "cold:",
    weatherGroup: [{
      fogWind: "foggy with heavy winds",
      color: "#365060"
    }, {
      fogWind: "with some fog and light winds",
      color: "#196C55"
    }]
  }, {
    temperature: "cool to moderate:",
    weatherGroup: [{
      fogWind: "some foggy and clear days, light winds",
      color: "#447211"
    }, {
      fogWind: "with some fog and light winds",
      color: "#8954BE"
    }]
  }, {
    temperature: "moderate to hot:",
    weatherGroup: [{
      fogWind: "clear skies and heavy winds",
      color: "#8D3C8E"
    }, {
      fogWind: "clear skies and light winds",
      color: "#6C190D"
    }]
  }];

  function colorWeather(weather, weatherPallette) {
    switch (weather) {
      case "cold & foggy with heavy winds":
        return weatherPallette[0];

      case "cold, with some fog and light winds":
        return weatherPallette[1];

      case "cool to moderate, a mixture of foggy and clear days, light winds":
        return weatherPallette[2];

      case "cool to moderate, with some fog and light winds":
        return weatherPallette[3];

      case "moderate to hot, clear skies and heavy winds":
        return weatherPallette[4];

      case "moderate to hot, clear skies and light winds":
        return weatherPallette[5];

      default:
        return "gray";
    }
  }

  function updateLegendGradientScale(legend, startColor, endColor, min, max) {
    legend.innerHTML = "<div class=\"slider-neighborhoods__legend-content\">\n    <div style=\"background:linear-gradient(90deg, ".concat(startColor, " 0%, ").concat(endColor, " 100%\" class=\"slider-neighborhoods__legend-box\">\n    </div>\n    <div class=\"slider-neighborhoods__legend-text-container\">\n    <p class=\"slider-neighborhoods__legend-text\">").concat(min, "</p>\n    <p class=\"slider-neighborhoods__legend-text\">").concat(max, "</p>\n    </div>\n    </div>");
  }

  function updateLegendPunctuatedScale(legend, palletteArr) {
    var legendTemplate = "<div id=\"weather-see-more\" class=\"listings-single__features-see-more\"><span id=\"see-more-text\" class=\"listings-single__features-see-more-btn\">show legend</span></div>\n    <div id=\"weather-content\" class=\"slider-neighborhoods__legend-content slider-neighborhoods__legend-content--punctuated\">";
    weatherValues.forEach(function (weather, i) {
      legendTemplate += "\n      <div style=\"display: flex; gap: 1rem; flex-direction: column;\" class=\"slider-neighborhoods__legend-box-container\">\n        <p>".concat(weather.temperature, "</p>\n      <div class=\"slider-neighborhoods__legend-boxes-container\">\n        <div style=\"background: ").concat(weather.weatherGroup[0].color, "; min-width: 2rem; min-height: 2rem;\" class=\"slider-neighborhoods__legend-box--filled\"></div>\n        <p style=\"padding-left: 0.5rem;\" class=\"slider-neighborhoods__legend-text\">").concat(weather.weatherGroup[0].fogWind, "</p>\n      </div>\n      <div class=\"slider-neighborhoods__legend-boxes-container\">\n          <div style=\"background: ").concat(weather.weatherGroup[1].color, "; min-width: 2rem; min-height: 2rem;\" class=\"slider-neighborhoods__legend-box--filled\"></div>\n          <p style=\"padding-left: 0.5rem;\"class=\"slider-neighborhoods__legend-text\">").concat(weather.weatherGroup[1].fogWind, "</p>\n      </div>\n    </div>");
    });
    legendTemplate += "</div>";
    legend.innerHTML = legendTemplate;
    var weatherContent = document.getElementById("weather-content");
    var seeMore = document.getElementById("weather-see-more");
    var seeMoreText = document.getElementById("see-more-text");
    var active = true;
    seeMore.addEventListener("click", function () {
      if (active) {
        seeMoreText.innerHTML = "hide legend";
        weatherContent.style.maxHeight = "500px";
        active = false;
      } else {
        seeMoreText.innerHTML = "show legend";
        weatherContent.style.maxHeight = "0px";
        active = true;
      }
    });
  }

  function colorIconArr(value) {
    var legend = document.getElementById("legend");
    var inactiveColor = "gray";
    var currentNeighborhood = "red";
    var inactiveNeighborhoods = ["presidio", "golden-gate-park", "lincoln-park", // "hunters-point",
    "tenderloin"];
    iconArr.forEach(function (icon) {
      allSlides.forEach(function (slide) {
        if (icon.dataset.name == slide.neighborhood) {
          // a matched neighborhood and slide
          var domain;
          var min;
          var max;
          var color;

          if (value == "single median sale price" && !inactiveNeighborhoods.includes(icon.dataset.name)) {
            min = minMedianSingle;
            max = maxMedianSingle;
            domain = slide.HJISingleMonthly.result.measurements.salePrice.median;
            color = "hsl(0, 41%, ".concat(Math.abs(scaleRange(domain, min, max) * 50 - 50), "%)");
            updateLegendGradientScale(legend, "hsl(0,41%,50%)", "hsl(0,41%,0%)", _USDFormat_js__WEBPACK_IMPORTED_MODULE_0__.USDFormatterNoDec.format(min), _USDFormat_js__WEBPACK_IMPORTED_MODULE_0__.USDFormatterNoDec.format(max)); // color = `hsl(${scaleRange(domain, min, max) * 255}, 41%, 50%)`
            // color = `hsl(0, 41%, ${Math.abs((scaleRange(domain, min, max) * 100)-100)}%)`
          } else if (value == "transit score" && !inactiveNeighborhoods.includes(icon.dataset.name)) {
            domain = slide.transitscore;
            min = 40;
            max = 100;
            color = "hsl(0, 41%, ".concat(Math.abs(scaleRange(domain, min, max) * 50 - 50), "%)");
            updateLegendGradientScale(legend, "hsl(0,41%,50%)", "hsl(0,41%,0%)", 50, 100);
          } else if (value == "walk score") {
            domain = slide.walkscore;
            min = 40;
            max = 100;
            color = "hsl(0, 41%, ".concat(Math.abs(scaleRange(domain, min, max) * 50 - 50), "%)");
            updateLegendGradientScale(legend, "hsl(0,41%,50%)", "hsl(0,41%,0%)", 40, 100); // color = `hsl(${scaleRange(domain, min, max) * 255}, 41%, 50%)`
          } else if (value == "weather") {
            domain = slide.walkscore;
            color = colorWeather(slide.weather, weatherPallette);
            updateLegendPunctuatedScale(legend, weatherPallette);
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

      if (inactiveNeighborhoods.includes(icon.dataset.name) && (value == "transit score" || value == "single median sale price")) {
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

  colorIconArr("transit score");
  var filtersArr = Array.from(document.querySelectorAll(".slider-neighborhoods__filter"));
  var value = "transit score";
  filtersArr.forEach(function (el) {
    el.addEventListener("click", function () {
      if (!el.classList.contains("slider-neighborhoods__filter--active")) {
        document.querySelector(".slider-neighborhoods__filter--active").classList.remove("slider-neighborhoods__filter--active");
        el.classList.add("slider-neighborhoods__filter--active");
      }

      value = el.dataset.filter;
      closeToolTip();
      colorIconArr(value);
    });
  }); // console.log(value);
  // * set the correct slide active on first load *

  setSlide(slidesArr[0].elem, 0);
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