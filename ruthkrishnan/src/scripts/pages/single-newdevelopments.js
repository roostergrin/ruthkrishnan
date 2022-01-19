import { setMap } from '../resources/gmaps'
import { photoGallery } from '../resources/photo-gallery'
import { formNewDev } from '../resources/form-new-dev'

document.addEventListener('DOMContentLoaded', function () {
  const playButton = document.querySelector('.new-developments-single-video__play-btn'),
        videoContainer = document.querySelector('.new-developments-single-video__video-container'),
        thumbnail = document.querySelector('.new-developments-single-video__thumbnail'),
        video = document.querySelector('.new-developments-single-video__video');
  
  setMap();
  photoGallery();
  formNewDev();

  video.addEventListener('loadeddata', () => {
    
  })

  videoContainer.addEventListener('click', () => {
    video.src = video.dataset.src;
    playButton.classList.add('new-developments-single-video__play-btn--hidden');
    thumbnail.classList.add('new-developments-single-video__thumbnail--hidden');
    video.classList.add('new-developments-single-video__video--active');
  })


});
