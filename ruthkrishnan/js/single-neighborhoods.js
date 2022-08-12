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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var neighborhoodCharts = function neighborhoodCharts() {
  //
  //
  //
  // USING 2.5 ChartJS https://www.chartjs.org/docs/2.7.3/
  //
  //
  //
  //
  var data = Array.from(document.querySelectorAll(".single-neighborhoods-content__data"));
  var condo = JSON.parse(data[0].dataset.neighborhoodhjicondo);
  var single = JSON.parse(data[0].dataset.neighborhoodhjisingle);

  function timeConverter(UNIX_timestamp) {
    var timestampDate = new Date(UNIX_timestamp * 1000);
    var year = timestampDate.getFullYear();
    var month = timestampDate.getMonth();
    console.log(year, month);
    var quarter;

    if (month === 2) {
      quarter = "Q1";
    } else if (month === 5) {
      quarter = "Q2";
    } else if (month === 8) {
      quarter = "Q3";
    } else if (month === 11) {
      quarter = "Q4";
    }

    var yearAndQuarter = year + " " + quarter;
    return yearAndQuarter;
  }

  var singleLabels = [];
  var singleAvg = [];
  var singleMed = [];
  var singleLow = [];
  var singleHi = [];
  var singleSq = [];
  var singleSaleToListRatio = [];
  var singleData = single.result.grouping.groups;
  singleData.forEach(function (singleQuarterData) {
    //console.log("Single: ")
    var quarter = timeConverter(singleQuarterData.value);
    singleLabels.push(quarter); //console.log(quarter);
    //console.log("Avg Sales",singleQuarterData.measurements.salePrice.average)

    singleAvg.push(singleQuarterData.measurements.salePrice.average); //console.log("Med Sales",singleQuarterData.measurements.salePrice.median)

    singleMed.push(singleQuarterData.measurements.salePrice.median); //console.log("Low Sales",singleQuarterData.measurements.salePrice.low)

    singleLow.push(singleQuarterData.measurements.salePrice.low); //console.log("High Sales",singleQuarterData.measurements.salePrice.high)

    singleHi.push(singleQuarterData.measurements.salePrice.high); //console.log("Sq Sales",singleQuarterData.measurements.listPricePerSqFt.median)

    if (singleQuarterData.measurements.salePrice.median / singleQuarterData.measurements.size.median < 99999) {
      singleSq.push(singleQuarterData.measurements.salePrice.median / singleQuarterData.measurements.size.median);
    } else {
      singleSq.push(0);
    }

    singleSaleToListRatio.push(singleQuarterData.measurements.salePrice.median / singleQuarterData.measurements.listPrice.median).toFixed(3);
  });
  var condoLabels = [];
  var condoAvg = [];
  var condoMed = [];
  var condoLow = [];
  var condoHi = [];
  var condoSq = [];
  var condoSaleToListRatio = [];
  var condoData = condo.result.grouping.groups;
  condoData.forEach(function (condoQuarterData) {
    //console.log("Condos: ")
    var quarter = timeConverter(condoQuarterData.value);
    condoLabels.push(quarter); //console.log(quarter);
    //console.log("Avg Sales",condoQuarterData.measurements.salePrice.average)

    condoAvg.push(condoQuarterData.measurements.salePrice.average); //console.log("Med Sales",condoQuarterData.measurements.salePrice.median)

    condoMed.push(condoQuarterData.measurements.salePrice.median); //console.log("Low Sales",condoQuarterData.measurements.salePrice.low)

    condoLow.push(condoQuarterData.measurements.salePrice.low); //console.log("High Sales",condoQuarterData.measurements.salePrice.high)

    condoHi.push(condoQuarterData.measurements.salePrice.high); //console.log("Sq Sales",condoQuarterData.measurements.listPricePerSqFt.median)

    if (condoQuarterData.measurements.salePrice.median / condoQuarterData.measurements.size.median < 99999) {
      condoSq.push(condoQuarterData.measurements.salePrice.median / condoQuarterData.measurements.size.median);
    } else {
      condoSq.push(0);
    }

    condoSaleToListRatio.push(condoQuarterData.measurements.salePrice.median / condoQuarterData.measurements.listPrice.median).toFixed(3);
  });

  function getIntersection(listA, listB) {
    var intersection = listA.filter(function (element) {
      return listB.includes(element);
    });
    return intersection;
  }

  var labels;

  if (condoLabels.length > singleLabels.length) {
    labels = Array.from(new Set(condoLabels.concat(singleLabels)));
  } else {
    labels = Array.from(new Set(singleLabels.concat(condoLabels)));
  }

  var _draw = Chart.controllers.line.prototype.draw;
  Chart.controllers.line = Chart.controllers.line.extend({
    draw: function draw() {
      _draw.apply(this, arguments);

      var ctx = this.chart.chart.ctx;
      var _stroke = ctx.stroke;

      ctx.stroke = function () {
        ctx.save();
        ctx.shadowColor = "#E56590";
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
        var helpers = chart.helpers;
        var ctx = chart.chart.ctx;
        var chartArea = chart.chartArea;
        ctx.save();
        ctx.fillStyle = chart.config.options.chartArea.backgroundColor;
        ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
        ctx.restore();
      }
    }
  }); // USD formatter

  var USDFormatterNoDec = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0,
    // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 0 // (causes 2500.99 to be printed as $2,501)

  }); // var USDFormatterDec = new Intl.NumberFormat("en-US", {
  //   style: "currency",
  //   currency: "USD", // These options are needed to round to whole numbers if that's what you want.
  //   // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //   // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  // });
  // tooltip

  var titleTooltip = function titleTooltip(tooltipItems) {
    return "Test";
  };

  var USDYLabel = function USDYLabel(value) {
    return USDFormatterNoDec.format(value);
  };

  var USDTooltip = function USDTooltip(tooltipItem, data) {
    var label = data.datasets[tooltipItem.datasetIndex].label || "";

    if (label) {
      label += ": ";
    }

    label += USDFormatterNoDec.format(tooltipItem.yLabel);
    return label;
  };

  var config = {
    type: "bar",
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
            callback: USDYLabel,
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
        backgroundColor: "white"
      },
      responsive: true,
      tooltips: {
        callbacks: {
          label: USDTooltip
        }
      }
    }
  };

  var twoDecYLabel = function twoDecYLabel(value) {
    return Math.round(value * 100) / 100;
  };

  var twoDecTooltip = function twoDecTooltip(tooltipItem, data) {
    var label = data.datasets[tooltipItem.datasetIndex].label || "";

    if (label) {
      label += ": ";
    }

    label += Math.round(tooltipItem.yLabel * 100) / 100;
    return label;
  }; // build chart


  var ctx = document.getElementById("neighborhoodChart").getContext("2d");
  var barChart = new Chart(ctx, config); // Chart.defaults.global.defaultFontFamily = "Avenir Next";
  // Chart.defaults.global.defaultFontSize = 16
  // Chart.defaults.global.defaultFontWeight = 500

  Chart.defaults.global.defaultFontColor = "#232323"; // change charts and chart title

  var title = document.getElementById("graphTitle");
  var filtersArr = document.querySelectorAll(".single-neighborhoods-chart__filter"); // builds grid in the canvas for accessibility.

  var dataValues = {
    "Average Sales Price": [condoAvg, singleAvg],
    "Median Sales Price": [condoMed, singleMed],
    "Lowest Sales Price": [condoAvg, singleAvg],
    "Highest Sales Price": [condoHi, singleHi],
    "Sale Price per Sq Foot": [condoSq, singleSq],
    "Sale to List Price Ratio": [condoSaleToListRatio, singleSaleToListRatio]
  };
  var tableElement = document.getElementById("quarterlyTable");
  var value = "Average Sales Price";

  var tempLabels = _toConsumableArray(labels);

  var tempCondoData = dataValues[value][0].map(function (x) {
    return USDFormatterNoDec.format(x);
  });
  var tempSingleData = dataValues[value][1].map(function (x) {
    return USDFormatterNoDec.format(x);
  });
  tempLabels.unshift("values");
  tempCondoData.unshift("Condo " + value);
  tempSingleData.unshift("Single " + value);
  var accessibilityGrid = new gridjs.Grid({
    columns: tempLabels,
    data: [tempCondoData, tempSingleData]
  }).render(tableElement);

  var chartSwitch = function chartSwitch(evt) {
    var el = evt.srcElement;

    if (!el.classList.contains("single-neighborhoods-chart__filter--active")) {
      document.querySelector(".single-neighborhoods-chart__filter--active").classList.remove("single-neighborhoods-chart__filter--active");
      el.classList.add("single-neighborhoods-chart__filter--active");
    }

    var value = el.dataset.filter;
    title.innerHTML = value;
    var currentData;

    if (currentData != value) {
      currentData = value;
      barChart.data.datasets[0].data = dataValues[value][0];
      barChart.data.datasets[1].data = dataValues[value][1];

      var _tempLabels = _toConsumableArray(labels);

      var _tempCondoData = dataValues[value][0].map(function (x) {
        return USDFormatterNoDec.format(x);
      });

      var _tempSingleData = dataValues[value][1].map(function (x) {
        return USDFormatterNoDec.format(x);
      });

      _tempLabels.unshift("values");

      _tempCondoData.unshift("Condo " + value);

      _tempSingleData.unshift("Single " + value);

      accessibilityGrid.updateConfig({
        columns: _tempLabels,
        data: [_tempCondoData, _tempSingleData]
      }).forceRender(tableElement);

      if (value === "Sale to List Price Ratio") {
        _tempCondoData = dataValues[value][0].map(function (x) {
          return x.toFixed(2);
        });
        _tempSingleData = dataValues[value][1].map(function (x) {
          return x.toFixed(2);
        });

        _tempCondoData.unshift("Condo " + value);

        _tempSingleData.unshift("Single " + value);

        accessibilityGrid.updateConfig({
          columns: _tempLabels,
          data: [_tempCondoData, _tempSingleData]
        }).forceRender(tableElement);
      }

      if (value === "Sale to List Price Ratio") {
        barChart.config.options.scales.yAxes[0].ticks.beginAtZero = false;
        barChart.config.options.scales.yAxes[0].ticks.callback = twoDecYLabel;
        barChart.config.options.tooltips.callbacks.label = twoDecTooltip;
      } else {
        barChart.config.options.scales.yAxes[0].ticks.beginAtZero = true;
        barChart.config.options.scales.yAxes[0].ticks.callback = USDYLabel;
        barChart.config.options.tooltips.callbacks.label = USDTooltip;
      }

      barChart.update();
    }
  };

  filtersArr.forEach(function (el) {
    el.addEventListener("click", chartSwitch);
    el.addEventListener("keyup", chartSwitch);
  });
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
  var single = JSON.parse(tableElement.dataset.hjisingleyearly); // console.log("hji single yearly:");

  console.log("hji single yearly", single); // TODO: make a JSON with the content from single

  var year = []; // single.result.grouping.groups.forEach((year) => {
  //   year.push(year.measurements.salePrice.average)
  // });
  //

  var salePriceAvg = ["Average Sale Price"];
  var salePriceMedian = ["Median Sale Price"];
  var salePriceLow = ["Lowest Sale Price"];
  var salePriceHigh = ["Highest Sale Price"];
  var salePriceToSqFt = ["Sale Price per sq ft"];
  var saleToListPrice = ["Sale to List Price Percent"];
  var daysOnMarketMedian = ["Days on Market"];
  var competeScore = ["Compete Score?"];
  var data = [salePriceAvg, salePriceMedian, salePriceLow, salePriceHigh, salePriceToSqFt, saleToListPrice, daysOnMarketMedian, competeScore];
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
  single.result.grouping.groups.forEach(function (year) {
    salePriceAvg.push(USDFormatterNoDec.format(year.measurements.salePrice.average));
    salePriceMedian.push(USDFormatterNoDec.format(year.measurements.salePrice.median));
    salePriceLow.push(USDFormatterNoDec.format(year.measurements.salePrice.low));
    salePriceHigh.push(USDFormatterNoDec.format(year.measurements.salePrice.high));
    daysOnMarketMedian.push(year.measurements.daysOnMarket.median.toFixed(0));
    salePriceToSqFt.push(USDFormatterDec.format(year.measurements.salePrice.median / year.measurements.size.median) + "/sq.ft");
    saleToListPrice.push((year.measurements.salePrice.average / year.measurements.listPrice.average * 100).toFixed(2) + "%");
    competeScore.push((year.measurements.salePrice.average / year.measurements.listPrice.average / year.measurements.daysOnMarket.median * 2000).toFixed(3));
  });
  console.log(data);
  new gridjs.Grid({
    columns: ["dataLabel", "2019", "2020", "2021", "2022"],
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
  if (document.querySelector(".photo-gallery__slider")) {
    var currSlide = 0,
        paginationContent;
    var slider = document.querySelector(".photo-gallery__slider"),
        sliderLength = slider.dataset.sliderLength,
        slide = document.querySelectorAll(".photo-gallery__slide"),
        dot = document.querySelectorAll(".photo-gallery__dot"),
        numpagination = document.querySelector(".photo-gallery__numpagination"),
        prev = document.querySelector(".photo-gallery__prev"),
        next = document.querySelector(".photo-gallery__next"),
        img = document.querySelectorAll(".photo-gallery__image");

    var setSlide = function setSlide() {
      slide.forEach(function (slide) {
        currSlide === +slide.dataset.index ? slide.classList.add("photo-gallery__slide--active") : slide.classList.remove("photo-gallery__slide--active");
      });

      if (numpagination) {
        paginationContent = "".concat(currSlide + 1, " / ").concat(+numpagination.dataset.slides);
        numpagination.innerHTML = paginationContent;
      } else {
        dot.forEach(function (dot) {
          currSlide === +dot.dataset.index ? dot.classList.add("photo-gallery__dot--active") : dot.classList.remove("photo-gallery__dot--active");
        });
      }
    };

    setSlide();

    var changeSlide = function changeSlide(str) {
      if (str === "prev") {
        currSlide === 0 ? currSlide = sliderLength - 1 : currSlide--;
        setSlide();
      }

      if (str === "next") {
        currSlide === sliderLength - 1 ? currSlide = 0 : currSlide++;
        setSlide();
      }
    };

    var goToSlide = function goToSlide(val) {
      currSlide = val;
      setSlide();
    };

    prev.addEventListener("click", function () {
      changeSlide("prev");
    });
    next.addEventListener("click", function () {
      changeSlide("next");
    });
    dot.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        goToSlide(i);
      });
    });
  }
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
var sliderNeighborhoods = function sliderNeighborhoods() {
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
  var weatherValueArr = ["foggy with heavy winds", "with some fog and light winds", "a mixture of foggy and clear days, light winds", "with some fog and light winds", "clear skies and heavy winds", "clear skies and light winds"];
  var weatherValueArrPivot = ["cold", "cool to moderate", "moderate to hot"];
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

  function colorWeather(weather, weatherPallette, weatherValueArr) {
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
    var legendTemplate = "<div class=\"slider-neighborhoods__legend-content slider-neighborhoods__legend-content--punctuated\">";
    weatherValues.forEach(function (weather, i) {
      legendTemplate += "\n      <div style=\"display: flex; gap: 1rem; flex-direction: column;\" class=\"slider-neighborhoods__legend-box-container\">\n        <p>".concat(weather.temperature, "</p>\n      <div class=\"slider-neighborhoods__legend-boxes-container\">\n        <div style=\"background: ").concat(weather.weatherGroup[0].color, "; width: 2rem; height: 2rem;\" class=\"slider-neighborhoods__legend-box--filled\"></div>\n        <p style=\"padding-left: 0.5rem;\" class=\"slider-neighborhoods__legend-text\">").concat(weather.weatherGroup[0].fogWind, "</p>\n      </div>\n      <div class=\"slider-neighborhoods__legend-boxes-container\">\n          <div style=\"background: ").concat(weather.weatherGroup[1].color, "; width: 2rem; height: 2rem;\" class=\"slider-neighborhoods__legend-box--filled\"></div>\n          <p style=\"padding-left: 0.5rem;\"class=\"slider-neighborhoods__legend-text\">").concat(weather.weatherGroup[1].fogWind, "</p>\n      </div>\n    </div>");
    });
    legendTemplate += "</div>";
    legend.innerHTML = legendTemplate;
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
          console.log(value);

          if (value == "single median sale price" && !inactiveNeighborhoods.includes(icon.dataset.name)) {
            min = minMedianSingle;
            max = maxMedianSingle;
            domain = slide.HJISingleMonthly.result.measurements.salePrice.median;
            color = "hsl(0, 41%, ".concat(Math.abs(scaleRange(domain, min, max) * 50 - 50), "%)");
            updateLegendGradientScale(legend, "hsl(0,41%,50%)", "hsl(0,41%,0%)", USDFormatterNoDec.format(min), USDFormatterNoDec.format(max)); // color = `hsl(${scaleRange(domain, min, max) * 255}, 41%, 50%)`
            // color = `hsl(0, 41%, ${Math.abs((scaleRange(domain, min, max) * 100)-100)}%)`
          } else if (value == "walk score") {
            domain = slide.walkscore;
            min = 40;
            max = 100;
            color = "hsl(0, 41%, ".concat(Math.abs(scaleRange(domain, min, max) * 50 - 50), "%)");
            updateLegendGradientScale(legend, "hsl(0,41%,50%)", "hsl(0,41%,0%)", 40, 100); // color = `hsl(${scaleRange(domain, min, max) * 255}, 41%, 50%)`
          } else if (value == "weather") {
            console.log(value);
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

      if (inactiveNeighborhoods.includes(icon.dataset.name) && value == "single median sale price") {
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

  colorIconArr("single median sale price");
  var filtersArr = Array.from(document.querySelectorAll(".slider-neighborhoods__filter"));

  function toggle() {}

  filtersArr.forEach(function (el) {
    el.addEventListener("click", function () {
      if (!el.classList.contains("slider-neighborhoods__filter--active")) {
        document.querySelector(".slider-neighborhoods__filter--active").classList.remove("slider-neighborhoods__filter--active");
        el.classList.add("slider-neighborhoods__filter--active");
      }

      var value = el.dataset.filter;
      colorIconArr(value);
    });
    el.addEventListener("keyup", function () {
      if (!el.classList.contains("slider-neighborhoods__filter--active")) {
        document.querySelector(".slider-neighborhoods__filter--active").classList.remove("slider-neighborhoods__filter--active");
        el.classList.add("slider-neighborhoods__filter--active");
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
      +el.dataset.index === i ? el.classList.add("slider-neighborhoods__content-wrapper--active") : el.classList.remove("slider-neighborhoods__content-wrapper--active"); // not sure if this is working. 
    });
    setContentHeight();
  }; // * set the correct content active on first load *


  changeContent(0);

  var highlight = function highlight(el) {
    iconArr.forEach(function (icon) {
      if (icon.dataset.name !== el.neighborhood) {
        icon.classList.add("map-neighborhoods__icon-neighborhood--deactive");
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


      if (targetEl.HJICondoMonthly) {
        if (targetEl.HJICondoMonthly.result.measurements) {
          // console.log(targetEl.HJISingleMonthly.result);
          // console.log(targetEl.HJICondoMonthly.result);
          if (targetEl.HJISingleMonthly.result.measurements.salePrice.median != 0) {
            mapContent += "<div class='map-neighborhoods__tooltip-info'>House Median Price: ".concat(USDFormatterNoDec.format(targetEl.HJISingleMonthly.result.measurements.salePrice.median), "<br> Median $/SqFt: ").concat(USDFormatterDec.format(targetEl.HJISingleMonthly.result.measurements.salePrice.median / targetEl.HJISingleMonthly.result.measurements.size.median), "/sf</div>");
          }

          if (targetEl.HJICondoMonthly.result.measurements.salePrice.median != 0) mapContent += "<div class='map-neighborhoods__tooltip-info'>2BR/2BA Condo Median Price: ".concat(USDFormatterNoDec.format(targetEl.HJICondoMonthly.result.measurements.salePrice.median), "<br> Median $/SqFt: ").concat(USDFormatterDec.format(targetEl.HJICondoMonthly.result.measurements.salePrice.median / targetEl.HJICondoMonthly.result.measurements.size.median), "/sf</div>");
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
        contentWrapper = document.querySelector('.testimonials-section__content-wrapper'),
        prevArrow = document.querySelector('.testimonials-section__nav--prev'),
        nextArrow = document.querySelector('.testimonials-section__nav--next');
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

    var hideSlides = function hideSlides() {
      imageSlide.forEach(function (image) {
        // currSlide === +image.dataset.imageIndex - 1 ? image.setAttribute('aria-hidden', false) : image.setAttribute('aria-hidden', true)
        currSlide === +image.dataset.imageIndex - 1 ? image.setAttribute('tabindex', 0) : image.setAttribute('tabindex', -1);
      });
      contentSlide.forEach(function (content) {
        currSlide === +content.dataset.contentIndex - 1 ? content.setAttribute('aria-hidden', false) : content.setAttribute('aria-hidden', true);
        currSlide === +content.dataset.contentIndex - 1 ? content.setAttribute('tabindex', 0) : content.setAttribute('tabindex', -1);
      });
    };

    setSlide();
    hideSlides(); // const autoSlide = setInterval(() => {
    //   currSlide === sliderLength - 1 ? currSlide = 0 : currSlide++
    //   setSlide();
    // }, 12000)

    var goToSlide = function goToSlide(val) {
      // clearInterval(autoSlide)
      currSlide = val;
      setSlide();
      hideSlides();
    };

    var toPrevSlide = function toPrevSlide() {
      // clearInterval(autoSlide);
      currSlide === 0 ? currSlide = sliderLength - 1 : currSlide--;
      setSlide();
      hideSlides();
    };

    var toNextSlide = function toNextSlide() {
      // clearInterval(autoSlide);
      currSlide === sliderLength - 1 ? currSlide = 0 : currSlide++;
      setSlide();
      hideSlides();
    };

    prevArrow.addEventListener('click', toPrevSlide);
    prevArrow.addEventListener('keyup', toPrevSlide);
    nextArrow.addEventListener('click', toNextSlide);
    nextArrow.addEventListener('keyup', toNextSlide);
    dot.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        goToSlide(i);
      });
      dot.addEventListener('keyup', function () {
        goToSlide(i);
      });
    });
  }
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
/* harmony import */ var _resources_slider_neighborhoods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resources/slider-neighborhoods */ "./src/scripts/resources/slider-neighborhoods.js");
/* harmony import */ var _resources_testimonials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resources/testimonials */ "./src/scripts/resources/testimonials.js");





document.addEventListener('DOMContentLoaded', function () {
  // Imported Scripts ------------------------
  // Data Table Functionality
  (0,_resources_neighborhood_data_table__WEBPACK_IMPORTED_MODULE_0__.dataTable)(); // Chart Functionality 

  (0,_resources_neighborhood_charts__WEBPACK_IMPORTED_MODULE_2__.neighborhoodCharts)(); // Photo Gallery Functionality

  (0,_resources_photo_gallery__WEBPACK_IMPORTED_MODULE_1__.photoGallery)(); // Slider Neighborhoods Map Functionality

  (0,_resources_slider_neighborhoods__WEBPACK_IMPORTED_MODULE_3__.sliderNeighborhoods)(); // END Imported Scripts -------------------

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