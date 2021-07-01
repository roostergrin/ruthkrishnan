export const testimonials = () => {
  if (document.querySelector('.testimonials-section')) {
    const imageSlide = document.querySelectorAll('.testimonials-section__image-slide'),
          contentSlide = document.querySelectorAll('.testimonials-section__content-slide'),
          sliderLength = document.querySelector('.testimonials-section__images-slider').dataset.imageSliderLength,
          dot = document.querySelectorAll('.testimonials-section__dot'),
          content = Array.from(document.querySelectorAll('.testimonials-section__content')),
          contentWrapper = document.querySelector('.testimonials-section__content-wrapper');
  
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
  
    setSlide();
  
    const autoSlide = setInterval(() => {
      currSlide === sliderLength - 1 ? currSlide = 0 : currSlide++
      setSlide();
    }, 7000)
  
    const goToSlide = (val) => {
      clearInterval(autoSlide)
      currSlide = val
      setSlide();
    };
  
    dot.forEach( (dot, i) => {
      dot.addEventListener('click', () => { goToSlide(i) });
    });
  }
};
