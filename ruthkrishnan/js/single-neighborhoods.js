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
  var saleToListPrice = ["Sale to List Price Percent"];
  var data = [salePriceAvg, salePriceMedian, salePriceLow, salePriceHigh, daysOnMarketAverage, listPricePerSqFtAverage, saleToListPrice];
  var USDFormatterNoDec = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0,
    // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 0 // (causes 2500.99 to be printed as $2,501)

  });
  var USDFormatterDec = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD' // These options are needed to round to whole numbers if that's what you want.
    // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)

  });
  single.result.grouping.groups.forEach(function (year) {
    salePriceAvg.push(USDFormatterNoDec.format(year.measurements.salePrice.average));
    salePriceMedian.push(USDFormatterNoDec.format(year.measurements.salePrice.median));
    salePriceLow.push(USDFormatterNoDec.format(year.measurements.salePrice.low));
    salePriceHigh.push(USDFormatterNoDec.format(year.measurements.salePrice.high));
    daysOnMarketAverage.push(year.measurements.daysOnMarket.average.toFixed(0));
    listPricePerSqFtAverage.push(USDFormatterDec.format(year.measurements.listPricePerSqFt.median) + '/sq.ft');
    saleToListPrice.push((year.measurements.salePrice.average / year.measurements.listPrice.average * 100).toFixed(2) + "%");
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
  var currSlide = 0,
      paginationContent;
  var slider = document.querySelector(".photo-gallery__slider"),
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

  if (slider) {
    sliderLength = slider.dataset.sliderLength;
    setSlide();
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
  var slides = Array.from(document.querySelectorAll(".slider-neighborhoods__slide")),
      slideWrapper = document.querySelector(".slider-neighborhoods__track"),
      contentWrapper = Array.from(document.querySelectorAll(".slider-neighborhoods__content-wrapper")),
      contentColumn = document.querySelector(".slider-neighborhoods__content-column"),
      content = Array.from(document.querySelectorAll(".slider-neighborhoods__content")),
      iconArr = document.querySelectorAll(".map-neighborhoods__icon-neighborhood"),
      tooltipContainer = document.querySelector(".map-neighborhoods__tooltip"),
      tooltipContent = document.getElementById("tooltip-content"),
      closeContainer = document.getElementById("tooltip-close");
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
      category: el.dataset.category
    };
  });
  console.log(allSlides);
  var slidesArr = allSlides.filter(function (slide) {
    return slide.category === "active";
  });
  slidesArr.forEach(function (slide, i) {
    slide.position = i;
  });
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
  }; // * set the correct slide active on first load *


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
    console.log(targetEl);
    var slider = document.querySelector(".slider-neighborhoods__slider"),
        contentContainer = document.querySelector(".slider-neighborhoods__content-container");
    iconArr.forEach(function (icon) {
      return icon.classList.contains("map-neighborhoods__icon-neighborhood--active") ? icon.classList.remove("map-neighborhoods__icon-neighborhood--active") : null;
    });
    var activeElem = allSlides.find(function (el) {
      return el.neighborhood === targetEl.dataset.name;
    });

    if (activeElem.category === "active") {
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


      var USDFormatterNoDec = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        // These options are needed to round to whole numbers if that's what you want.
        minimumFractionDigits: 0,
        // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        maximumFractionDigits: 0 // (causes 2500.99 to be printed as $2,501)

      });
      var USDFormatterDec = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD' // These options are needed to round to whole numbers if that's what you want.
        // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)

      });

      if (targetEl.HJICondoMonthly) {
        if (targetEl.HJICondoMonthly.result.measurements) {
          console.log(targetEl.HJISingleMonthly.result);
          console.log(targetEl.HJICondoMonthly.result);
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

  (0,_resources_slider_neighborhoods__WEBPACK_IMPORTED_MODULE_3__.sliderNeighborhoods)(); // Testimonials Functionality
  // testimonials();
  // END Imported Scripts -------------------

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