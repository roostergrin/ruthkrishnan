import { photoGallery } from '../resources/photo-gallery';

document.addEventListener('DOMContentLoaded', function () {

  // Imported Scripts ------------------------

  // Photo Gallery Functionality
  photoGallery();

  // END Imported Scripts -------------------

  const playButton = document.querySelector('.single-neighborhoods-video__play-btn'),
        thumbnail = document.querySelector('.single-neighborhoods-video__thumbnail'),
        video = document.querySelector('.single-neighborhoods-video__video'),
        videoContainer = document.querySelector('.single-neighborhoods-video__video-container');
  
  videoContainer.addEventListener('click', () => {
    video.src = video.dataset.src;
    playButton.classList.add('single-neighborhoods-video__play-btn--hidden');
    thumbnail.classList.add('single-neighborhoods-video__thumbnail--hidden');
    video.classList.add('single-neighborhoods-video__video--active');
  })

})
