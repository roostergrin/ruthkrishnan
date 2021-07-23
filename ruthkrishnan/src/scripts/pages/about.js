import { sliderTeam } from '../resources/slider-team'
import { aboutRuth } from '../resources/about-ruth-krishnan'
import { aboutLogos } from '../resources/about-logos'

document.addEventListener('DOMContentLoaded', function () {
  const playButton = document.querySelector('.about-video__play-btn'),
        thumbnail = document.querySelector('.about-video__thumbnail'),
        video = document.querySelector('.about-video__video');

  // external scripts
  sliderTeam();
  aboutRuth();
  aboutLogos();

  video.addEventListener('loadeddata', () => {
    
  })

  playButton.addEventListener('click', () => {
    video.src = video.dataset.src;
    playButton.classList.add('about-video__play-btn--hidden');
    thumbnail.classList.add('about-video__thumbnail--hidden');
    video.classList.add('about-video__video--active');
  })

});
