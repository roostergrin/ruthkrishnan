import { listingsHero } from '../resources/listings-hero'

document.addEventListener('DOMContentLoaded', function () {
  const playBtn = document.querySelector('.listings-single__play-btn'),
        modalCloseBtn = document.querySelector('.listings-single__modal-close'),
        videoModal = document.querySelector('.listings-single__modal-tour'),
        modalOverlay = document.querySelector('.listings-single__modal-overlay'),
        iframeVideo = document.querySelector('.listings-single__modal-video'),
        featSeeMoreBtn = document.querySelector('.listings-single__features-see-more'),
        featList = document.querySelector('.listings-single__features-list'),
        featOverlay = document.querySelector('.listings-single__features-overlay');
  
  let featExpanded = false;

  // Listings Hero Functionality
  listingsHero();

  // Virtual Tour Video Modal
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

  // Features See More
  const toggleFeatures = () => {
    const featBtn = document.querySelector('.listings-single__features-see-more-btn');

    if (featExpanded) {
      featList.style.height = '425px';
      featOverlay.style.opacity = 1;
      featExpanded = false;
      setTimeout(() => {
        featBtn.innerHTML = 'see more';
      }, 250)
    } else {
      featList.style.height = featList.scrollHeight + 'px';
      featOverlay.style.opacity = 0;
      featExpanded = true;
      setTimeout(() => {
        featBtn.innerHTML = 'see less';
      }, 250)
    }
  }

  if (featList.scrollHeight < 457) {
    featList.style.height = 'auto';
    featSeeMoreBtn.style.display = 'none';
    featOverlay.style.display = 'none';
  } else {
    featSeeMoreBtn.addEventListener('click', toggleFeatures);
  }

})
