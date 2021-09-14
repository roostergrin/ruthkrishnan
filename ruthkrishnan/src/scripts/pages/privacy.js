document.addEventListener('DOMContentLoaded', function () {

  const page = document.querySelector('.page-privacy')
        navigation = document.querySelector('.site-navigation');

  page.style.marginTop = navigation.offsetHeight + 'px'
  navigation.classList.add('site-navigation--active')

  const handleScroll = () => {
    navigation.classList.add('site-navigation--active')
  };

  handleScroll();
  window.addEventListener('scroll', () => { handleScroll(); });

});
