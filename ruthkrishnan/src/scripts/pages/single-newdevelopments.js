import { setMap } from '../resources/gmaps'
import { photoGallery } from '../resources/photo-gallery'
import { formNewDev } from '../resources/form-new-dev'

document.addEventListener('DOMContentLoaded', function () {
  setMap();
  photoGallery();
  formNewDev();
});
