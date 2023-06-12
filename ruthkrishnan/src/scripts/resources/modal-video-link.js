export const modalVideoLink = () => {

  const welcomeVideoArray = document.querySelectorAll('.modal-video-link__video'),
        videoModalArray = document.querySelectorAll('.modal-video-link__video-modal'),
        playBtnArray = document.querySelectorAll('.modal-video-link__video-tour'),
        closeBtnArray = document.querySelectorAll('.modal-video-link__close-btn'),
        overlayArray = document.querySelectorAll('.modal-video-link__modal-overlay');

  let debounceLastTimeout = null;

  const buildMap = (keys, values) => {
    const map = new Map();
    for(let i = 0; i < keys.length; i++){
       map.set(keys[i].dataset.post, values[i]);
    };
    return map;
 };

 const videoBtnArray = buildMap(playBtnArray, welcomeVideoArray);
 const modalArray = buildMap(playBtnArray, videoModalArray);

  const openModal = (event) => {
    modalArray.get(event.srcElement.dataset.post).classList.add('modal-video-link__video-modal--open')
    videoBtnArray.get(event.srcElement.dataset.post).src = videoBtnArray.get(event.srcElement.dataset.post).dataset.src
  };

  const closeModal = (event) => {
    modalArray.get(event.srcElement.dataset.post).classList.remove('modal-video-link__video-modal--open')
    videoBtnArray.get(event.srcElement.dataset.post).src = '';
  };

  const resetVideoModal = (playBtn, closeBtn, overlay) => {
    playBtn.removeEventListener('click', openModal);
    overlay.removeEventListener('click', closeModal);
    closeBtn.removeEventListener('click', closeModal);
  }

  const playVideo = (playBtn, closeBtn, overlay) => {
      resetVideoModal(playBtn, closeBtn, overlay);
      playBtn.addEventListener('click', openModal);
      overlay.addEventListener('click', closeModal);
      closeBtn.addEventListener('click', closeModal);
  }

  for (let i = 0; i < playBtnArray.length; i++) {
    let playID = playBtnArray[i].id,
        closeID = closeBtnArray[i].id,
        overlayID = overlayArray[i].id;
    let playBtn = document.getElementById(playID),
        closeBtn = document.getElementById(closeID),
        overlay = document.getElementById(overlayID);;
    playVideo(playBtn, closeBtn, overlay);
  }

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
