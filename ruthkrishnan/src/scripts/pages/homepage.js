import { homeHero } from '../resources/home-hero.js'

document.addEventListener('DOMContentLoaded', function () {
  const loader = document.querySelector('.page-home__loader'),
        video = document.querySelector('.home-hero__video'),
        welcomeVideo = document.querySelector('.home-welcome__video'),
        videoModal = document.querySelector('.home-welcome__video-modal'),
        playBtn = document.querySelector('.home-welcome__play-btn'),
        closeBtn = document.querySelector('.home-welcome__close-btn'),
        overlay = document.querySelector('.home-welcome__modal-overlay');

  // Hero Video
  video.addEventListener('loadeddata', () => {
    loader.classList.add('page-home__loader--loaded')
  });

  homeHero();

  // Home Welcome
  const openModal = () => {
    videoModal.classList.add('home-welcome__video-modal--open')
    setTimeout(() => {
      welcomeVideo.play()
    }, 250)
  };

  const closeModal = () => {
    videoModal.classList.remove('home-welcome__video-modal--open')
    welcomeVideo.pause()
  };

  playBtn.addEventListener('click', () => { openModal() });
  overlay.addEventListener('click', () => { closeModal() });
  closeBtn.addEventListener('click', () => { closeModal() });
});
