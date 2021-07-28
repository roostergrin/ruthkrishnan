import { homeHero } from '../resources/home-hero.js'

document.addEventListener('DOMContentLoaded', function () {
  const welcomeVideo = document.querySelector('.home-welcome__video'),
        tabletVideoContainer = document.querySelector('.home-welcome__no-modal-video-container'),
        tabletVideo = document.querySelector('.home-welcome__no-modal-video'),
        videoModal = document.querySelector('.home-welcome__video-modal'),
        playBtn = document.querySelector('.home-welcome__play-btn'),
        videoThumbnail = document.querySelector('.home-welcome__thumbnail'),
        closeBtn = document.querySelector('.home-welcome__close-btn'),
        overlay = document.querySelector('.home-welcome__modal-overlay'),
        loader = document.querySelector('.page-home__loader');

  let debounceLastTimeout = null;
        
  setTimeout(() => {
    loader.classList.add('page-home__loader--loaded')
  }, 500)

  // Home Welcome
  const openModal = () => {
    videoModal.classList.add('home-welcome__video-modal--open')
    setTimeout(() => {
      welcomeVideo.src = welcomeVideo.dataset.src
    }, 250)
  };
  
  const closeModal = () => {
    videoModal.classList.remove('home-welcome__video-modal--open')
    welcomeVideo.src = ''
  };

  const resetVideoModal = () => {
    closeModal();
    tabletCloseVideo();
    playBtn.removeEventListener('click', openModal);
    overlay.removeEventListener('click', closeModal);
    closeBtn.removeEventListener('click', closeModal);
  }

  const tabletPlayVideo = () => {
    tabletVideo.src = tabletVideo.dataset.src;
    playBtn.classList.add('home-welcome__play-btn--hidden');
    videoThumbnail.classList.add('home-welcome__thumbnail--hidden');
    tabletVideoContainer.classList.add('home-welcome__no-modal-video-container--active');
  }

  const tabletCloseVideo = () => {
    tabletVideo.src = '';
    playBtn.classList.remove('home-welcome__play-btn--hidden');
    videoThumbnail.classList.remove('home-welcome__thumbnail--hidden');
    tabletVideoContainer.classList.remove('home-welcome__no-modal-video-container--active');
  }
  
  const playVideo = () => {
    resetVideoModal();

    if (window.innerWidth > 880) {
      playBtn.addEventListener('click', openModal);
      overlay.addEventListener('click', closeModal);
      closeBtn.addEventListener('click', closeModal);
    } else {
      playBtn.addEventListener('click', tabletPlayVideo);
    }

  }

  playVideo();

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
    debounce(playVideo, null, 300);
  })

});
