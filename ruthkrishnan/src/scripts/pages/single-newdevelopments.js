import { setMap } from '../resources/gmaps'
import { photoGallery } from '../resources/photo-gallery'

document.addEventListener('DOMContentLoaded', function () {
  setMap();
  photoGallery();
});
