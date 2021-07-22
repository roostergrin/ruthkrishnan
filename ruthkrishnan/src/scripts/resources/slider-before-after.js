export const beforeAfter = () => {

  let currSlide = 0;

  const slider = document.querySelector('.before-after__slider'),
        sliderLength = slider.dataset.sliderLength,
        slide = document.querySelectorAll('.before-after__slide'),
        dot = document.querySelectorAll('.before-after__dot'),
        prev = document.querySelector('.before-after__prev'),
        next = document.querySelector('.before-after__next'),
        img = document.querySelectorAll('.before-after__image');

  const setSlide = () => {
    slide.forEach( function(slide) {
      currSlide === +slide.dataset.index ? slide.classList.add('before-after__slide--active') : slide.classList.remove('before-after__slide--active')
    });
    dot.forEach( function(dot) {
      currSlide === +dot.dataset.index ? dot.classList.add('before-after__dot--active') : dot.classList.remove('before-after__dot--active')
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
