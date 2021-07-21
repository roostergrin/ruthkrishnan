export const aboutRuth = () => {

  const navElems = Array.from(document.querySelectorAll('.about-ruth__nav-link')),
        slides = Array.from(document.querySelectorAll('.about-ruth__slide')),
        slidesContainer = document.querySelector('.about-ruth__slides');

  let debounceLastTimeout = null;

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

  const setSliderHeight = () => {
    // Set slide container height
    const slideHeights = slides.map(slide => slide.scrollHeight);
    const maxHeight = Math.max(...slideHeights);

    slidesContainer.style.height = maxHeight + 'px';
  }

  // Set Data Index for nav and slides. Sets first nav/slide as active
  const initSlider = () => {
    // Set dataset.index for nav items
    navElems.forEach((nav, i) => {
      nav.dataset.index = i;
    })

    // Set dataset.index for slide items
    slides.forEach((slide, i) => {
      slide.dataset.index = i;
    })

    setSliderHeight();
  }

  initSlider(); 

  // Set Color Box height
  const setBgHeight = () => {
    const section = document.querySelector('.about-ruth'),
          title = document.querySelector('.about-ruth__title'),
          image = document.querySelector('.about-ruth__image-container'),
          background = document.querySelector('.about-ruth__color-box');
    
    if (window.innerWidth > 880) {
      background.style.height = `${section.offsetHeight - title.offsetHeight}px`
    } else {
      background.style.height = `${section.offsetHeight - (image.offsetHeight * 0.75)}px`
    }
  }

  setBgHeight();

  const setActive = (index) => {
    navElems.forEach((nav) => {
      +nav.dataset.index === index ? nav.classList.add('about-ruth__nav-link--active') : nav.classList.remove('about-ruth__nav-link--active');
    })

    slides.forEach((slide) => {
      +slide.dataset.index === index ? slide.classList.add('about-ruth__slide--active') : slide.classList.remove('about-ruth__slide--active');
    })
  }

  setActive(0);

  navElems.forEach((nav) => {
    nav.addEventListener('click', () => {
      setActive(+nav.dataset.index);
    })
  })

  const resetHeights = () => {
    setSliderHeight();
    setBgHeight();
  }

  window.addEventListener('resize', () => {
    debounce(resetHeights, null, 300);
  })

}
