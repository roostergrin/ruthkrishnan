export const siteHero = () => {
  const el = document.querySelector('.hero-template__wrapper'),
        img = document.querySelector('.hero-template__background');

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

  window.addEventListener('scroll', onScroll);

}
