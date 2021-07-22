export const caseStudies = () => {

  let currSlide = 0;

  const slider = document.querySelector('.case-studies__slider'),
        sliderLength = slider.dataset.sliderLength,
        slide = document.querySelectorAll('.case-studies__slide'),
        dot = document.querySelectorAll('.case-studies__dot'),
        prev = document.querySelector('.case-studies__prev'),
        next = document.querySelector('.case-studies__next'),
        img = document.querySelectorAll('.case-studies__image');

  const setSlide = () => {
    slide.forEach( function(slide) {
      currSlide === +slide.dataset.index ? slide.classList.add('case-studies__slide--active') : slide.classList.remove('case-studies__slide--active')
    });
    dot.forEach( function(dot) {
      currSlide === +dot.dataset.index ? dot.classList.add('case-studies__dot--active') : dot.classList.remove('case-studies__dot--active')
    });
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
