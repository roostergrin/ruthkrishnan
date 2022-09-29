import { USDFormatterNoDec, USDFormatterDec } from "./USDFormat.js";
import { mapZoom } from '../resources/map-icon'

export const sliderNeighborhoods = () => {
  mapZoom()
  
  const slides = Array.from(
      document.querySelectorAll(".slider-neighborhoods__slide")
    ),
    // contents = Array.from( document.querySelectorAll(".slider-neighborhoods__content-wrapper"))
    slideWrapper = document.querySelector(".slider-neighborhoods__track"),
    contentWrapper = Array.from(
      document.querySelectorAll(".slider-neighborhoods__content-wrapper")
    ),
    iconArr = document.querySelectorAll(
      ".map-neighborhoods__icon-neighborhood"
    ),
    tooltipContainer = document.querySelector(".map-neighborhoods__tooltip"),
    tooltipContent = document.getElementById("tooltip-content"),
    closeContainer = document.getElementById("tooltip-close"),
    nextArrow = document.getElementById("next"),
    prevArrow = document.getElementById("previous"),
    emptyState = document.getElementById("empty-state"),
    paginationIndicator = document.getElementById("pagination-indicator");
  let debounceLastTimeout = null,
    sectionActive = false;


  // * Build slide array of objects *
  const allSlides = contentWrapper.map((el, i) => ({
    name: el.dataset.name,
    neighborhood: el.dataset.neighborhood,
    elem: el,
    HJICondoMonthly: el.dataset.hjicondomonthly
      ? JSON.parse(el.dataset.hjicondomonthly)
      : false,
    HJISingleMonthly: el.dataset.hjisinglemonthly
      ? JSON.parse(el.dataset.hjisinglemonthly)
      : false,
    weather: el.dataset.weather,
    walkscore: el.dataset.walkscore,
    transitscore: el.dataset.transitscore,
    category: el.dataset.category,
  }));

  allSlides.forEach(slide => {
    slide.elem.querySelector('[id^="transit-score-"]').innerHTML = slide.transitscore
    slide.elem.querySelector('[id^="walk-score-"]').innerHTML = slide.walkscore
    // slide.elem.querySelector('[id^="weather-score-"]').innerHTML = slide.weather
    if(slide.HJICondoMonthly || slide.HJISingleMonthly){
      slide.elem.querySelector('[id^="single-median-price-display-"]').innerHTML = slide.HJISingleMonthly.result.measurements.salePrice.median ? USDFormatterNoDec.format(slide.HJISingleMonthly.result.measurements.salePrice.median) : 'no house data'
      slide.elem.querySelector('[id^="single-sq-ft-price-display-"]').innerHTML = slide.HJISingleMonthly.result.measurements.salePrice.median ? USDFormatterDec.format(slide.HJISingleMonthly.result.measurements.salePrice.median /slide.HJISingleMonthly.result.measurements.size.median) : 'no house data'
      slide.elem.querySelector('[id^="condo-median-price-display-"]').innerHTML = slide.HJICondoMonthly.result.measurements.salePrice.median ? USDFormatterNoDec.format(slide.HJICondoMonthly.result.measurements.salePrice.median) : 'no condo data'
      slide.elem.querySelector('[id^="condo-sq-ft-price-display-"]').innerHTML = slide.HJICondoMonthly.result.measurements.salePrice.median ? USDFormatterDec.format(slide.HJICondoMonthly.result.measurements.salePrice.median /slide.HJICondoMonthly.result.measurements.size.median) : 'no condo data'
    }
  })
  
  // Update content on slide 
  // run through all the slides, 
  // swap the child's inner html
  
  // * filter and index slides *
  const slidesArr = allSlides.filter(
    (slide) => slide.category === "active" || slide.category === "coming-soon"
  );
  slidesArr.forEach((slide, i) => {
    slide.position = i;
  });

  // * sets slide to currently selected *
  const setSlide = (el, pos) => {
    // slideWrapper.style.transform = `translate3d(${
    //   el.clientWidth * -pos - 16
    // }px, 0, 0)`;

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

  // * set the active content slide by adding active class *
  const setContent = (i) => {
    emptyState.style.opacity = 0
    contentWrapper.forEach((el) => {
      if (+el.dataset.index === i) {
        el.classList.add("slider-neighborhoods__content-wrapper--active")
        console.log(el)
        if(el.querySelector(".slider-neighborhoods__content-link")) {
          el.querySelector(".slider-neighborhoods__content-link").tabIndex = "0"
        }
      } else {
        el.classList.remove("slider-neighborhoods__content-wrapper--active");
        if(el.querySelector(".slider-neighborhoods__content-link")) {
          el.querySelector(".slider-neighborhoods__content-link").tabIndex = "-1"
        }
      }
    });
  };

  // * set the highlight on the neighborhood map *
  const setHighlight = (el) => {
    iconArr.forEach((icon) => {
      if (icon.dataset.name !== el.neighborhood) {
        icon.classList.add("map-neighborhoods__icon-neighborhood--deactive");
        icon.classList.remove("map-neighborhoods__icon-neighborhood--active");
      } else {
        icon.classList.add("map-neighborhoods__icon-neighborhood--active");
        icon.classList.remove("map-neighborhoods__icon-neighborhood--deactive");
      }
    });
  };

  // * set map, content, and slide when the neighborhood map icon is clicked *
  const setMapIcon = (targetEl) => {
    slidesArr.forEach((el) => {
      if (el.neighborhood === targetEl.dataset.name) {
        setSlide(el.elem, el.position);
        setContent(el.position);
        // active map icon
        targetEl.classList.add("map-neighborhoods__icon-neighborhood--active");
      }
    });
  };

  // * Add event listener to all slides *
  slidesArr.forEach((el, i) => {
    el.elem.addEventListener("click", () => {
      setHighlight(el);
      setContent(el.position);
      setSlide(el.elem, el.position);
    });
  });

  // * helper function for the neighborhood map
  const activateNeighborhoodOpacity = (el) => {
    const activeEl = allSlides.find(
      (elem) => elem.neighborhood === el.dataset.name
    );
    if (activeEl) {
      el.classList.add("map-neighborhoods__icon-neighborhood--matched");
    }
  };

  // * add event listeners and activate neighborhood map opacity *
  iconArr.forEach((el) => {
    activateNeighborhoodOpacity(el);
    el.addEventListener("click", () => {
      closeToolTip();
      setHighlight(el);
      setMapIcon(el);
    });

    // el.addEventListener("mouseenter", (event) => {
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
      setHighlight(nextSlide);
      setSlide(nextSlide.elem, nextSlide.position);
      setContent(nextSlide.position);
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
      setHighlight(prevSlide);
      setSlide(prevSlide.elem, prevSlide.position);
      setContent(prevSlide.position);
    }
  };


  nextArrow.addEventListener("click", (e) => {
    toNextSlide();
  });
  prevArrow.addEventListener("click", (e) => {
    toPrevSlide();
  });


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
    let legendTemplate = `<div id="weather-see-more" class="listings-single__features-see-more"><span id="see-more-text" class="listings-single__features-see-more-btn">show legend</span></div>
    <div id="weather-content" class="slider-neighborhoods__legend-content slider-neighborhoods__legend-content--punctuated">`;
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
    let weatherContent = document.getElementById("weather-content");
    let seeMore = document.getElementById("weather-see-more");
    let seeMoreText = document.getElementById("see-more-text");
    let active = true
    seeMore.addEventListener("click", ()=> {
      if(active) {
        seeMoreText.innerHTML = "hide legend"
        weatherContent.style.maxHeight = "500px"
        active = false
      } else {
        seeMoreText.innerHTML = "show legend"
        weatherContent.style.maxHeight = "0px"
        active = true
      }
    })
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
        (value == "transit score" || value == "single median sale price")
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

  colorIconArr("transit score");

  const filtersArr = Array.from(
    document.querySelectorAll(".slider-neighborhoods__filter")
  );

  var value = "transit score";

  filtersArr.forEach((el) => {
    el.addEventListener("click", () => {
      if (!el.classList.contains("slider-neighborhoods__filter--active")) {
        document
          .querySelector(".slider-neighborhoods__filter--active")
          .classList.remove("slider-neighborhoods__filter--active");
        el.classList.add("slider-neighborhoods__filter--active");
      }
      value = el.dataset.filter;
      closeToolTip();
      colorIconArr(value);
    });
  });
  // console.log(value);

  // * set the correct slide active on first load *
  setSlide(slidesArr[0].elem, 0);
};
