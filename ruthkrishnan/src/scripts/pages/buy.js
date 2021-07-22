import { resourcesLinks } from '../resources/resources-links'

document.addEventListener('DOMContentLoaded', function () {
  const playButton = document.querySelector('.buy-welcome__play-btn'),
        thumbnail = document.querySelector('.buy-welcome__thumbnail'),
        video = document.querySelector('.buy-welcome__video');
      
  // External Scripts
  resourcesLinks();

  video.addEventListener('loadeddata', () => {
    
  })

  playButton.addEventListener('click', () => {
    video.src = video.dataset.src;
    playButton.classList.add('buy-welcome__play-btn--hidden');
    thumbnail.classList.add('buy-welcome__thumbnail--hidden');
    video.classList.add('buy-welcome__video--active');
  })

});
