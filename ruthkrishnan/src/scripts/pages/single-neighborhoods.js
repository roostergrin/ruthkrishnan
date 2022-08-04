import { dataTable } from '../resources/neighborhood-data-table';
import { photoGallery } from '../resources/photo-gallery';
import { neighborhoodCharts } from '../resources/neighborhood-charts'
document.addEventListener('DOMContentLoaded', function () {

  // Imported Scripts ------------------------

  // Data Table Functionality
  dataTable();

  // Chart Functionality 
  neighborhoodCharts();
  
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
