import { setMap } from '../resources/gmaps'
import { photoGallery } from '../resources/photo-gallery'
import { formNewDev } from '../resources/form-new-dev'

document.addEventListener('DOMContentLoaded', function () {
  const playButton = Array.from(document.querySelectorAll('.new-developments-single-video__play-btn')),
        videoContainer = Array.from(document.querySelectorAll('.new-developments-single-video__video-container')),
        thumbnail = Array.from(document.querySelectorAll('.new-developments-single-video__thumbnail')),
        video = Array.from(document.querySelectorAll('.new-developments-single-video__video'));

  setMap();
  photoGallery();
  formNewDev();

  video.forEach((vid) => {
    vid.addEventListener('loadeddata', () => {
    })
  })

  videoContainer.forEach((vid, i) => {
    vid.addEventListener('click', () => {
      video[i].src = video[i].dataset.src;
      playButton[i].classList.add('new-developments-single-video__play-btn--hidden');
      thumbnail[i].classList.add('new-developments-single-video__thumbnail--hidden');
      video[i].classList.add('new-developments-single-video__video--active');
    })

  })

  // videoContainer.addEventListener('click', () => {
  //   video.src = video.dataset.src;
  //   playButton.classList.add('new-developments-single-video__play-btn--hidden');
  //   thumbnail.classList.add('new-developments-single-video__thumbnail--hidden');
  //   video.classList.add('new-developments-single-video__video--active');
  // })


});
