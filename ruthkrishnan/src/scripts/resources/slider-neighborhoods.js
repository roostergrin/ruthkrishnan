export const sliderNeighborhoods = () => {
  const slides = Array.from(document.querySelectorAll('.slider-neighborhoods__slide')),
        slideWrapper = document.querySelector('.slider-neighborhoods__track'),
        contentWrapper = Array.from(document.querySelectorAll('.slider-neighborhoods__content-wrapper')),
        contentColumn = document.querySelector('.slider-neighborhoods__content-column'),
        content = Array.from(document.querySelectorAll('.slider-neighborhoods__content')),
        maxHeight = Math.max(...content.map(el => el.clientHeight));
  
  let debounceLastTimeout = null;

  // * Build slide array of objects *
  const slidesArr = slides.map((el, i) => ({ name: el.dataset.name, position: i, neighborhood: el.dataset.neighborhood, elem: el, mapinfo: JSON.parse(el.dataset.mapinfo) }))
  
  // * move slides *
  const changeSlide = (el, pos) => {
    
    slideWrapper.style.transform = `translate3d(${(el.clientWidth * -pos) - 16}px, 0, 0)`;

    slidesArr.forEach((slide) => {
      if (slide.position === pos) {
        slide.elem.classList.add('slider-neighborhoods__slide--curr');
      } else {
        slide.elem.classList.remove('slider-neighborhoods__slide--curr');
      }
    })
  };
  // * set the correct slide active on first load *
  changeSlide(slidesArr[0].elem, 0);

  // * set height of column to be the height of largest content *
  contentColumn.style.height = `${maxHeight / 16}rem`;

  // * change the active content slide by adding active class *
  const changeContent = (i) => {
    contentWrapper.forEach((el) => {
      +el.dataset.index === i ? el.classList.add('slider-neighborhoods__content-wrapper--active') : el.classList.remove('slider-neighborhoods__content-wrapper--active')
    });
  }
  // * set the correct content active on first load *
  changeContent(0);

  // * Add event listener to all slides *
  slidesArr.forEach((el, i) => { 
    el.elem.addEventListener('click', () => { 
      changeSlide(el.elem, el.position);
      changeContent(el.position);
    });
  }); 
  
  // * change content and slide when neigborhood in map clicked *
  const mapSelectNeighborhood = (targetEl) => {
    slidesArr.forEach((el) => {
      if (el.neighborhood === targetEl.id) {
        changeSlide(el.elem, el.position);
        changeContent(el.position);
      }
    })
  }

  const openTooltip = (event, el) => {
    const targetEl = slidesArr.find(elem => elem.neighborhood === el.id),
          tooltipContainer = document.querySelector('.map-neighborhoods__tooltip'),
          tooltipContent = document.getElementById('tooltip-content'),
          closeContainer = document.getElementById('tooltip-close');

    let mapContent = '';

    // add tooltip information
    mapContent += `<div class='map-neighborhoods__tooltip-title'>${targetEl.name}</div>`;

    if (targetEl.mapinfo) {
      if (targetEl.mapinfo.information) {
        targetEl.mapinfo.information.forEach((info) => {
          mapContent += `<div class='map-neighborhoods__tooltip-info'>${info.text}</div>`;
        })
      }
    }
    // append tooltip information
    tooltipContent.innerHTML = mapContent;

    // show tooltip info window
    tooltipContainer.style.opacity = 1;

    // keep info window on screen (no overflow)
    if (event.clientY < tooltipContainer.clientHeight + 32) {
      tooltipContainer.style.top = `${event.pageY}px`;
    } else {
      tooltipContainer.style.top = `${event.pageY - tooltipContainer.clientHeight - 5}px`;
    }

    if (event.clientX < (tooltipContainer.clientWidth / 2) + 32) {
      tooltipContainer.style.left = `${event.pageX + 16}px`;
    } else if (window.innerWidth - event.pageX < (tooltipContainer.clientWidth / 2) + 32) {
      tooltipContainer.style.left = `${event.pageX - (tooltipContainer.clientWidth)}px`;
    } else {
      tooltipContainer.style.left = `${event.pageX - (tooltipContainer.clientWidth / 2)}px`;
    }

    // close tooltip
    closeContainer.addEventListener('click', () => {
      tooltipContainer.style.opacity = 0;
    })
  }


  // * add event listener to all map neighborhoods *
  document.querySelectorAll('.map-neighborhoods__icon-neighborhood').forEach(el => el.addEventListener('click', (event) => {
    mapSelectNeighborhood(el);
    openTooltip(event, el);
  }))

  // debounce function
  const debounce = (func, args, wait, immediate) => {
    const later = () => {
      debounceLastTimeout = null
      if (!immediate) {
        func(args)
      }
    };
  
    const callNow = immediate && !debounceLastTimeout
    clearTimeout(debounceLastTimeout)
    debounceLastTimeout = setTimeout(later, wait)
    if (callNow) {
      func(args)
    }
  }
  
  // resets the slide transform
  const resetSlide = () => {
    const currElem = document.querySelector('.slider-neighborhoods__slide--curr'),
          currSlide = slidesArr.find(el => el.name === currElem.dataset.name);
  
    changeSlide(currSlide.elem, currSlide.position);
  }

  // watch screen resize to reset slide transform
  window.addEventListener('resize', () => {
    debounce(resetSlide, null, 500);
  })

  // go to the next slide
  const toNextSlide = () => {
    const currElem = document.querySelector('.slider-neighborhoods__slide--curr'),
          currSlide = slidesArr.find(el => el.name === currElem.dataset.name),
          nextSlide = slidesArr.find(el => el.position === currSlide.position + 1);

    if (nextSlide) {
      changeSlide(nextSlide.elem, nextSlide.position);
      changeContent(nextSlide.position);
    }
  }

  // go to the previous slide
  const toPrevSlide = () => {
    const currElem = document.querySelector('.slider-neighborhoods__slide--curr'),
          currSlide = slidesArr.find(el => el.name === currElem.dataset.name),
          prevSlide = slidesArr.find(el => el.position === currSlide.position - 1);

    if (prevSlide) {
      changeSlide(prevSlide.elem, prevSlide.position);
      changeContent(prevSlide.position);
    }
  }

  var swipedir,
      startX,
      distX,
      threshold = 1, 
      elapsedTime,
      startTime;
  
  const handleSwipe = (swipedir) => {
    if (swipedir === 'left') {
      // debounce(toNextSlide, null, 500);
      toNextSlide();
    }
    if (swipedir === 'right') {
      // debounce(toPrevSlide, null, 500);
      toPrevSlide();
    }
  }

  const sliderContainer = document.getElementById('slider-container');

  sliderContainer.addEventListener('touchstart', (e) => {
    const touchObj = e.changedTouches[0];
    swipedir = 'none';
    startX = touchObj.pageX;
    startTime = new Date().getTime();
  })
  
  sliderContainer.addEventListener('touchend', (e) => {
    const touchObj = e.changedTouches[0];
    distX  = touchObj.pageX - startX;
    elapsedTime = new Date().getTimeDF - startTime;

    if (Math.abs(distX) >= threshold) {
      swipedir = (distX < 0) ? 'left' : 'right';
    }

    handleSwipe(swipedir);
  })

}