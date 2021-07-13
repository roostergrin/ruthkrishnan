import { listingsHero } from '../resources/listings-hero'

document.addEventListener('DOMContentLoaded', function () {
  const playBtn = document.querySelector('.listings-single__play-btn'),
        modalCloseBtn = document.querySelector('.listings-single__modal-close'),
        videoModal = document.querySelector('.listings-single__modal-tour'),
        modalOverlay = document.querySelector('.listings-single__modal-overlay'),
        iframeVideo = document.querySelector('.listings-single__modal-video');

  // Listings Hero Functionality
  listingsHero();

  const openVideoModal = () => {
    videoModal.classList.add('listings-single__modal-tour--open');
    iframeVideo.src = iframeVideo.dataset.src;
  }

  const closeVideoModal = () => {
    videoModal.classList.remove('listings-single__modal-tour--open');
    iframeVideo.src = '';
  }

  playBtn.addEventListener('click', openVideoModal);
  modalCloseBtn.addEventListener('click', closeVideoModal);
  modalOverlay.addEventListener('click', closeVideoModal);

})
