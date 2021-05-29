import { siteHero } from '../resources/site-hero'
import { setMap } from '../resources/gmaps'
import { photoGallery } from '../resources/photo-gallery'

document.addEventListener('DOMContentLoaded', function () {
  siteHero();
  setMap();
  photoGallery();
});
