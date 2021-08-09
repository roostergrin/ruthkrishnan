document.addEventListener('DOMContentLoaded', function () {

  const el = document.querySelector('.site-navigation');

  el.classList.add('site-navigation--active')
  
  window.addEventListener('scroll', () => { 
    el.classList.add('site-navigation--active')
  })

});
