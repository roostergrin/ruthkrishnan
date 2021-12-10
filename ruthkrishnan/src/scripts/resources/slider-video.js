export const sliderVideo = () => {
  console.log("sliderV"); 

  let currSlide = 0,
      paginationContent;

  const slider = document.querySelector('.slider-video__slider'),
        sliderLength = slider.dataset.sliderLength,
        slide = document.querySelectorAll('.slider-video__slide'),
        dot = document.querySelectorAll('.slider-video__dot'),
        numpagination = document.querySelector('.slider-video__numpagination'),
        prev = document.querySelector('.slider-video__prev'),
        next = document.querySelector('.slider-video__next'),
        img = document.querySelectorAll('.slider-video__image');

    const setSlide = () => {
      slide.forEach( function(slide) {
        currSlide === +slide.dataset.index ? slide.classList.add('slider-video__slide--active') : slide.classList.remove('slider-video__slide--active')
      });
      if (numpagination) {
        paginationContent = `${currSlide + 1} / ${+numpagination.dataset.slides}`
        numpagination.innerHTML = paginationContent
      } else {
        dot.forEach( function(dot) {
          currSlide === +dot.dataset.index ? dot.classList.add('slider-video__dot--active') : dot.classList.remove('slider-video__dot--active')
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
