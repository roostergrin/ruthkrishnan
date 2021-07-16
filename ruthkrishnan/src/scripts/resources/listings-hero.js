export const listingsHero = () => {
  
  const el = document.querySelector('.hero-listings__wrapper'),
        img = document.querySelector('.hero-listings__background');

  img.style.objectPosition = el.dataset.positionX + ' ' + el.dataset.positionY

  const onScroll = () => {
    let windowWidth = window.innerWidth,
        transformValue = window.pageYOffset / windowWidth * 500;

    if ( windowWidth > 600 ) {
      el.style.transform = `translateY(${transformValue}px)`
    } else {
      el.style.transform = 'translateY(0)'
    }
  };

  onScroll();
  window.addEventListener('scroll', onScroll);

}
