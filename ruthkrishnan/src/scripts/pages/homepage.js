import { homeHero } from '../resources/home-hero.js'

document.addEventListener('DOMContentLoaded', function () {
  const loader = document.querySelector('.page-home__loader'),
        video = document.querySelector('.home-hero__video');

  video.addEventListener('loadeddata', () => {
    loader.classList.add('page-home__loader--loaded')
  });
  homeHero();
});
