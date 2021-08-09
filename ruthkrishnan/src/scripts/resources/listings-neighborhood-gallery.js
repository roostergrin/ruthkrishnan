export const listingsNeighborhhodGallery = () => {

  if (document.querySelector('.listings-neighborhood__photo-gallery')) {

    let currSlide = 0,
        paginationContent;
  
    const slider = document.querySelector('.listings-neighborhood__photo-gallery-slider'),
          sliderLength = slider.dataset.sliderLength,
          slide = document.querySelectorAll('.listings-neighborhood__photo-gallery-slide'),
          dot = document.querySelectorAll('.listings-neighborhood__photo-gallery-dot'),
        numpagination = document.querySelector('.listings-neighborhood__numpagination'),
          prev = document.querySelector('.listings-neighborhood__photo-gallery-icon--prev'),
          next = document.querySelector('.listings-neighborhood__photo-gallery-icon--next'),
          img = document.querySelectorAll('.listings-neighborhood__photo-gallery-image');

    const setSlide = () => {
      slide.forEach( function(slide) {
        currSlide === +slide.dataset.index ? slide.classList.add('listings-neighborhood__photo-gallery-slide--active') : slide.classList.remove('listings-neighborhood__photo-gallery-slide--active')
      });
      if (numpagination) {
        paginationContent = `${currSlide + 1} / ${+numpagination.dataset.slides}`
        numpagination.innerHTML = paginationContent
      } else {
        dot.forEach( function(dot) {
          currSlide === +dot.dataset.index ? dot.classList.add('listings-neighborhood__photo-gallery-dot--active') : dot.classList.remove('listings-neighborhood__photo-gallery-dot--active')
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
  }

};
