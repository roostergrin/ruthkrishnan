export const resourcesLinks = () => {
  const links = Array.from(document.querySelectorAll('.resources-links__link-container'));

  let debounceLastTimeout = null;

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

  const setLinkHeights = () => {
    const linkHeights = links.map(link => link.scrollHeight),
          maxHeight = Math.max(...linkHeights);
    
    links.forEach((link) => {
      link.style.height = maxHeight + 'px';
    })
  }
  setLinkHeights();

window.addEventListener('resize', () => {
  debounce(setLinkHeights, null, 300);
})

}
