export const sliderNeighborhoods = () => {
  var USDFormatterNoDec = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  var USDFormatterDec = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    // These options are needed to round to whole numbers if that's what you want.
    // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  const slides = Array.from(
      document.querySelectorAll(".slider-neighborhoods__slide")
    ),
    slideWrapper = document.querySelector(".slider-neighborhoods__track"),
    contentWrapper = Array.from(
      document.querySelectorAll(".slider-neighborhoods__content-wrapper")
    ),
    contentColumn = document.querySelector(
      ".slider-neighborhoods__content-column"
    ),
    content = Array.from(
      document.querySelectorAll(".slider-neighborhoods__content")
    ),
    iconArr = document.querySelectorAll(
      ".map-neighborhoods__icon-neighborhood"
    ),
    tooltipContainer = document.querySelector(".map-neighborhoods__tooltip"),
    tooltipContent = document.getElementById("tooltip-content"),
    closeContainer = document.getElementById("tooltip-close"),
    nextArrow = document.getElementById("next"),
    prevArrow = document.getElementById("previous"),
    paginationIndicator = document.getElementById("pagination-indicator"),
    rktHotScore = document.getElementById("rkt-hot-score"),
    rktHotScoreText = document.getElementById("rkt-hot-score-text");
  const loc = window.location.pathname;
  const locArray = loc.split("/");
  const currentNeighborhood = locArray[locArray.length - 2];

  let debounceLastTimeout = null,
    sectionActive = false,
    maxTrackLength;

  // * Build slide array of objects *
  const allSlides = slides.map((el, i) => ({
    name: el.dataset.name,
    neighborhood: el.dataset.neighborhood,
    elem: el,
    HJICondoMonthly: JSON.parse(el.dataset.hjicondomonthly),
    HJISingleMonthly: JSON.parse(el.dataset.hjisinglemonthly),
    weather: el.dataset.weather,
    walkscore: el.dataset.walkscore,
    transitscore: el.dataset.transitscore,
    category: el.dataset.category,
  }));

  const slidesArr = allSlides.filter((slide) => slide.category === "active");
  slidesArr.forEach((slide, i) => {
    slide.position = i;
  });

  console.log(allSlides);
  // TODO find max length and min length and set up a table/ list of them
  maxTrackLength =
    document.querySelector(".slider-neighborhoods__slide").clientWidth *
    slidesArr.length;

  // * move slides *
  const changeSlide = (el, pos) => {
    slideWrapper.style.transform = `translate3d(${
      el.clientWidth * -pos - 16
    }px, 0, 0)`;

    slidesArr.forEach((slide) => {
      if (slide.position === pos) {
        slide.elem.classList.add("slider-neighborhoods__slide--curr");
      } else {
        slide.elem.classList.remove("slider-neighborhoods__slide--curr");
      }
    });
    paginationIndicator.style.width = `${(pos / slidesArr.length) * 100}%`;
    sectionActive ? closeToolTip() : null;
  };

  // finds the min and max of condos and single

  // initializes min and max
  let minMedianSingle =
    allSlides[1].HJISingleMonthly.result.measurements.salePrice.median;
  let maxMedianSingle =
    allSlides[0].HJISingleMonthly.result.measurements.salePrice.median;

  let minMedianCondo =
    allSlides[0].HJICondoMonthly.result.measurements.salePrice.median;
  let maxMedianCondo =
    allSlides[0].HJICondoMonthly.result.measurements.salePrice.median;

  allSlides.forEach((slide) => {
    if (slide.HJISingleMonthly.result) {
      if (slide.HJISingleMonthly.result.measurements.salePrice.median != 0) {
        if (
          slide.HJISingleMonthly.result.measurements.salePrice.median <
          minMedianSingle
        )
          minMedianSingle =
            slide.HJISingleMonthly.result.measurements.salePrice.median;
        if (
          slide.HJISingleMonthly.result.measurements.salePrice.median >
          maxMedianSingle
        )
          maxMedianSingle =
            slide.HJISingleMonthly.result.measurements.salePrice.median;
      }
    }
    if (slide.HJICondoMonthly.result) {
      if (slide.HJICondoMonthly.result.measurements.salePrice.median != 0) {
        if (
          slide.HJICondoMonthly.result.measurements.salePrice.median <
          minMedianCondo
        )
          minMedianCondo =
            slide.HJICondoMonthly.result.measurements.salePrice.median;
        if (
          slide.HJICondoMonthly.result.measurements.salePrice.median >
          maxMedianCondo
        )
          maxMedianCondo =
            slide.HJICondoMonthly.result.measurements.salePrice.median;
      }
    }
  });

  // initializes min and max
  let minHotScoreHouse = calculateHotScore(
    allSlides[1].HJISingleMonthly.result.measurements
  );
  let maxHotScoreHouse = calculateHotScore(
    allSlides[0].HJISingleMonthly.result.measurements
  );

  let minHotScoreCondo = calculateHotScore(
    allSlides[0].HJICondoMonthly.result.measurements
  );
  let maxHotScoreCondo = calculateHotScore(
    allSlides[0].HJICondoMonthly.result.measurements
  );

  function calculateHotScore(measurements) {
    if (
      measurements.salePrice.average != 0 &&
      measurements.listPrice.average != 0 &&
      measurements.daysOnMarket.median != 0
    ) {
      return (
        (measurements.salePrice.average /
        measurements.listPrice.average /
        measurements.daysOnMarket.median) * 1000
      );
    }
  }

  allSlides.forEach((slide) => {
    if (slide.HJISingleMonthly.result) {
      if (slide.HJISingleMonthly.result.count != 0) {
        if (calculateHotScore(slide.HJISingleMonthly.result.measurements) != 0) {
          if (
            calculateHotScore(slide.HJISingleMonthly.result.measurements) <
            minHotScoreHouse
          )
            minHotScoreHouse = calculateHotScore(
              slide.HJISingleMonthly.result.measurements
            );
          if (
            calculateHotScore(slide.HJISingleMonthly.result.measurements) >
            maxHotScoreHouse
          )
            maxHotScoreHouse = calculateHotScore(
              slide.HJISingleMonthly.result.measurements
            );
        }
      }
    }
    if (slide.HJISingleMonthly.result) {
      if (slide.HJICondoMonthly.result.count != 0) {
        if (calculateHotScore(slide.HJICondoMonthly.result.measurements) != 0) {
          if (
            calculateHotScore(slide.HJICondoMonthly.result.measurements) <
            minHotScoreCondo
          )
            minHotScoreCondo = calculateHotScore(
              slide.HJICondoMonthly.result.measurements
            );
          if (
            calculateHotScore(slide.HJICondoMonthly.result.measurements) >
            maxHotScoreCondo
          )
            maxHotScoreCondo = calculateHotScore(
              slide.HJICondoMonthly.result.measurements
            );
        }
      }
    }
  });

  console.log(minHotScoreHouse);
  console.log(maxHotScoreHouse);
  console.log(minHotScoreCondo);
  console.log(maxHotScoreCondo);
  const minHotScore =
    minHotScoreCondo < minHotScoreHouse ? minHotScoreCondo : minHotScoreHouse;
  const maxHotScore =
    maxHotScoreCondo > maxHotScoreHouse ? maxHotScoreCondo : maxHotScoreHouse;
  console.log(minHotScore, maxHotScore);
  // normalize data to 0-1 range
  function scaleRange(x, min, max) {
    // console.log((x - min) / (max - min))
    return (x - min) / (max - min);
  }

  const weatherPallette = [
    "#365060",
    "#196C55",
    "#447211",
    "#8954BE",
    "#8D3C8E",
    "#6C190D",
  ];

  const weatherValueArr = [
    "foggy with heavy winds",
    "with some fog and light winds",
    "a mixture of foggy and clear days, light winds",
    "with some fog and light winds",
    "clear skies and heavy winds",
    "clear skies and light winds",
  ];
  const weatherValueArrPivot = ["cold", "cool to moderate", "moderate to hot"];

  const weatherValues = [
    {
      temperature: "cold:",
      weatherGroup: [
        { fogWind: "foggy with heavy winds", color: "#365060" },
        { fogWind: "with some fog and light winds", color: "#196C55" },
      ],
    },
    {
      temperature: "cool to moderate:",
      weatherGroup: [
        { fogWind: "some foggy and clear days, light winds", color: "#447211" },
        { fogWind: "with some fog and light winds", color: "#8954BE" },
      ],
    },
    {
      temperature: "moderate to hot:",
      weatherGroup: [
        { fogWind: "clear skies and heavy winds", color: "#8D3C8E" },
        { fogWind: "clear skies and light winds", color: "#6C190D" },
      ],
    },
  ];
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
    legend.innerHTML = `<div class="slider-neighborhoods__legend-content">
    <div style="background:linear-gradient(90deg, ${startColor} 0%, ${endColor} 100%" class="slider-neighborhoods__legend-box">
    </div>
    <div class="slider-neighborhoods__legend-text-container">
    <p class="slider-neighborhoods__legend-text">${min}</p>
    <p class="slider-neighborhoods__legend-text">${max}</p>
    </div>
    </div>`;
  }

  function updateLegendPunctuatedScale(legend, palletteArr) {
    let legendTemplate = `<div class="slider-neighborhoods__legend-content slider-neighborhoods__legend-content--punctuated">`;
    weatherValues.forEach((weather, i) => {
      legendTemplate += `
      <div style="display: flex; gap: 1rem; flex-direction: column;" class="slider-neighborhoods__legend-box-container">
        <p>${weather.temperature}</p>
      <div class="slider-neighborhoods__legend-boxes-container">
        <div style="background: ${weather.weatherGroup[0].color}; min-width: 2rem; min-height: 2rem;" class="slider-neighborhoods__legend-box--filled"></div>
        <p style="padding-left: 0.5rem;" class="slider-neighborhoods__legend-text">${weather.weatherGroup[0].fogWind}</p>
      </div>
      <div class="slider-neighborhoods__legend-boxes-container">
          <div style="background: ${weather.weatherGroup[1].color}; min-width: 2rem; min-height: 2rem;" class="slider-neighborhoods__legend-box--filled"></div>
          <p style="padding-left: 0.5rem;"class="slider-neighborhoods__legend-text">${weather.weatherGroup[1].fogWind}</p>
      </div>
    </div>`;
    });
    legendTemplate += "</div>";
    legend.innerHTML = legendTemplate;
  }

  function colorIconArr(value) {
    let legend = document.getElementById("legend");
    const inactiveColor = "gray";
    const currentNeighborhood = "red";
    const inactiveNeighborhoods = [
      "presidio",
      "golden-gate-park",
      "lincoln-park",
      // "hunters-point",
      "tenderloin",
    ];
    iconArr.forEach((icon) => {
      allSlides.forEach((slide) => {
        if (icon.dataset.name == slide.neighborhood) {
          // a matched neighborhood and slide
          let domain;
          let min;
          let max;
          let color;
          if (
            value == "single median sale price" &&
            !inactiveNeighborhoods.includes(icon.dataset.name)
          ) {
            min = minMedianSingle;
            max = maxMedianSingle;
            domain =
              slide.HJISingleMonthly.result.measurements.salePrice.median;
            color = `hsl(0, 41%, ${Math.abs(
              scaleRange(domain, min, max) * 50 - 50
            )}%)`;
            updateLegendGradientScale(
              legend,
              "hsl(0,41%,50%)",
              "hsl(0,41%,0%)",
              USDFormatterNoDec.format(min),
              USDFormatterNoDec.format(max)
            );
            // color = `hsl(${scaleRange(domain, min, max) * 255}, 41%, 50%)`
            // color = `hsl(0, 41%, ${Math.abs((scaleRange(domain, min, max) * 100)-100)}%)`
          } else if (
            value == "transit score" &&
            !inactiveNeighborhoods.includes(icon.dataset.name)
          ) {
            domain = slide.transitscore;
            min = 40;
            max = 100;
            color = `hsl(0, 41%, ${Math.abs(
              scaleRange(domain, min, max) * 50 - 50
            )}%)`;
            updateLegendGradientScale(
              legend,
              "hsl(0,41%,50%)",
              "hsl(0,41%,0%)",
              50,
              100
            );
          } else if (value == "walk score") {
            domain = slide.walkscore;
            min = 40;
            max = 100;
            color = `hsl(0, 41%, ${Math.abs(
              scaleRange(domain, min, max) * 50 - 50
            )}%)`;
            updateLegendGradientScale(
              legend,
              "hsl(0,41%,50%)",
              "hsl(0,41%,0%)",
              40,
              100
            );
            // color = `hsl(${scaleRange(domain, min, max) * 255}, 41%, 50%)`
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
          }
          // Active neighborhoods with data
          else {
            styleIcon(icon, color);
          }
        }
      });

      if (
        inactiveNeighborhoods.includes(icon.dataset.name) &&
        value == "transit score"
      ) {
        // an inactive neighborhood
        styleIcon(icon, inactiveColor, true);
      }
    });

    function styleIcon(icon, backgroundColor, disablePointerEvents = false) {
      // gets the background and filters all text svgs
      const iconBackgrounds = Array.from(icon.children).filter(
        (HTMLObjectElement) => HTMLObjectElement.localName != "text"
      );
      // loops through the background svgs
      iconBackgrounds.forEach((iconBackground) => {
        // fills polygons
        iconBackground.style.fill = backgroundColor;
        // fills paths inside the g tag
        Array.from(iconBackground.children).forEach((path) => {
          path.style.fill = backgroundColor;
          if (disablePointerEvents) {
            path.style.pointerEvents = "none";
          }
        });
      });
    }
  }

  // call transit score
  colorIconArr("transit score");

  const filtersArr = Array.from(
    document.querySelectorAll(".slider-neighborhoods__filter")
  );

  var value = 'transit score'

  filtersArr.forEach((el) => {
    el.addEventListener("click", () => {
      if (!el.classList.contains("slider-neighborhoods__filter--active")) {
        document
          .querySelector(".slider-neighborhoods__filter--active")
          .classList.remove("slider-neighborhoods__filter--active");
        el.classList.add("slider-neighborhoods__filter--active");
      }
      value = el.dataset.filter;
      closeToolTip()
      colorIconArr(value);
    });
    el.addEventListener("keyup", () => {
      if (!el.classList.contains("slider-neighborhoods__filter--active")) {
        document
          .querySelector(".slider-neighborhoods__filter--active")
          .classList.remove("slider-neighborhoods__filter--active");
        el.classList.add("slider-neighborhoods__filter--active");
      }
      value = el.dataset.filter;
      closeToolTip()
      colorIconArr(value);
    });
  });
  console.log(value)

  // * set the correct slide active on first load *
  changeSlide(slidesArr[0].elem, 0);

  // * set height of column to be the height of largest content *
  const setContentHeight = () => {
    const currSlide = document.querySelector(
        ".slider-neighborhoods__content-wrapper--active"
      ).children[0],
      contentContainer = document.querySelector(
        ".slider-neighborhoods__content-container"
      );

    contentContainer.style.height = `${currSlide.scrollHeight + 18}px`;
  };

  // * change the active content slide by adding active class *
  const changeContent = (i) => {
    contentWrapper.forEach((el) => {
      +el.dataset.index === i
        ? el.classList.add("slider-neighborhoods__content-wrapper--active")
        : el.classList.remove("slider-neighborhoods__content-wrapper--active");
      // not sure if this is working.
    });
    setContentHeight();
  };

  // * set the correct content active on first load *
  changeContent(0);

  const highlight = (el) => {
    iconArr.forEach((icon) => {
      if (icon.dataset.name !== el.neighborhood) {
        icon.classList.add("map-neighborhoods__icon-neighborhood--deactive");
      } else {
        icon.classList.remove("map-neighborhoods__icon-neighborhood--deactive");
      }
    });
  };

  // * Add event listener to all slides *
  slidesArr.forEach((el, i) => {
    el.elem.addEventListener("click", () => {
      highlight(el);
      changeSlide(el.elem, el.position);
      changeContent(el.position);
    });
  });

  // * change content and slide when neigborhood in map clicked *
  const mapSelectNeighborhood = (targetEl) => {
    const slider = document.querySelector(".slider-neighborhoods__slider"),
      contentContainer = document.querySelector(
        ".slider-neighborhoods__content-container"
      );

    iconArr.forEach((icon) =>
      icon.classList.contains("map-neighborhoods__icon-neighborhood--active")
        ? icon.classList.remove("map-neighborhoods__icon-neighborhood--active")
        : null
    );

    const activeElem = allSlides.find(
      (el) => el.neighborhood === targetEl.dataset.name
    );

    if (
      activeElem.category === "active" &&
      activeElem.neighborhood !== currentNeighborhood
    ) {
      slidesArr.forEach((el) => {
        if (el.neighborhood === targetEl.dataset.name) {
          changeSlide(el.elem, el.position);
          changeContent(el.position);
          targetEl.classList.add(
            "map-neighborhoods__icon-neighborhood--active"
          );
        }
      });
    } else {
      contentContainer.style.height = `0px`;
      allSlides.forEach((el) =>
        el.elem.classList.remove("slider-neighborhoods__slide--curr")
      );
    }
  };

  const closeToolTip = () => {
    if (sectionActive) {
      tooltipContainer.style.opacity = 0;
      tooltipContainer.style.pointerEvents = "auto";
      sectionActive.classList.add(
        "map-neighborhoods__icon-neighborhood--matched"
      );
      sectionActive = false;
    }
  };

  const openTooltip = (event, el) => {
    const targetEl = allSlides.find(
      (elem) => elem.neighborhood === el.dataset.name
    );

    let mapContent = "";

    if (!sectionActive) {
      // add tooltip information
      mapContent += `<div class='map-neighborhoods__tooltip-title'>${targetEl.name}</div>`;

      if (targetEl.mapinfo) {
        if (targetEl.mapinfo.information) {
          targetEl.mapinfo.information.forEach((info) => {
            mapContent += `<div class='map-neighborhoods__tooltip-info'>${info.text}</div>`;
          });
        }
      }

      // Create our number formatter.

      if (targetEl.HJICondoMonthly) {
        if (targetEl.HJICondoMonthly.result.measurements) {
          // console.log(targetEl.HJISingleMonthly.result);
          // console.log(targetEl.HJICondoMonthly.result);
          if (
            targetEl.HJISingleMonthly.result.measurements.salePrice.median != 0
          ) {
            mapContent += `<div class='map-neighborhoods__tooltip-info'>House Median Price: ${USDFormatterNoDec.format(
              targetEl.HJISingleMonthly.result.measurements.salePrice.median
            )}<br> Median $/SqFt: ${USDFormatterDec.format(
              targetEl.HJISingleMonthly.result.measurements.salePrice.median /
                targetEl.HJISingleMonthly.result.measurements.size.median
            )}/sf</div>`;
          }
          if (
            targetEl.HJICondoMonthly.result.measurements.salePrice.median != 0
          )
            mapContent += `<div class='map-neighborhoods__tooltip-info'>2BR/2BA Condo Median Price: ${USDFormatterNoDec.format(
              targetEl.HJICondoMonthly.result.measurements.salePrice.median
            )}<br> Median $/SqFt: ${USDFormatterDec.format(
              targetEl.HJICondoMonthly.result.measurements.salePrice.median /
                targetEl.HJICondoMonthly.result.measurements.size.median
            )}/sf</div>`;
          mapContent +=
            "<p style='font-size:0.75em;'>(click on neighborhood to learn more below)<p>";
        }
      }
      // append tooltip information
      tooltipContent.innerHTML = mapContent;

      // show tooltip info window
      tooltipContainer.style.opacity = 1;
      tooltipContainer.style.pointerEvents = "no";

      // keep info window on screen (no overflow)
      if (event.clientY - 110 < tooltipContainer.clientHeight + 32) {
        tooltipContainer.style.top = `${event.pageY}px`;
      } else {
        tooltipContainer.style.top = `${
          event.pageY - tooltipContainer.clientHeight - 5
        }px`;
      }

      if (window.innerWidth < 601) {
        tooltipContainer.style.left = "50%";
        tooltipContainer.style.transform = `translateX(-50%)`;
      } else if (event.clientX < tooltipContainer.clientWidth / 2 + 32) {
        tooltipContainer.style.left = `${event.pageX + 16}px`;
      } else if (
        window.innerWidth - event.pageX <
        tooltipContainer.clientWidth / 2 + 32
      ) {
        tooltipContainer.style.left = `${
          event.pageX - tooltipContainer.clientWidth
        }px`;
      } else {
        tooltipContainer.style.left = `${
          event.pageX - tooltipContainer.clientWidth / 2
        }px`;
      }
      iconArr.forEach((icon) => {
        if (icon.dataset.name !== el.dataset.name) {
          icon.classList.add("map-neighborhoods__icon-neighborhood--deactive");
        } else {
          icon.classList.remove(
            "map-neighborhoods__icon-neighborhood--deactive"
          );
          icon.classList.remove(
            "map-neighborhoods__icon-neighborhood--matched"
          );
        }
      });

      sectionActive = el;
    }
  };

  // close tooltip
  closeContainer.addEventListener("click", () => {
    closeToolTip();
  });

  // * add event listener to all map neighborhoods *
  iconArr.forEach((el) => {
    const activeEl = allSlides.find(
      (elem) => elem.neighborhood === el.dataset.name
    );

    if (activeEl) {
      el.classList.add("map-neighborhoods__icon-neighborhood--matched");
    }

    el.addEventListener("click", (event) => {
      mapSelectNeighborhood(el);
      closeToolTip();
      openTooltip(event, el);
    });

    el.addEventListener("mouseenter", (event) => {
      if (value === 'single median sale price')  {
        closeToolTip();
        openTooltip(event, el);
        tooltipContainer.style.pointerEvents = "none";
        closeContainer.style.display = "none";
      } else {
        tooltipContainer.style.pointerEvents = "auto";
        closeContainer.style.display = "block";
      }
    });
  });

  // debounce function
  const debounce = (func, args, wait, immediate) => {
    const later = () => {
      debounceLastTimeout = null;
      if (!immediate) {
        func(args);
      }
    };

    const callNow = immediate && !debounceLastTimeout;
    clearTimeout(debounceLastTimeout);
    debounceLastTimeout = setTimeout(later, wait);
    if (callNow) {
      func(args);
    }
  };

  // resets the slide transform
  const reset = () => {
    const currElem = document.querySelector(
        ".slider-neighborhoods__slide--curr"
      ),
      currSlide = slidesArr.find((el) => el.name === currElem.dataset.name);

    changeSlide(currSlide.elem, currSlide.position);

    closeToolTip();

    setContentHeight();
  };

  // watch screen resize to reset slide transform
  window.addEventListener("resize", () => {
    debounce(reset, null, 500);
  });

  // go to the next slide
  const toNextSlide = () => {
    const currElem = document.querySelector(
        ".slider-neighborhoods__slide--curr"
      ),
      currSlide = slidesArr.find((el) => el.name === currElem.dataset.name),
      nextSlide = slidesArr.find(
        (el) => el.position === currSlide.position + 1
      );

    if (nextSlide) {
      highlight(nextSlide);
      changeSlide(nextSlide.elem, nextSlide.position);
      changeContent(nextSlide.position);
    }
  };

  // go to the previous slide
  const toPrevSlide = () => {
    const currElem = document.querySelector(
        ".slider-neighborhoods__slide--curr"
      ),
      currSlide = slidesArr.find((el) => el.name === currElem.dataset.name),
      prevSlide = slidesArr.find(
        (el) => el.position === currSlide.position - 1
      );

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

  const handleSwipe = (swipedir) => {
    if (swipedir === "left") {
      // debounce(toNextSlide, null, 500);
      toNextSlide();
    }
    if (swipedir === "right") {
      // debounce(toPrevSlide, null, 500);
      toPrevSlide();
    }
  };

  const sliderContainer = document.getElementById("slider-container");

  nextArrow.addEventListener("click", (e) => {
    toNextSlide();
  });
  prevArrow.addEventListener("click", (e) => {
    toPrevSlide();
  });

  sliderContainer.addEventListener("touchstart", (e) => {
    const touchObj = e.changedTouches[0];
    swipedir = "none";
    distY = 0;
    distX = 0;
    startY = touchObj.pageY;
    startX = touchObj.pageX;
    startTime = new Date().getTime();
  });

  sliderContainer.addEventListener("touchmove", (e) => {
    e.preventDefault();
  });

  sliderContainer.addEventListener("touchend", (e) => {
    const touchObj = e.changedTouches[0];
    distY = touchObj.pageY - startY;
    distX = touchObj.pageX - startX;
    elapsedTime = new Date().getTime() - startTime;

    if (
      elapsedTime <= allowedTime &&
      Math.abs(distX) > threshold &&
      Math.abs(distY) <= 100
    ) {
      swipedir = distX < 0 ? "left" : "right";
    }

    handleSwipe(swipedir);
  });
};
