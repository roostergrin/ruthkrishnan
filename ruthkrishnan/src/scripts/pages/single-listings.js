import { listingsHero } from '../resources/listings-hero';
import { photoGallery } from '../resources/photo-gallery';
import { photoGalleryTwo } from '../resources/photo-gallery--2';
import { listingsNeighborhhodGallery } from '../resources/listings-neighborhood-gallery';
import { setMap } from '../resources/gmaps';
import { testimonials } from '../resources/testimonials';
import { formExclusiveAccess } from '../resources/form-exclusive-access';
import { formNewDev } from '../resources/form-new-dev';

document.addEventListener('DOMContentLoaded', function () {
  const playBtn = document.querySelector('.listings-single__play-btn'),
        modalCloseBtn = document.querySelector('.listings-single__modal-close'),
        videoModal = document.querySelector('.listings-single__modal-tour'),
        modalOverlay = document.querySelector('.listings-single__modal-overlay'),
        iframeVideo = document.querySelector('.listings-single__modal-video'),
        featSeeMoreBtn = document.querySelector('.listings-single__features-see-more'),
        featList = document.querySelector('.listings-single__features-list'),
        featOverlay = document.querySelector('.listings-single__features-overlay'),
        photoGalleryElem = document.querySelector('.photo-gallery'),
        photoGalleryElem2 = document.querySelector('.photo-gallery--2');
  
  let featExpanded = false;

  // Imported Scripts ------------------------

  // Listings Hero Functionality
  listingsHero();

  // Photo Gallery Functionality
  if (photoGalleryElem) {
    photoGallery();
  }
  
  if (photoGalleryElem2) {
    // Sorry, they need it NOW
    photoGalleryTwo();
  }

  // Listings Neighborhood Functionality
  listingsNeighborhhodGallery();

  // Google Map
  setMap();

  // Testimonials
  testimonials();

  // From Exclusive Access
  formExclusiveAccess();

  // Form New Dev
  formNewDev();

  // END Imported Scripts -------------------

  // Features See More
  const toggleFeatures = () => {
    const featBtn = document.querySelector('.listings-single__features-see-more-btn');

    if (featExpanded) {
      featList.style.height = '425px';
      featOverlay.style.opacity = 1;
      featExpanded = false;
      setTimeout(() => {
        featBtn.innerHTML = 'see more';
      }, 150)
    } else {
      featList.style.height = featList.scrollHeight + 'px';
      featOverlay.style.opacity = 0;
      featExpanded = true;
      setTimeout(() => {
        featBtn.innerHTML = 'see less';
      }, 150)
    }
  }

  if (featList.scrollHeight < 457) {
    featList.style.height = 'auto';
    featSeeMoreBtn.style.display = 'none';
    featOverlay.style.display = 'none';
  } else {
    featSeeMoreBtn.addEventListener('click', toggleFeatures);
  }




const featSeeMoreBtn2 = document.querySelector('.listings-single__features-see-more--2'),
      featList2 = document.querySelector('.listings-single__features-list--2'),
      featOverlay2 = document.querySelector('.listings-single__features-overlay--2');

const toggleFeatures2 = () => {
  const featBtn2 = document.querySelector('.listings-single__features-see-more-btn--2');

  if (featExpanded) {
    featList2.style.height = '425px';
    featOverlay2.style.opacity = 1;
    featExpanded = false;
    setTimeout(() => {
      featBtn2.innerHTML = 'see more';
    }, 150)
  } else {
    featList2.style.height = featList2.scrollHeight + 'px';
    featOverlay2.style.opacity = 0;
    featExpanded = true;
    setTimeout(() => {
      featBtn2.innerHTML = 'see less';
    }, 150)
  }
}

if (featList2.scrollHeight < 457) {
  featList2.style.height = 'auto';
  featSeeMoreBtn2.style.display = 'none';
  featOverlay2.style.display = 'none';
} else {
  featSeeMoreBtn2.addEventListener('click', toggleFeatures2);
}

})
