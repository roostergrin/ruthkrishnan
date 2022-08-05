export const sliderNeighborhoods = () => {
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
    closeContainer = document.getElementById("tooltip-close");

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
    category: el.dataset.category,
  }));
  console.log(allSlides)
  const slidesArr = allSlides.filter((slide) => slide.category === "active");
  slidesArr.forEach((slide, i) => {
    slide.position = i;
  });
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

    sectionActive ? closeToolTip() : null;
  };

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
    console.log(targetEl)
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

    if (activeElem.category === "active") {
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
      tooltipContainer.style.pointerEvents = "none";
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
      var USDFormatterNoDec = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',

        // These options are needed to round to whole numbers if that's what you want.
        minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });

      var USDFormatterDec = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',

        // These options are needed to round to whole numbers if that's what you want.
        // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });

      if (targetEl.HJICondoMonthly) {
        if (targetEl.HJICondoMonthly.result.measurements) {
          console.log(targetEl.HJISingleMonthly.result);
          console.log(targetEl.HJICondoMonthly.result);
          mapContent += `<div class='map-neighborhoods__tooltip-info'>House Median Price: ${USDFormatterNoDec.format(targetEl.HJISingleMonthly.result.measurements.salePrice.median)}<br> Median $/SqFt: ${USDFormatterDec.format(targetEl.HJISingleMonthly.result.measurements.listPricePerSqFt.median)}/sf</div>`;
          mapContent += `<div class='map-neighborhoods__tooltip-info'>2BR/2BA Condo Median Price: ${USDFormatterNoDec.format(targetEl.HJICondoMonthly.result.measurements.salePrice.median)}<br> Median $/SqFt: ${USDFormatterDec.format(targetEl.HJICondoMonthly.result.measurements.listPricePerSqFt.median)}/sf</div>`;
        }
      }
      // append tooltip information
      tooltipContent.innerHTML = mapContent;

      // show tooltip info window
      tooltipContainer.style.opacity = 1;
      tooltipContainer.style.pointerEvents = "auto";

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
