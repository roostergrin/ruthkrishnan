import { resourcesLinks } from '../resources/resources-links'
import { beforeAfter } from '../resources/slider-before-after'
import { caseStudies } from '../resources/slider-case-studies'

document.addEventListener('DOMContentLoaded', function () {
  const playButton = document.querySelector('.sell-video__play-btn'),
        videoContainer = document.querySelector('.sell-video__video-container'),
        thumbnail = document.querySelector('.sell-video__thumbnail'),
        video = document.querySelector('.sell-video__video');
      
  // External Scripts
  resourcesLinks();
  beforeAfter();
  caseStudies();

  video.addEventListener('loadeddata', () => {
    
  })

  videoContainer.addEventListener('click', () => {
    video.src = video.dataset.src;
    playButton.classList.add('sell-video__play-btn--hidden');
    thumbnail.classList.add('sell-video__thumbnail--hidden');
    video.classList.add('sell-video__video--active');
  })

});
