document.addEventListener('DOMContentLoaded', function () {

  let debounceLastTimeout = null;

  // Set Color Box height
  const setBgHeight = () => {
    const section = document.querySelector('.careers-who'),
          colorbox = document.querySelector('.careers-who__color-box'),
          title = document.querySelector('.careers-who__title'),
          image = document.querySelector('.careers-who__image-container');
    
    
    if (window.innerWidth > 880) {
      colorbox.style.height = `${section.offsetHeight - title.offsetHeight}px`
    } else {
      colorbox.style.height = `${section.offsetHeight - (image.offsetHeight * 0.75)}px`
    }
  }

  setBgHeight();

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
    debounce(setBgHeight, null, 300);
  })

  // Play Video ------------------------------------------------------------------------

  const videoSlides = Array.from(document.querySelectorAll('.careers-video__video-slide')),
        prevBtn = document.querySelector('.careers-video__nav-prev'),
        nextBtn = document.querySelector('.careers-video__nav-next');

  let currSlide = 1

  console.log(videoSlides[0].dataset.slideindex)

  const setSlideActive = () => {
    videoSlides.forEach((slide, i) => {
      if (+slide.dataset.slideindex === currSlide) {
        slide.classList.add('careers-video__video-slide--active')
      } else {
        slide.classList.remove('careers-video__video-slide--active')
      }
    })
  }

  setSlideActive()

  const handleSlideChange = (target) => {
    if (target === 'prev') {
      currSlide !== 1 ? currSlide-- : currSlide = videoSlides.length;
    } else if (target === 'next') {
      currSlide !== videoSlides.length ? currSlide++ : currSlide = 1;
    } else if (typeof target === 'number') {
      currSlide = target;
    }
    setSlideActive();
  }

  prevBtn.addEventListener('click', () => {
    console.log('prev')
    handleSlideChange('prev');
  })

  nextBtn.addEventListener('click', () => {
    console.log('next')
    handleSlideChange('next');
  })

  // const videoContainer = document.querySelector('.careers-video__video-container')
  //       thumbnail = document.querySelector('.careers-video__thumbnail'),
  //       video = document.querySelector('.careers-video__video'),
  //       playBtn = document.querySelector('.careers-video__play-btn');

  // const playVideo = () => {
  //   thumbnail.classList.add('careers-video__thumbnail--hidden');
  //   playBtn.classList.add('careers-video__play-btn--hidden');
  //   video.src = video.dataset.src;
  // }

  // thumbnail.addEventListener('click', playVideo)
  // playBtn.addEventListener('click', playVideo)

});
