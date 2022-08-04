/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/resources/neighborhood-charts.js":
/*!******************************************************!*\
  !*** ./src/scripts/resources/neighborhood-charts.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "neighborhoodCharts": () => (/* binding */ neighborhoodCharts)
/* harmony export */ });
var neighborhoodCharts = function neighborhoodCharts() {
  var data = Array.from(document.querySelectorAll('.single-neighborhoods-content__data')); // const condos = JSON.parse()

  var condo = JSON.parse(data[0].dataset.neighborhoodhjicondo);
  var single = JSON.parse(data[0].dataset.neighborhoodhjisingle);

  function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var year = a.getFullYear();
    var month = a.getMonth();
    var quarter;

    if (month === 11) {
      quarter = "Q1";
    } else if (month === 2) {
      quarter = "Q2";
    } else if (month === 5) {
      quarter = "Q3";
    } else {
      quarter = "Q4";
    }

    var time = year + ' ' + quarter;
    return time;
  }

  function getIntersection(listA, listB) {
    var intersection = listA.filter(function (element) {
      return listB.includes(element);
    });
    return intersection;
  }

  var singleLabels = [];
  var singleAvg = [];
  var singleMed = [];
  var singleLow = [];
  var singleHi = [];
  var singleSq = [];
  var singleList = [];
  var singleData = single.result.grouping.groups;
  singleData.forEach(function (item) {
    //console.log("Single: ")
    var quarter = timeConverter(item.value);
    singleLabels.push(quarter); //console.log(quarter);
    //console.log("Avg Sales",item.measurements.salePrice.average)

    singleAvg.push(item.measurements.salePrice.average); //console.log("Med Sales",item.measurements.salePrice.median)

    singleMed.push(item.measurements.salePrice.median); //console.log("Low Sales",item.measurements.salePrice.low)

    singleLow.push(item.measurements.salePrice.low); //console.log("High Sales",item.measurements.salePrice.high)

    singleHi.push(item.measurements.salePrice.high); //console.log("Sq Sales",item.measurements.listPricePerSqFt.median)

    singleSq.push(item.measurements.listPricePerSqFt.median); //console.log("List 2 Sales",item.measurements.salePrice.average)

    var listsale = parseInt(item.measurements.listPrice.average) / parseInt(item.measurements.salePrice.average);
    singleList.push(listsale.toFixed(3));
  });
  var condoLabels = [];
  var condoAvg = [];
  var condoMed = [];
  var condoLow = [];
  var condoHi = [];
  var condoSq = [];
  var condoList = [];
  var condoData = condo.result.grouping.groups;
  condoData.forEach(function (item) {
    //console.log("Condos: ")
    var quarter = timeConverter(item.value);
    condoLabels.push(quarter); //console.log(quarter);
    //console.log("Avg Sales",item.measurements.salePrice.average)

    condoAvg.push(item.measurements.salePrice.average); //console.log("Med Sales",item.measurements.salePrice.median)

    condoMed.push(item.measurements.salePrice.median); //console.log("Low Sales",item.measurements.salePrice.low)

    condoLow.push(item.measurements.salePrice.low); //console.log("High Sales",item.measurements.salePrice.high)

    condoHi.push(item.measurements.salePrice.high); //console.log("Sq Sales",item.measurements.listPricePerSqFt.median)

    condoSq.push(item.measurements.listPricePerSqFt.median); //console.log("List 2 Sales",item.measurements.salePrice.average)

    var listsale = parseInt(item.measurements.listPrice.average) / parseInt(item.measurements.salePrice.average);
    condoList.push(listsale.toFixed(3));
  });
  var labels = getIntersection(singleLabels, condoLabels);
  var _draw = Chart.controllers.line.prototype.draw;
  Chart.controllers.line = Chart.controllers.line.extend({
    draw: function draw() {
      _draw.apply(this, arguments);

      var ctx = this.chart.chart.ctx;
      var _stroke = ctx.stroke;

      ctx.stroke = function () {
        ctx.save();
        ctx.shadowColor = '#E56590';
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 4;

        _stroke.apply(this, arguments);

        ctx.restore();
      };
    }
  });
  Chart.pluginService.register({
    beforeDraw: function beforeDraw(chart, easing) {
      if (chart.config.options.chartArea && chart.config.options.chartArea.backgroundColor) {
        var helpers = Chart.helpers;
        var ctx = chart.chart.ctx;
        var chartArea = chart.chartArea;
        ctx.save();
        ctx.fillStyle = chart.config.options.chartArea.backgroundColor;
        ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
        ctx.restore();
      }
    }
  });
  var config = {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: "Condominiums",
        backgroundColor: "rgb(233,232,232)",
        data: condoAvg
      }, {
        label: "Single family home",
        backgroundColor: "rgb(35,35,35)",
        data: singleAvg
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            padding: 15,
            callback: function callback(value, index, values) {
              if (value == 0) {
                return undefined;
              } else if (value <= 1) {
                return value.toFixed(1);
              }

              return value;
            },
            precision: 0
          },
          gridLines: {
            lineWidth: 2,
            drawTicks: false,
            drawBorder: false
          }
        }],
        xAxes: [{
          gridLines: {
            display: false
          }
        }]
      },
      legend: {
        display: false
      },
      chartArea: {
        backgroundColor: 'white'
      }
    }
  };
  var ctx = document.getElementById("neighborhoodChart").getContext("2d");
  var barChart = new Chart(ctx, config);
  var btns = document.getElementsByClassName("single-neighborhoods-cart__button");
  var title = document.getElementById("graphTitle");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function (event) {
      var value = event.target.value;
      title.innerHTML = value;

      if (value === "Average Sales Price") {
        barChart.data.datasets[0].data = condoAvg;
        barChart.data.datasets[1].data = singleAvg;
      } else if (value === "Median Sales Price") {
        barChart.data.datasets[0].data = condoMed;
        barChart.data.datasets[1].data = singleMed;
      } else if (value === "Lowest Sales Price") {
        barChart.data.datasets[0].data = condoLow;
        barChart.data.datasets[1].data = singleLow;
      } else if (value === "Highest Sales Price") {
        barChart.data.datasets[0].data = condoHi;
        barChart.data.datasets[1].data = singleHi;
      } else if (value === "List Price per Sq Foot") {
        barChart.data.datasets[0].data = condoSq;
        barChart.data.datasets[1].data = singleSq;
      } else {
        barChart.data.datasets[0].data = condoList;
        barChart.data.datasets[1].data = singleList;
      } //console.log(barChart.data.datasets[0])
      //console.log(barChart.data.datasets[1])


      barChart.update();
    });
  }
};

/***/ }),

/***/ "./src/scripts/resources/neighborhood-data-table.js":
/*!**********************************************************!*\
  !*** ./src/scripts/resources/neighborhood-data-table.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataTable": () => (/* binding */ dataTable)
/* harmony export */ });
var dataTable = function dataTable() {
  var tableElement = document.getElementById("wrapper");
  var single = JSON.parse(tableElement.dataset.hjisingleyearly);
  console.log("hji single yearly:");
  console.log(single.result.grouping.groups); // TODO: make a JSON with the content from single

  var year = []; // single.result.grouping.groups.forEach((year) => {
  //   year.push(year.measurements.salePrice.average)
  // });
  //

  var salePriceAvg = ["Average Sale Price"];
  var salePriceMedian = ["Median Sale Price"];
  var salePriceLow = ["Lowest Sale Price"];
  var salePriceHigh = ["Highest Sale Price"];
  var daysOnMarketAverage = ["Days on Market"];
  var listPricePerSqFtAverage = ["List Price per sq ft"];
  var listPriceToSalePriceAverage = ["List Price to Sale Price"];
  var data = [salePriceAvg, salePriceMedian, salePriceLow, salePriceHigh, daysOnMarketAverage, listPricePerSqFtAverage, listPriceToSalePriceAverage];
  single.result.grouping.groups.forEach(function (year) {
    salePriceAvg.push(year.measurements.salePrice.average);
    salePriceMedian.push(year.measurements.salePrice.median);
    salePriceLow.push(year.measurements.salePrice.low);
    salePriceHigh.push(year.measurements.salePrice.high);
    daysOnMarketAverage.push(year.measurements.daysOnMarket.average);
    listPricePerSqFtAverage.push(year.measurements.listPricePerSqFt.average);
    listPriceToSalePriceAverage.push(year.measurements.listPrice.average / year.measurements.salePrice.average);
  });
  console.log(data);
  new gridjs.Grid({
    columns: ["", "2019", "2020", "2021", "2022"],
    data: data
  }).render(tableElement);
};

/***/ }),

/***/ "./src/scripts/resources/photo-gallery.js":
/*!************************************************!*\
  !*** ./src/scripts/resources/photo-gallery.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "photoGallery": () => (/* binding */ photoGallery)
/* harmony export */ });
var photoGallery = function photoGallery() {
  new gridjs.Grid({
    columns: ["Name", "Email", "Phone Number"],
    data: [["John", "john@example.com", "(353) 01 222 3333"], ["Mark", "mark@gmail.com", "(01) 22 888 4444"], ["Eoin", "eoin@gmail.com", "0097 22 654 00033"], ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"], ["Afshin", "afshin@mail.com", "(353) 22 87 8356"]]
  }).render(document.getElementById("wrapper"));
  var currSlide = 0,
      paginationContent;
  var slider = document.querySelector('.photo-gallery__slider'),
      sliderLength = slider.dataset.sliderLength,
      slide = document.querySelectorAll('.photo-gallery__slide'),
      dot = document.querySelectorAll('.photo-gallery__dot'),
      numpagination = document.querySelector('.photo-gallery__numpagination'),
      prev = document.querySelector('.photo-gallery__prev'),
      next = document.querySelector('.photo-gallery__next'),
      img = document.querySelectorAll('.photo-gallery__image');

  var setSlide = function setSlide() {
    slide.forEach(function (slide) {
      currSlide === +slide.dataset.index ? slide.classList.add('photo-gallery__slide--active') : slide.classList.remove('photo-gallery__slide--active');
    });

    if (numpagination) {
      paginationContent = "".concat(currSlide + 1, " / ").concat(+numpagination.dataset.slides);
      numpagination.innerHTML = paginationContent;
    } else {
      dot.forEach(function (dot) {
        currSlide === +dot.dataset.index ? dot.classList.add('photo-gallery__dot--active') : dot.classList.remove('photo-gallery__dot--active');
      });
    }
  };

  setSlide();

  var changeSlide = function changeSlide(str) {
    if (str === 'prev') {
      currSlide === 0 ? currSlide = sliderLength - 1 : currSlide--;
      setSlide();
    }

    ;

    if (str === 'next') {
      currSlide === sliderLength - 1 ? currSlide = 0 : currSlide++;
      setSlide();
    }

    ;
  };

  var goToSlide = function goToSlide(val) {
    currSlide = val;
    setSlide();
  };

  prev.addEventListener('click', function () {
    changeSlide('prev');
  });
  next.addEventListener('click', function () {
    changeSlide('next');
  });
  dot.forEach(function (dot, i) {
    dot.addEventListener('click', function () {
      goToSlide(i);
    });
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
/*!***************************************************!*\
  !*** ./src/scripts/pages/single-neighborhoods.js ***!
  \***************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_neighborhood_data_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resources/neighborhood-data-table */ "./src/scripts/resources/neighborhood-data-table.js");
/* harmony import */ var _resources_photo_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/photo-gallery */ "./src/scripts/resources/photo-gallery.js");
/* harmony import */ var _resources_neighborhood_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resources/neighborhood-charts */ "./src/scripts/resources/neighborhood-charts.js");



document.addEventListener('DOMContentLoaded', function () {
  // Imported Scripts ------------------------
  // Data Table Functionality
  (0,_resources_neighborhood_data_table__WEBPACK_IMPORTED_MODULE_0__.dataTable)(); // Chart Functionality 

  (0,_resources_neighborhood_charts__WEBPACK_IMPORTED_MODULE_2__.neighborhoodCharts)(); // Photo Gallery Functionality

  (0,_resources_photo_gallery__WEBPACK_IMPORTED_MODULE_1__.photoGallery)(); // END Imported Scripts -------------------

  var playButton = document.querySelector('.single-neighborhoods-video__play-btn'),
      thumbnail = document.querySelector('.single-neighborhoods-video__thumbnail'),
      video = document.querySelector('.single-neighborhoods-video__video'),
      videoContainer = document.querySelector('.single-neighborhoods-video__video-container');
  videoContainer.addEventListener('click', function () {
    video.src = video.dataset.src;
    playButton.classList.add('single-neighborhoods-video__play-btn--hidden');
    thumbnail.classList.add('single-neighborhoods-video__thumbnail--hidden');
    video.classList.add('single-neighborhoods-video__video--active');
  });
});
})();

/******/ })()
;