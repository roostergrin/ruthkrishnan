export const sliderNeighborhoods = () => {
  const slides = Array.from(document.querySelectorAll('.slider-neighborhoods__slide')),
        contentWrapper = Array.from(document.querySelectorAll('.slider-neighborhoods__content-wrapper')),
        content = Array.from(document.querySelectorAll('.slider-neighborhoods__content')),
        maxHeight = Math.max(...content.map(el => el.clientHeight));

  let currContent = 0;
  
  // 0. Build new array of slide objects
  const slidesArr = slides.map((el, i) => ({ position: i, active: false, elem: el }))
  
  // 1. Set/Layout slides
  const setSlide = () => {
    slidesArr.forEach((el) => {
      el.elem.style.transform = `translate3d(${((el.elem.clientWidth * el.position) - el.elem.clientWidth) - (el.elem.clientWidth / 2)}px, 0, 0)`
      
      if ((el.elem.clientWidth * el.position) - (el.elem.clientWidth / 2) < el.elem.clientWidth * 5 && (el.elem.clientWidth * el.position) - (el.elem.clientWidth / 2) > el.elem.clientWidth * -1) {
        el.elem.classList.add('slider-neighborhoods__slide--active')
      } else {
        el.elem.classList.remove('slider-neighborhoods__slide--active')
      }

      if ((el.elem.clientWidth * el.position) - (el.elem.clientWidth / 2) === (el.elem.clientWidth * 1.5)) {
        el.elem.classList.add('slider-neighborhoods__slide--curr')
      } else {
        el.elem.classList.remove('slider-neighborhoods__slide--curr')
      }
    })
  };
  setSlide();
  
  // 2. function to move slides (one for move left, one for move right)
  const changeSlide = (i) => {

    const mod = (n, m) => {
      return ((n % m) + m) % m
    }
    
    console.log(i, 'index');
    slidesArr.forEach((el) => {
      const newTranslate = mod(((el.elem.clientWidth * (el.position + 1)) - (el.elem.clientWidth * (i - 1))), (el.elem.clientWidth * slidesArr.length))
      el.elem.style.transform = `translate3d(${(newTranslate - el.elem.clientWidth) - (el.elem.clientWidth / 2)}px, 0, 0)`

      if ((newTranslate - el.elem.clientWidth) - (el.elem.clientWidth / 2) < (el.elem.clientWidth * 5) - (el.elem.clientWidth / 2) && (newTranslate - el.elem.clientWidth) - (el.elem.clientWidth / 2) > el.elem.clientWidth * -1.5 ) {
        el.elem.classList.add('slider-neighborhoods__slide--active')
      } else {
        el.elem.classList.remove('slider-neighborhoods__slide--active')
      }

      if ((newTranslate - el.elem.clientWidth) - (el.elem.clientWidth / 2) === (el.elem.clientWidth / 2)) {
        el.elem.classList.add('slider-neighborhoods__slide--curr')
      } else {
        el.elem.classList.remove('slider-neighborhoods__slide--curr')
      }

    })
  };
  // 3. make sure we can transition the move
  // 4. z-index for non-visible slides
  // 5. set active class


  contentWrapper.map(el => el.style.height = `${maxHeight / 16}rem`);

  const changeContent = (i) => {
    currContent = i;
    contentWrapper.forEach((el) => {
      +el.dataset.index === i ? el.classList.add('slider-neighborhoods__content-wrapper--active') : el.classList.remove('slider-neighborhoods__content-wrapper--active')
    });
  }
  changeContent(2);

  // 6. Add event listener to all slides
  document.querySelectorAll('.slider-neighborhoods__slide').forEach((el, i) => { 
    el.addEventListener('click', () => { 
      changeSlide(i);
      changeContent(i);
    });
  }); 

}