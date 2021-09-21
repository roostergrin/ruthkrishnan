import { aboutRuth } from '../resources/about-ruth-krishnan'

document.addEventListener('DOMContentLoaded', function () {
  const playButton = document.querySelector('.marketing-video__play-btn'),
        videoContainer = document.querySelector('.marketing-video__video-container'),
        thumbnail = document.querySelector('.marketing-video__thumbnail'),
        video = document.querySelector('.marketing-video__video');
      
  // External Scripts
  aboutRuth();

  video.addEventListener('loadeddata', () => {
    
  })

  videoContainer.addEventListener('click', () => {
    video.src = video.dataset.src;
    playButton.classList.add('marketing-video__play-btn--hidden');
    thumbnail.classList.add('marketing-video__thumbnail--hidden');
    video.classList.add('marketing-video__video--active');
  })

});
