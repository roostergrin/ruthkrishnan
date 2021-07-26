document.addEventListener('DOMContentLoaded', function () {
  const playButton = document.querySelector('.talks-intro__play-btn'),
        thumbnail = document.querySelector('.talks-intro__thumbnail'),
        video = document.querySelector('.talks-intro__video');
        
        playButton.addEventListener('click', () => {
          video.src = video.dataset.src;
          playButton.classList.add('talks-intro__play-btn--hidden');
          thumbnail.classList.add('talks-intro__thumbnail--hidden');
          video.classList.add('talks-intro__video--active');
        })
        
        // Talks Video Slider -----------------------------------------------
  const slidesData = Array.from(document.querySelectorAll('.talks-video-slider__slide')),
        slidesContainer = document.querySelector('.talks-video-slider__slides'),
        prevArrow = document.querySelector('.talks-video-slider__prev'),
        nextArrow = document.querySelector('.talks-video-slider__next'),
        indicatorsContainer = document.querySelector('.talks-video-slider__indicators'),
        indicators = Array.from(document.querySelectorAll('.talks-video-slider__dot')),
        playBtns = Array.from(document.querySelectorAll('.talks-video-slider__slide-play-btn'));

  let slidesArr = [],
      prevSlides = [],
      currSlides = [],
      nextSlides = [],
      indicatorActive = 0,
      debounceLastTimeout = null;

  // clear Slides Data
  slidesContainer.innerHTML = '';
  
  const createSlides = () => {
    // create slides Array
    slidesArr = slidesData.map((slide, i) => ({ index: i, el: slide }));

    // clone slides
    if (slidesArr.length === 4 && window.innerWidth > 768) {
      slidesArr.forEach((slide, i) => { slidesArr.push({ index: i + 4, el: slide.el.cloneNode(true), video: slide.video, thumbnail: slide.thumbnail, title: slide.title }) })
    } else if (slidesArr.length === 2 && window.innerWidth < 769) {
      slidesArr.forEach((slide, i) => { slidesArr.push({ index: i + 2, el: slide.el.cloneNode(true), video: slide.video, thumbnail: slide.thumbnail, title: slide.title }) })
    }
  }
  createSlides();

  // remove indicators
  const showIndicators = () => {
    if ((slidesArr.length < 4 && window.innerWidth > 768) || (slidesArr.length < 2 && window.innerWidth < 769)) {
      indicatorsContainer.classList.add('talks-video-slider__indicators--hidden');
      prevArrow.classList.add('talks-video-slider__prev--hidden');
      nextArrow.classList.add('talks-video-slider__next--hidden');
    } else {
      indicatorsContainer.classList.remove('talks-video-slider__indicators--hidden');
      prevArrow.classList.remove('talks-video-slider__prev--hidden');
      nextArrow.classList.remove('talks-video-slider__next--hidden');
    }
  }
  showIndicators();

      
  const appendSlides = () => {
    slidesArr.forEach((slide) => {
      slide.el.classList.remove('talks-video-slider__slide--prev');
      slide.el.classList.remove('talks-video-slider__slide--curr');
      slide.el.classList.remove('talks-video-slider__slide--next');
      slide.el.dataset.index = slide.index;
      slidesContainer.append(slide.el);
    })
    slidesArr = Array.from(document.querySelectorAll('.talks-video-slider__slide'));
  }
  appendSlides();


  // create slide position array
  const createSlideArrays = () => {
    if (window.innerWidth > 768) {
      slidesArr.forEach((slide, i) => {
        if (i < 3) {
          currSlides.push(i);
        } else if (i === slidesArr.length - 1) {
          prevSlides.push(i);
        } else {
          nextSlides.push(i);
        }
      })
    } else {
      slidesArr.forEach((slide, i) => {
        if (i < 1) {
          currSlides.push(i);
        } else if (i === slidesArr.length - 1) {
          prevSlides.push(i);
        } else {
          nextSlides.push(i);
        }
      }) 
    }
  }
  createSlideArrays();

  // set slide classes and stylkes
  const setSlides = () => {
    slidesArr.forEach((slide) => {
      if (prevSlides.includes(+slide.dataset.index)) {
        slide.classList.remove('talks-video-slider__slide--curr')
        slide.classList.remove('talks-video-slider__slide--next')
        slide.classList.add('talks-video-slider__slide--prev');
        slide.style.opacity = 0;
        slide.style.transform = 'translateX(-100%)';
      } else if (currSlides.includes(+slide.dataset.index)) {
        slide.classList.remove('talks-video-slider__slide--prev')
        slide.classList.remove('talks-video-slider__slide--next')
        slide.classList.add('talks-video-slider__slide--curr')
        slide.style.opacity = 1;
        slide.style.transform = `translateX(${100 * currSlides.indexOf(+slide.dataset.index)}%)`;
      } else {
        slide.classList.remove('talks-video-slider__slide--prev')
        slide.classList.remove('talks-video-slider__slide--curr')
        slide.classList.add('talks-video-slider__slide--next')
        slide.style.opacity = 0;
        slide.style.transform = 'translateX(300%)';
      }
    })
  }

  setSlides();

  // set slide/slide container Height
  const setHeight = () => {
    const slides = Array.from(document.querySelectorAll('.talks-video-slider__slide')),
          slideHeights = slides.map(slide => slide.scrollHeight),
          maxHeight = Math.max(...slideHeights);
    
    slidesContainer.style.height = maxHeight + 'px';
  }

  setHeight();

  // set indicator active
  const setIndicator = () => {
    indicators.forEach(dot => dot.classList.remove('talks-video-slider__dot--active'));
    indicators[indicatorActive].classList.add('talks-video-slider__dot--active');
  }

  setIndicator();

  // next slide functionality
  const toNextSlide = () => {
    nextSlides.push(prevSlides.pop());
    prevSlides.unshift(currSlides.shift());
    currSlides.push(nextSlides.shift());
    setSlides();
    indicatorActive < indicators.length - 1 ? indicatorActive++ : indicatorActive = 0;
    setIndicator();
  }

  nextArrow.addEventListener('click', toNextSlide);

  // next slide functionality
  const toPrevSlide = () => {
    nextSlides.unshift(currSlides.pop());
    currSlides.unshift(prevSlides.shift());
    prevSlides.push(nextSlides.pop());
    setSlides();
    indicatorActive > 0 ? indicatorActive-- : indicatorActive = indicators.length - 1;
    setIndicator();
  }

  prevArrow.addEventListener('click', toPrevSlide);

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

  const reset = () => {
    slidesContainer.innerHTML = '';
    slidesArr = [];
    prevSlides = [];
    currSlides = [];
    nextSlides = [];
    indicatorActive = 0;
    createSlides();
    appendSlides();
    slidesArr.forEach(slide => slide.style = null)
    createSlideArrays();
    setSlides();
    setHeight();
    showIndicators();
  }

  window.addEventListener('resize', () => {
    debounce(reset, null, 500);
  })

  const slideContainers = Array.from(document.querySelectorAll('.talks-video-slider__slide-container')),
        videoModalContainer = document.querySelector('.talks-video-slider__video-modal'),
        videoModal = document.querySelector('.talks-video-slider__video'),
        modalOverlay = document.querySelector('.talks-video-slider__modal-overlay'),
        modalCloseBtn = document.querySelector('.talks-video-slider__close-btn');

  const closeModal = () => {
    videoModalContainer.classList.remove('talks-video-slider__video-modal--open');
    videoModal.src = '';
  };

  slideContainers.forEach((slide, i) => {
    slide.addEventListener('click', () => {
      videoModalContainer.classList.add('talks-video-slider__video-modal--open');
      setTimeout(() => {
        videoModal.src = slidesArr[i].dataset.video + '?title=0&byline=0&portrait&autoplay=1'
      }, 250)
    })
  })

modalCloseBtn.addEventListener('click', closeModal)
modalOverlay.addEventListener('click', closeModal)


});
