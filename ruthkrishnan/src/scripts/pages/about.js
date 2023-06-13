import { sliderTeam } from '../resources/slider-team'
import { aboutRuth } from '../resources/about-ruth-krishnan'
import { aboutLogos } from '../resources/about-logos'
import { sliderAgent } from '../resources/slider-agent';

document.addEventListener('DOMContentLoaded', function () {
  const playButtons = document.querySelectorAll('.about-video__play-btn'),
        thumbnails = document.querySelectorAll('.about-video__thumbnail'),
        videos = document.querySelectorAll('.about-video__video');

  // external scripts
  sliderTeam();
  sliderAgent();
  aboutRuth();
  aboutLogos();

  // video.addEventListener('loadeddata', () => {

  // })

  // playButton.addEventListener('click', () => {
  //   video.src = video.dataset.src;
  //   playButton.classList.add('about-video__play-btn--hidden');
  //   thumbnail.classList.add('about-video__thumbnail--hidden');
  //   video.classList.add('about-video__video--active');
  // })
  videos.forEach(function (video, index) {
    playButtons[index].addEventListener('click', function () {
      video.src = video.dataset.src;
      playButtons[index].classList.add('about-video__play-btn--hidden');
      thumbnails[index].classList.add('about-video__thumbnail--hidden');
      video.classList.add('about-video__video--active');
    });
  });
});
