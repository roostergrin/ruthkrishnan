export const testimonials = () => {
  if (document.querySelector('.testimonials-section')) {
    const imageSlide = document.querySelectorAll('.testimonials-section__image-slide'),
          contentSlide = document.querySelectorAll('.testimonials-section__content-slide'),
          sliderLength = document.querySelector('.testimonials-section__images-slider').dataset.imageSliderLength,
          dot = document.querySelectorAll('.testimonials-section__dot'),
          content = Array.from(document.querySelectorAll('.testimonials-section__content')),
          contentWrapper = document.querySelector('.testimonials-section__content-wrapper'),
          prevArrow = document.querySelector('.testimonials-section__nav--prev'),
          nextArrow = document.querySelector('.testimonials-section__nav--next');
  
    let currSlide = 0,
        maxHeight = Math.max(...content.map(el => el.clientHeight));
  
    contentWrapper.style.height = maxHeight + 'px';
    
    window.addEventListener('resize', () => {
      maxHeight = Math.max(...content.map(el => el.clientHeight));
      contentWrapper.style.height = maxHeight + 'px';
    })
  
    const setSlide = () => {
      imageSlide.forEach( function(image) {
        currSlide === +image.dataset.imageIndex - 1 ? image.classList.add('testimonials-section__image-slide--active') : image.classList.remove('testimonials-section__image-slide--active')
      });
      contentSlide.forEach( function(content) {
        currSlide === +content.dataset.contentIndex - 1 ? content.classList.add('testimonials-section__content-slide--active') : content.classList.remove('testimonials-section__content-slide--active')
      });
      dot.forEach( function(dot) {
        currSlide === +dot.dataset.index ? dot.classList.add('photo-gallery__dot--active') : dot.classList.remove('photo-gallery__dot--active')
      });
    };

    const hideSlides = () => {
      imageSlide.forEach( function(image) {
        currSlide === +image.dataset.imageIndex - 1 ? image.setAttribute('aria-hidden', false) : image.setAttribute('aria-hidden', true)
        currSlide === +image.dataset.imageIndex - 1 ? image.setAttribute('tabindex', 0) : image.setAttribute('tabindex', -1)
      });
      contentSlide.forEach( function(content) {
        currSlide === +content.dataset.contentIndex - 1 ? content.setAttribute('aria-hidden', false) : content.setAttribute('aria-hidden', true)
        currSlide === +content.dataset.contentIndex - 1 ? content.setAttribute('tabindex', 0) : content.setAttribute('tabindex', -1)
      });
    };
  
    setSlide();
    hideSlides();
  
    // const autoSlide = setInterval(() => {
    //   currSlide === sliderLength - 1 ? currSlide = 0 : currSlide++
    //   setSlide();
    // }, 12000)
  
    const goToSlide = (val) => {
      // clearInterval(autoSlide)
      currSlide = val
      setSlide();
      hideSlides();
    };

    const toPrevSlide = () => {
      // clearInterval(autoSlide);
      currSlide === 0 ? currSlide = sliderLength - 1 : currSlide--;
      setSlide();
      hideSlides();
    }

    const toNextSlide = () => {
      // clearInterval(autoSlide);
      currSlide === sliderLength - 1 ? currSlide = 0 : currSlide++
      setSlide();
      hideSlides();
    }

    prevArrow.addEventListener('click', toPrevSlide);
    prevArrow.addEventListener('keyup', toPrevSlide);
    nextArrow.addEventListener('click', toNextSlide);
    nextArrow.addEventListener('keyup', toNextSlide);
  
    dot.forEach( (dot, i) => {
      dot.addEventListener('click', () => { goToSlide(i) });
      dot.addEventListener('keyup', () => { goToSlide(i) });
    });
  }
};
