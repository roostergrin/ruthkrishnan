export const sliderNeighborhoods = () => {
  const slides = Array.from(document.querySelectorAll('.slider-neighborhoods__slide')),
        contentWrapper = Array.from(document.querySelectorAll('.slider-neighborhoods__content-wrapper')),
        contentColumn = document.querySelector('.slider-neighborhoods__content-column'),
        content = Array.from(document.querySelectorAll('.slider-neighborhoods__content')),
        maxHeight = Math.max(...content.map(el => el.clientHeight));

  let currContent = 0;
  
  // Build slide array of objects
  const slidesArr = slides.map((el, i) => ({ position: i, neighborhood: el.dataset.neighborhood, elem: el }))
  
  // Set/Layout slides
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
  
  // move slides (one for move left, one for move right)
  const changeSlide = (i) => {

    const mod = (n, m) => {
      return ((n % m) + m) % m
    }
    
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

  // set height of column to be the height of largest content
  contentColumn.style.height = `${maxHeight / 16}rem`;

  // change the active content slide by adding active class
  const changeContent = (i) => {
    currContent = i;
    contentWrapper.forEach((el) => {
      +el.dataset.index === i ? el.classList.add('slider-neighborhoods__content-wrapper--active') : el.classList.remove('slider-neighborhoods__content-wrapper--active')
    });
  }

  // set the correct content active on first load
  changeContent(2);

  // Add event listener to all slides
  document.querySelectorAll('.slider-neighborhoods__slide').forEach((el, i) => { 
    el.addEventListener('click', () => { 
      changeSlide(i);
      changeContent(i);
    });
  }); 
  
  // change content and slide when neigborhood in map clicked
  const mapSelectNeighborhood = (targetEl) => {
    const targetSlide = slidesArr.find(el => el.neighborhood === targetEl.id)
    changeSlide(targetSlide.position)
    changeContent(targetSlide.position)
  }

  // add event listener to all map neighborhoods
  document.querySelectorAll('.map-neighborhoods__icon-neighborhood').forEach(el => el.addEventListener('click', () => {
    mapSelectNeighborhood(el);
  }))

}