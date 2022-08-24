export const photoGalleryTwo = () => {

  let currSlide = 0,
      paginationContent;

  const slider = document.querySelector('.photo-gallery__slider--2'),
        sliderLength = slider.dataset.sliderLength,
        slide = document.querySelectorAll('.photo-gallery__slide--2'),
        dot = document.querySelectorAll('.photo-gallery__dot--2'),
        numpagination = document.querySelector('.photo-gallery__numpagination--2'),
        prev = document.querySelector('.photo-gallery__prev--2'),
        next = document.querySelector('.photo-gallery__next--2'),
        img = document.querySelectorAll('.photo-gallery__image--2');


    const setSlide = () => {
      slide.forEach( function(slide) {
        currSlide === +slide.dataset.index ? slide.classList.add('photo-gallery__slide--active--2') : slide.classList.remove('photo-gallery__slide--active--2')
      });
      if (numpagination) {
        paginationContent = `${currSlide + 1} / ${+numpagination.dataset.slides}`
        numpagination.innerHTML = paginationContent
      } else {
        dot.forEach( function(dot) {
          currSlide === +dot.dataset.index ? dot.classList.add('photo-gallery__dot--active--2') : dot.classList.remove('photo-gallery__dot--active--2')
        });
      }
    }
  
    setSlide();
  
    const changeSlide = (str) => {
      if (str === 'prev') {
        currSlide === 0 ? currSlide = sliderLength - 1 : currSlide--
        setSlide();
      };
      if (str === 'next') {
        currSlide === sliderLength - 1 ? currSlide = 0 : currSlide++
        setSlide();
      };
    };
  
    const goToSlide = (val) => {
      currSlide = val
      setSlide();
    };
  
    prev.addEventListener('click', () => { changeSlide('prev') });
    next.addEventListener('click', () => { changeSlide('next') });
    dot.forEach( (dot, i) => {
      dot.addEventListener('click', () => { goToSlide(i) });
    });

};
