import { homeHero } from '../resources/home-hero.js'
import { sliderVideo } from '../resources/slider-video'
import { sliderModalVideo } from '../resources/slider-modal-video.js'


document.addEventListener('DOMContentLoaded', function () {
  const welcomeVideo = document.querySelector('.home-welcome__video'),
        tabletVideoContainer = document.querySelector('.home-welcome__no-modal-video-container'),
        tabletVideo = document.querySelector('.home-welcome__no-modal-video'),
        videoModal = document.querySelector('.home-welcome__video-modal'),
        playBtn = document.querySelector('.home-welcome__image-container'),
        videoThumbnail = document.querySelector('.home-welcome__thumbnail'),
        closeBtn = document.querySelector('.home-welcome__close-btn'),
        overlay = document.querySelector('.home-welcome__modal-overlay');

  let debounceLastTimeout = null,
      tabletVideoActive = false;

  homeHero();
  sliderVideo();

  // Home Welcome
  const openModal = () => {
    videoModal.classList.add('home-welcome__video-modal--open')
    setTimeout(() => {
      welcomeVideo.src = welcomeVideo.dataset.src
    }, 250)
  };

  const closeModal = () => {
    videoModal.classList.remove('home-welcome__video-modal--open')
    welcomeVideo.src = ''
  };

  const resetVideoModal = () => {
    closeModal();
    tabletCloseVideo();
    playBtn.removeEventListener('click', openModal);
    overlay.removeEventListener('click', closeModal);
    closeBtn.removeEventListener('click', closeModal);
  }

  const tabletPlayVideo = () => {
    if (!tabletVideoActive) {
      tabletVideo.src = tabletVideo.dataset.src;
      document.querySelector('.home-welcome__play-btn').classList.add('home-welcome__play-btn--hidden');
      videoThumbnail.classList.add('home-welcome__thumbnail--hidden');
      tabletVideoContainer.classList.add('home-welcome__no-modal-video-container--active');
      tabletVideoActive = true;
    }
  }

  const tabletCloseVideo = () => {
    tabletVideoActive = false;
    tabletVideo.src = '';
    playBtn.classList.remove('home-welcome__play-btn--hidden');
    videoThumbnail.classList.remove('home-welcome__thumbnail--hidden');
    tabletVideoContainer.classList.remove('home-welcome__no-modal-video-container--active');
  }

  const playVideo = () => {
    if (window.innerWidth > 880) {
      resetVideoModal();
      playBtn.addEventListener('click', openModal);
      overlay.addEventListener('click', closeModal);
      closeBtn.addEventListener('click', closeModal);
    } else {
      playBtn.addEventListener('click', tabletPlayVideo);
    }

  }

  playVideo();

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

  window.addEventListener('resize', () => {
    debounce(playVideo, null, 300);
  })

});

sliderModalVideo();
// document.addEventListener('DOMContentLoaded', function () {
//   // const playButton = document.querySelector('.talks-intro__play-btn'),
//   //       thumbnail = document.querySelector('.talks-intro__thumbnail'),
//   //       video = document.querySelector('.talks-intro__video'),
//   //       videoContainer = document.querySelector('.talks-intro__video-container');

//   //       videoContainer.addEventListener('click', () => {
//   //         video.src = video.dataset.src;
//   //         playButton.classList.add('talks-intro__play-btn--hidden');
//   //         thumbnail.classList.add('talks-intro__thumbnail--hidden');
//   //         video.classList.add('talks-intro__video--active');
//   //       })

//         // Talks Video Slider -----------------------------------------------
//   const slidesData = Array.from(document.querySelectorAll('.slider-modal-video__slide')),
//         slidesContainer = document.querySelector('.slider-modal-video__slides'),
//         prevArrow = document.querySelector('.slider-modal-video__prev'),
//         nextArrow = document.querySelector('.slider-modal-video__next'),
//         indicatorsContainer = document.querySelector('.slider-modal-video__indicators'),
//         indicators = Array.from(document.querySelectorAll('.slider-modal-video__dot')),
//         playBtns = Array.from(document.querySelectorAll('.slider-modal-video__slide-play-btn'));

//   let slidesArr = [],
//       prevSlides = [],
//       currSlides = [],
//       nextSlides = [],
//       indicatorActive = 0,
//       debounceLastTimeout = null;

//   // clear Slides Data
//   slidesContainer.innerHTML = '';

//   const createSlides = () => {
//     // create slides Array
//     slidesArr = slidesData.map((slide, i) => ({ index: i, el: slide, video: slide.dataset.video }));

//     // clone slides
//     if (slidesArr.length === 4 && window.innerWidth > 768) {
//       slidesArr.forEach((slide, i) => { slidesArr.push({ index: i + 4, el: slide.el.cloneNode(true), video: slide.video }) })
//     } else if (slidesArr.length === 2 && window.innerWidth < 769) {
//       slidesArr.forEach((slide, i) => { slidesArr.push({ index: i + 2, el: slide.el.cloneNode(true), video: slide.video }) })
//     }
//   }
//   createSlides();

//   // remove indicators
//   const showIndicators = () => {
//     if ((slidesArr.length < 4 && window.innerWidth > 768) || (slidesArr.length < 2 && window.innerWidth < 769)) {
//       indicatorsContainer.classList.add('slider-modal-video__indicators--hidden');
//       prevArrow.classList.add('slider-modal-video__prev--hidden');
//       nextArrow.classList.add('slider-modal-video__next--hidden');
//     } else {
//       indicatorsContainer.classList.remove('slider-modal-video__indicators--hidden');
//       prevArrow.classList.remove('slider-modal-video__prev--hidden');
//       nextArrow.classList.remove('slider-modal-video__next--hidden');
//     }
//   }
//   showIndicators();


//   const appendSlides = () => {
//     slidesArr.forEach((slide) => {
//       slide.el.classList.remove('slider-modal-video__slide--prev');
//       slide.el.classList.remove('slider-modal-video__slide--curr');
//       slide.el.classList.remove('slider-modal-video__slide--next');
//       slide.el.dataset.index = slide.index;
//       slidesContainer.append(slide.el);
//     })
//     slidesArr = Array.from(document.querySelectorAll('.slider-modal-video__slide'));
//   }
//   appendSlides();


//   // create slide position array
//   const createSlideArrays = () => {
//     if (window.innerWidth > 768) {
//       slidesArr.forEach((slide, i) => {
//         if (i < 3) {
//           currSlides.push(i);
//         } else if (i === slidesArr.length - 1) {
//           prevSlides.push(i);
//         } else {
//           nextSlides.push(i);
//         }
//       })
//     } else {
//       slidesArr.forEach((slide, i) => {
//         if (i < 1) {
//           currSlides.push(i);
//         } else if (i === slidesArr.length - 1) {
//           prevSlides.push(i);
//         } else {
//           nextSlides.push(i);
//         }
//       })
//     }
//   }
//   createSlideArrays();

//   // set slide classes and stylkes
//   const setSlides = () => {
//     slidesArr.forEach((slide) => {
//       if (prevSlides.includes(+slide.dataset.index)) {
//         slide.classList.remove('slider-modal-video__slide--curr')
//         slide.classList.remove('slider-modal-video__slide--next')
//         slide.classList.add('slider-modal-video__slide--prev');
//         slide.style.opacity = 0;
//         slide.style.transform = 'translateX(-150%)';
//       } else if (currSlides.includes(+slide.dataset.index)) {
//         slide.classList.remove('slider-modal-video__slide--prev')
//         slide.classList.remove('slider-modal-video__slide--next')
//         slide.classList.add('slider-modal-video__slide--curr')
//         slide.style.opacity = 1;
//         if (slidesArr.length === 2 && window.innerWidth > 768) {
//           slide.style.transform = `translateX(${100 * currSlides.indexOf(+slide.dataset.index) + 50}%)`;
//         } else if (slidesArr.length === 1 && window.innerWidth > 768) {
//           slide.style.transform = `translateX(${100 * currSlides.indexOf(+slide.dataset.index) + 100}%)`;
//         } else {
//           slide.style.transform = `translateX(${100 * currSlides.indexOf(+slide.dataset.index)}%)`;
//         }

//       } else {
//         slide.classList.remove('slider-modal-video__slide--prev')
//         slide.classList.remove('slider-modal-video__slide--curr')
//         slide.classList.add('slider-modal-video__slide--next')
//         slide.style.opacity = 0;
//         slide.style.transform = 'translateX(300%)';
//       }
//     })
//   }

//   setSlides();

//   // set slide/slide container Height
//   const setHeight = () => {
//     const slides = Array.from(document.querySelectorAll('.slider-modal-video__slide')),
//           slideHeights = slides.map(slide => slide.scrollHeight),
//           maxHeight = Math.max(...slideHeights);

//     slidesContainer.style.height = maxHeight + 'px';
//   }

//   setHeight();

//   // set indicator active
//   const setIndicator = () => {
//     indicators.forEach(dot => dot.classList.remove('slider-modal-video__dot--active'));
//     indicators[indicatorActive].classList.add('slider-modal-video__dot--active');
//   }

//   setIndicator();

//   // next slide functionality
//   const toNextSlide = () => {
//     nextSlides.push(prevSlides.pop());
//     prevSlides.unshift(currSlides.shift());
//     currSlides.push(nextSlides.shift());
//     setSlides();
//     indicatorActive < indicators.length - 1 ? indicatorActive++ : indicatorActive = 0;
//     setIndicator();
//   }

//   nextArrow.addEventListener('click', toNextSlide);

//   // next slide functionality
//   const toPrevSlide = () => {
//     nextSlides.unshift(currSlides.pop());
//     currSlides.unshift(prevSlides.shift());
//     prevSlides.push(nextSlides.pop());
//     setSlides();
//     indicatorActive > 0 ? indicatorActive-- : indicatorActive = indicators.length - 1;
//     setIndicator();
//   }

//   prevArrow.addEventListener('click', toPrevSlide);

//   // debounce function
//   const debounce = (func, args, wait, immediate) => {
//     const later = () => {
//       debounceLastTimeout = null
//       if (!immediate) {
//         func(args)
//       }
//     };

//     const callNow = immediate && !debounceLastTimeout
//     clearTimeout(debounceLastTimeout)
//     debounceLastTimeout = setTimeout(later, wait)
//     if (callNow) {
//       func(args)
//     }
//   }

//   const reset = () => {
//     slidesContainer.innerHTML = '';
//     slidesArr = [];
//     prevSlides = [];
//     currSlides = [];
//     nextSlides = [];
//     indicatorActive = 0;
//     createSlides();
//     appendSlides();
//     slidesArr.forEach(slide => slide.style = null)
//     createSlideArrays();
//     setSlides();
//     setHeight();
//     showIndicators();
//   }

//   window.addEventListener('resize', () => {
//     debounce(reset, null, 500);
//   })

//   const slideContainers = Array.from(document.querySelectorAll('.slider-modal-video__slide-container')),
//         videoModalContainer = document.querySelector('.slider-modal-video__video-modal'),
//         videoModal = document.querySelector('.slider-modal-video__video'),
//         modalOverlay = document.querySelector('.slider-modal-video__modal-overlay'),
//         modalCloseBtn = document.querySelector('.slider-modal-video__close-btn');

//   const closeModal = () => {
//     videoModalContainer.classList.remove('slider-modal-video__video-modal--open');
//     videoModal.src = '';
//   };

//   slideContainers.forEach((slide, i) => {
//     slide.addEventListener('click', () => {
//       videoModalContainer.classList.add('slider-modal-video__video-modal--open');
//       setTimeout(() => {
//         videoModal.src = slidesArr[i].dataset.video + '?title=0&byline=0&portrait&autoplay=1'
//       }, 250)
//     })
//   })

// modalCloseBtn.addEventListener('click', closeModal)
// modalOverlay.addEventListener('click', closeModal)

//   var swipedir,
//       startY,
//       distY,
//       startX,
//       distX,
//       threshold = 1,
//       allowedTime = 300,
//       elapsedTime,
//       startTime;

//   const handleSwipe = (swipedir) => {
//     if (swipedir === 'left') {
//       toNextSlide();
//     }
//     if (swipedir === 'right') {
//       toPrevSlide();
//     }
//   }

//   const sliderContainer = document.querySelector('.slider-modal-video__slides');

//   sliderContainer.addEventListener('touchstart', (e) => {
//     const touchObj = e.changedTouches[0];
//           swipedir = 'none';
//           distY = 0;
//           distX = 0;
//           startY = touchObj.pageY;
//           startX = touchObj.pageX;
//           startTime = new Date().getTime();
//   })

//   sliderContainer.addEventListener('touchmove', (e) => {
//     e.preventDefault();
//   })

//   sliderContainer.addEventListener('touchend', (e) => {
//     const touchObj = e.changedTouches[0];
//           distY = touchObj.pageY - startY;
//           distX  = touchObj.pageX - startX;
//           elapsedTime = new Date().getTime() - startTime;

//   if (elapsedTime <= allowedTime && Math.abs(distX) > threshold && Math.abs(distY) <= 100) {
//     swipedir = (distX < 0) ? 'left' : 'right';
//   }

//     handleSwipe(swipedir);
//   })

// });
