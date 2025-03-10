import { resourcesLinks } from '../resources/resources-links'
import { sliderVideo } from '../resources/slider-video'
import { sliderNeighborhoods } from '../resources/slider-neighborhoods'


document.addEventListener('DOMContentLoaded', function () {
  const playButton = document.querySelector('.buy-welcome__play-btn'),
        thumbnail = document.querySelector('.buy-welcome__thumbnail'),
        video = document.querySelector('.buy-welcome__video'),
        videoContainer = document.querySelector('.buy-welcome__video-container'),
        testimonialPlayButton = document.querySelector('.buy-testimonial-video__play-btn'),
        testimonialThumbnail = document.querySelector('.buy-testimonial-video__thumbnail'),
        testimonialVideo = document.querySelector('.buy-testimonial-video__video'),
        testimonialVideoContainer = document.querySelector('.buy-testimonial-video__video-container');
        

  let debounceLastTimeout = null;

  sliderNeighborhoods();
  // External Scripts
  resourcesLinks();
  sliderVideo();

  videoContainer.addEventListener('click', () => {
    video.src = video.dataset.src;
    playButton.classList.add('buy-welcome__play-btn--hidden');
    thumbnail.classList.add('buy-welcome__thumbnail--hidden');
    video.classList.add('buy-welcome__video--active');
  })

  testimonialVideoContainer.addEventListener('click', () => {
    testimonialVideo.src = testimonialVideo.dataset.src;
    testimonialPlayButton.classList.add('buy-testimonial-video__play-btn--hidden');
    testimonialThumbnail.classList.add('buy-testimonial-video__thumbnail--hidden');
    testimonialVideo.classList.add('buy-testimonial-video__video--active');
  })

  // Map InfoWindow------------------------------------------------
  const postsData = Array.from(document.querySelectorAll('.buy-neighborhood__neighborhood-post')),
        slidesArr = postsData.map((el, i) => ({ name: el.dataset.name, title: el.dataset.title, elem: el, mapinfo: JSON.parse(el.dataset.mapinfo), link: el.dataset.link, category: el.dataset.category })),
        tooltipContainer = document.querySelector('.buy-neighborhood__tooltip'),
        tooltipContent = document.getElementById('tooltip-content'),
        closeContainer = document.getElementById('tooltip-close'),
        iconArr = document.querySelectorAll('.map-neighborhoods__icon-neighborhood');
  
  let sectionActive = false;

  const closeToolTip = () => {
    if (sectionActive) {
      tooltipContainer.style.opacity = 0;
      tooltipContainer.style.pointerEvents = 'none';
      iconArr.forEach(icon => icon.classList.remove('map-neighborhoods__icon-neighborhood--deactive'))
      sectionActive.classList.add('map-neighborhoods__icon-neighborhood--matched')
      sectionActive.classList.remove('map-neighborhoods__icon-neighborhood--active')
      sectionActive = false;
    }
  }

  const openTooltip = (event, el) => {
    const targetEl = slidesArr.find(elem => elem.name === el.dataset.name);

    let mapContent = '';

    if (!sectionActive) {
      if (targetEl) {
        // add tooltip information
        mapContent += `<div class='buy-neighborhood__tooltip-title'>${targetEl.title}</div>`;
    
        if (targetEl.mapinfo) {
          if (targetEl.mapinfo.information) {
            targetEl.mapinfo.information.forEach((info) => {
              mapContent += `<div class='buy-neighborhood__tooltip-info'>${info.text}</div>`;
            })
          }
        }
        if (targetEl.category === 'active') {
          mapContent += `<a href='${targetEl.link}' class='buy-neighborhood__tooltip-link'>learn more</a>`;
        } 

        // append tooltip information
        tooltipContent.innerHTML = mapContent;
    
        // show tooltip info window
        tooltipContainer.style.opacity = 1;
        tooltipContainer.style.pointerEvents = 'auto';
    
        // keep info window on screen (no overflow)
        if (event.clientY - 110 < tooltipContainer.clientHeight + 32) {
          tooltipContainer.style.top = `${event.pageY}px`;
        } else {
          tooltipContainer.style.top = `${event.pageY - tooltipContainer.clientHeight - 5}px`;
        }
    
        if (window.innerWidth < 601) {
          tooltipContainer.style.left = '50%';
          tooltipContainer.style.transform = `translateX(-50%)`;
        } else if (event.clientX < (tooltipContainer.clientWidth / 2) + 32) {
          tooltipContainer.style.left = `${event.pageX + 16}px`;
        } else if (window.innerWidth - event.pageX < (tooltipContainer.clientWidth / 2) + 32) {
          tooltipContainer.style.left = `${event.pageX - (tooltipContainer.clientWidth)}px`;
        } else {
          tooltipContainer.style.left = `${event.pageX - (tooltipContainer.clientWidth / 2)}px`;
        }
      }

      iconArr.forEach((icon) => {
        if (icon.dataset.name !== el.dataset.name) {
          icon.classList.add('map-neighborhoods__icon-neighborhood--deactive');
        } else {
          icon.classList.remove('map-neighborhoods__icon-neighborhood--deactive');
          icon.classList.remove('map-neighborhoods__icon-neighborhood--matched');
        }
      })

      sectionActive = el;
      sectionActive.classList.add('map-neighborhoods__icon-neighborhood--active')

    }
  }


 // * add event listener to all map neighborhoods *

  iconArr.forEach((el) => {
    const activeEl = slidesArr.find(elem => elem.name === el.dataset.name);

    if (activeEl) {
      el.classList.add('map-neighborhoods__icon-neighborhood--matched')
      el.addEventListener('click', (event) => {
        openTooltip(event, el);
      })
    }


  });

  closeContainer.addEventListener('click', closeToolTip);

  // debounce function
  const debounce = (func, args, wait, immediate) => {
    const later = () => {
      debounceLastTimeout = null
      if (!immediate) {
        func(args)
      }
    };

    const callNow = immediate && !debounceLastTimeout
    clearTimeout(debounceLastTimeout)
    debounceLastTimeout = setTimeout(later, wait)
    if (callNow) {
      func(args)
    }
  }

  window.addEventListener('resize', () => {
    debounce(closeToolTip, null, 200);
  })

});
