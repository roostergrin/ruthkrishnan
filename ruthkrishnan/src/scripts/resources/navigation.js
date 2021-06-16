export const navigation = () => {
  let scrollPos = 0;
  const el = document.querySelector('.site-navigation'),
        hamburger = document.querySelector('.site-navigation__hamburger'),
        overlay = document.querySelector('.site-navigation__overlay'),
        drawer = document.querySelector('.site-navigation__drawer');

  // close drawer when opening new page
  drawer.classList.remove('site-navigation__drawer--active')

  const handleScroll = () => {

    const currPos = window.pageYOffset

    if (scrollPos > (window.innerHeight * 0.25)) {
      el.classList.add('site-navigation--active')
    } else {
      el.classList.remove('site-navigation--active')
    }
    scrollPos = currPos
  };

  const toggleMenu = () => {
    hamburger.classList.contains('site-navigation__hamburger--active') ? hamburger.classList.remove('site-navigation__hamburger--active') : hamburger.classList.add('site-navigation__hamburger--active')
    overlay.classList.contains('site-navigation__overlay--active') ? overlay.classList.remove('site-navigation__overlay--active') : overlay.classList.add('site-navigation__overlay--active')
    drawer.classList.contains('site-navigation__drawer--active') ? drawer.classList.remove('site-navigation__drawer--active') : drawer.classList.add('site-navigation__drawer--active')
  };

  handleScroll();
  window.addEventListener('scroll', () => { handleScroll(); });
  hamburger.addEventListener('click', () => { toggleMenu(); });
}
