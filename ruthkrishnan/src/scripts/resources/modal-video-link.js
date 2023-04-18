export const modalVideoLink = () => {


  const welcomeVideo = document.querySelector('.home-welcome__video'),
        // tabletVideoContainer = document.querySelector('.home-welcome__no-modal-video-container'),
        // tabletVideo = document.querySelector('.home-welcome__no-modal-video'),
        videoModal = document.querySelector('.home-welcome__video-modal'),
        playBtn = document.querySelector('.home-welcome__image-container'),
        videoThumbnail = document.querySelector('.home-welcome__thumbnail'),
        closeBtn = document.querySelector('.home-welcome__close-btn'),
        overlay = document.querySelector('.home-welcome__modal-overlay');

  let debounceLastTimeout = null,
      tabletVideoActive = false;

  // homeHero();

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
    // tabletCloseVideo();
    playBtn.removeEventListener('click', openModal);
    overlay.removeEventListener('click', closeModal);
    closeBtn.removeEventListener('click', closeModal);
  }

  // const tabletPlayVideo = () => {
  //   if (!tabletVideoActive) {
  //     tabletVideo.src = tabletVideo.dataset.src;
  //     document.querySelector('.home-welcome__play-btn').classList.add('home-welcome__play-btn--hidden');
  //     videoThumbnail.classList.add('home-welcome__thumbnail--hidden');
  //     // tabletVideoContainer.classList.add('home-welcome__no-modal-video-container--active');
  //     // tabletVideoActive = true;
  //   }
  // }

  // const tabletCloseVideo = () => {
  //   tabletVideoActive = false;
  //   // tabletVideo.src = '';
  //   playBtn.classList.remove('home-welcome__play-btn--hidden');
  //   videoThumbnail.classList.remove('home-welcome__thumbnail--hidden');
  //   // tabletVideoContainer.classList.remove('home-welcome__no-modal-video-container--active');
  // }

  const playVideo = () => {
    if (window.innerWidth > 880) {
      resetVideoModal();
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


};
