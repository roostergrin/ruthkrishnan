export const navigation = () => {
  let scrollPos = window.pageYOffset;
  const el = document.querySelector('.site-navigation');

  const handleScroll = () => {
    const currPos = window.pageYOffset

    if (scrollPos > (window.innerHeight * 0.25)) {
      el.classList.add('site-navigation--active')
    } else {
      el.classList.remove('site-navigation--active')
    }
    scrollPos = currPos
  };

  handleScroll();

  window.addEventListener('scroll', () => { handleScroll(); });
}
