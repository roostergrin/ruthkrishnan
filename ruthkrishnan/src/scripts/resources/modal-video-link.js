export const modalVideoLink = () => {

  const welcomeVideo = document.querySelector('.modal-video-link__video'),
        videoModal = document.querySelector('.modal-video-link__video-modal'),
        playBtn = document.querySelector('.modal-video-link__video-tour'),
        closeBtn = document.querySelector('.modal-video-link__close-btn'),
        overlay = document.querySelector('.modal-video-link__modal-overlay');

  let debounceLastTimeout = null;

  const openModal = () => {
    videoModal.classList.add('modal-video-link__video-modal--open')
    setTimeout(() => {
      welcomeVideo.src = welcomeVideo.dataset.src
    }, 250)
  };

  const closeModal = () => {
    videoModal.classList.remove('modal-video-link__video-modal--open')
    welcomeVideo.src = ''
  };

  const resetVideoModal = () => {
    closeModal();
    playBtn.removeEventListener('click', openModal);
    overlay.removeEventListener('click', closeModal);
    closeBtn.removeEventListener('click', closeModal);
  }

  const playVideo = () => {
      resetVideoModal();
      playBtn.addEventListener('click', openModal);
      overlay.addEventListener('click', closeModal);
      closeBtn.addEventListener('click', closeModal);

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
