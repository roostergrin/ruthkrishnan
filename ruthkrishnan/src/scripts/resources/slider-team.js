export const sliderTeam = () => {
  const memberInfoSlides = Array.from(document.querySelectorAll('.slider-team__member-slide')),
        imageSlides = Array.from(document.querySelectorAll('.slider-team__images-slide')),
        imagesArr = imageSlides.map((el) => ({ position: +el.dataset.index - 1, elem: el }));
  
  let debounceLastTimeout = null;

  // resize background image height
  const resizeBackgroundHeight = () => {
    const background = document.querySelector('.slider-team__background'),
    introSection = document.querySelector('.slider-team__intro'),
    imagesContainer = document.querySelector('.slider-team__images');
    
    background.style.height = `${introSection.clientHeight + (imagesContainer.clientHeight / 2)}px`
  }
  
  resizeBackgroundHeight();

   // changes the active slide
  const changeImageSlide = (pos) => {
    const slideWrapper = document.querySelector('.slider-team__images');

    slideWrapper.style.transform = `translate3d(${(imagesArr[pos].elem.clientWidth * -pos) - 16}px, 0, 0)`
    
    imagesArr.forEach((slide) => {
      if (slide.position === pos) {
        slide.elem.classList.add('slider-team__images-slide--active');
      } else {
        slide.elem.classList.remove('slider-team__images-slide--active');
      }
    })

  }

  changeImageSlide(0);

  // changes the active info slide
  const changeInfoSlide = (pos) => {
    memberInfoSlides.forEach((slide) => {
      if (+slide.dataset.index === pos + 1) {
        slide.classList.add('slider-team__member-slide--active');
      } else {
        slide.classList.remove('slider-team__member-slide--active');
      }
    })
  }

  changeInfoSlide(0);
  
  // set member info sections height to tallest element
  const setInfoHeight = () => {
    const memberInfoContainer = document.querySelector('.slider-team__members-container');

    memberInfoContainer.style.height = Math.max(...memberInfoSlides.map(slide => slide.scrollHeight)) + 'px';
  }

  setInfoHeight();

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

  // add click events to each image slide element
  imagesArr.forEach((slide) => {
    slide.elem.addEventListener('click', () => {
      changeImageSlide(slide.position);
      changeInfoSlide(slide.position);
    })
  })

  const resetImageSlide = () => {
    const currSlide = document.querySelector('.slider-team__images-slide--active');

    changeImageSlide(+currSlide.dataset.index - 1);
  }

  // window resize event listener 
  window.addEventListener('resize', () => {
    debounce(resizeBackgroundHeight, null, 500);
    debounce(setInfoHeight, null, 500);
    debounce(resetImageSlide, null, 500)
  })

    // go to the next slide
    const toNextSlide = () => {

      const currSlide = document.querySelector('.slider-team__images-slide--active'),
            nextSlide = imagesArr.find(el => el.position === +currSlide.dataset.index);
      
      console.log(currSlide)
  
      if (nextSlide) {
        changeImageSlide(nextSlide.position);
        changeInfoSlide(nextSlide.position);
      }
    }
  
    // go to the previous slide
    const toPrevSlide = () => {
      const currSlide = document.querySelector('.slider-team__images-slide--active'),
            prevSlide = imagesArr.find(el => el.position === currSlide.dataset.index - 2);
  
      if (prevSlide) {
        changeImageSlide(prevSlide.position);
        changeInfoSlide(prevSlide.position);
      }
    }

  // Swipe Functionality
  var swipedir,
      startX,
      distX,
      threshold = 1,
      elapsedTime,
      startTime;

  const handleSwipe = (swipedir) => {
    if (swipedir === 'left') {
      toNextSlide();
    }
    if (swipedir === 'right') {
      toPrevSlide();
    }
  }

  const sliderContainer = document.querySelector('.slider-team__images');

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