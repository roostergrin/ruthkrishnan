document.addEventListener('DOMContentLoaded', function () {
  
  let debounceLastTimeout = null;
  
  const setPageHeight = () => {

    const header = document.querySelector('.site-navigation'),
          subscribe = document.querySelector('.form-subscribe'),
          footer = document.querySelector('.footer'),
          thankyou = document.querySelector('.page-thank-you__container');

    if (window.innerHeight - (subscribe.offsetHeight + footer.offsetHeight + (header.offsetHeight / 2)) > 280) {
      thankyou.style.height = `${window.innerHeight - (subscribe.offsetHeight + footer.offsetHeight + (header.offsetHeight / 2))}px`;
      thankyou.style.marginTop = `${header.offsetHeight / 2}px`;
    } else {
      thankyou.style.marginTop = `${header.offsetHeight / 2}px`;
    }
    header.classList.add('site-navigation--active');

  }

  setPageHeight();

  // debounce function
  const debounce = (func, args, wait, immediate) => {
    const later = () => {
      debounceLastTimeout = null
      if (!immediate) {
        func(args)
      }
    };

    const callNow = immediate && !debounceLastTimeout
    clearTimeout(debounceLastTimeout)
    debounceLastTimeout = setTimeout(later, wait)
    if (callNow) {
      func(args)
    }
  }

  window.addEventListener('resize', () => {
    debounce(setPageHeight, null, 300)
  })
});