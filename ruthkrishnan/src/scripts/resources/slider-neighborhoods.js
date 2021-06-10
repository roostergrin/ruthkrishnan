export const sliderNeighborhoods = () => {
  const slides = Array.from(document.querySelectorAll('.slider-neighborhoods__slide')),
        slideWrapper = document.querySelector('.slider-neighborhoods__slide-wrapper'),
        contentWrapper = Array.from(document.querySelectorAll('.slider-neighborhoods__content-wrapper')),
        contentColumn = document.querySelector('.slider-neighborhoods__content-column'),
        content = Array.from(document.querySelectorAll('.slider-neighborhoods__content')),
        maxHeight = Math.max(...content.map(el => el.clientHeight));

  // * Build slide array of objects *
  const slidesArr = slides.map((el, i) => ({ name: el.dataset.name, position: i, neighborhood: el.dataset.neighborhood, elem: el, mapinfo: JSON.parse(el.dataset.mapinfo) }))
  
  // * move slides *
  const changeSlide = (el, pos) => {
    
    slideWrapper.style.transform = `translate3d(${(el.clientWidth * -pos) - 16}px, 0, 0)`;

    slidesArr.forEach((slide) => {
      if (slide.position === pos) {
        slide.elem.classList.add('slider-neighborhoods__slide--curr');
      } else {
        slide.elem.classList.remove('slider-neighborhoods__slide--curr');
      }
    })
  };
  // * set the correct slide active on first load *
  changeSlide(slidesArr[0].elem, 0);

  // * set height of column to be the height of largest content *
  contentColumn.style.height = `${maxHeight / 16}rem`;

  // * change the active content slide by adding active class *
  const changeContent = (i) => {
    contentWrapper.forEach((el) => {
      +el.dataset.index === i ? el.classList.add('slider-neighborhoods__content-wrapper--active') : el.classList.remove('slider-neighborhoods__content-wrapper--active')
    });
  }
  // * set the correct content active on first load *
  changeContent(0);

  // * Add event listener to all slides *
  slidesArr.forEach((el, i) => { 
    el.elem.addEventListener('click', () => { 
      changeSlide(el.elem, el.position);
      changeContent(el.position);
    });
  }); 
  
  // * change content and slide when neigborhood in map clicked *
  const mapSelectNeighborhood = (targetEl) => {
    slidesArr.forEach((el) => {
      if (el.neighborhood === targetEl.id) {
        changeSlide(el.elem, el.position);
        changeContent(el.position);
      }
    })
  }

  const openTooltip = (event, el) => {
    const targetEl = slidesArr.find(elem => elem.neighborhood === el.id),
          tooltipContainer = document.querySelector('.map-neighborhoods__tooltip'),
          tooltipContent = document.getElementById('tooltip-content');

    let mapContent = '';

    mapContent += `<h5>${targetEl.name}</h5>`;
    if (targetEl.mapinfo) {
      if (targetEl.mapinfo.house_median_price) {
        mapContent += `<p>House Median Price: ${targetEl.mapinfo.house_median_price}</p>`
      }
      if (targetEl.mapinfo.condo_median_price) {
        mapContent += `<p>Condo Median Price: ${targetEl.mapinfo.condo_median_price}</p>`
      }
    }
    tooltipContent.innerHTML = mapContent;

    tooltipContainer.style.opacity = 1;
    tooltipContainer.style.top = `${event.pageY - tooltipContainer.clientHeight - 5}px`;
    tooltipContainer.style.left = `${event.pageX - (tooltipContainer.clientWidth / 2)}px`;
  }


  // * add event listener to all map neighborhoods *
  document.querySelectorAll('.map-neighborhoods__icon-neighborhood').forEach(el => el.addEventListener('click', (event) => {
    mapSelectNeighborhood(el);
    openTooltip(event, el);
  }))

}