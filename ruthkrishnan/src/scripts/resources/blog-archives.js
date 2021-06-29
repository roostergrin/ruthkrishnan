export const blogArchives = () => {
  let debounceLastTimeout = null;

  const constructArchive = () => {
    const blogSlide = document.querySelector('.blog-archives__slide'),
    postsArr = Array.from(document.querySelectorAll('.blog-archives__date'));
    
    if (window.innerWidth > 1024 && !blogSlide) {
      const slidesContainer = document.querySelector('.blog-archives__slides'),
      colArr = [],
      slidesArr = [];
      
      // replace first archive link text to most recent
      // postsArr[0].children[0].innerHTML = 'Most Recent';
      
      // remove default output of all archive links from WP
      postsArr.forEach(el => el.remove());
    
      // display slides container
      slidesContainer.style.display = 'block';
    
      // create array of columns containing 4 archive links
      while (postsArr.length > 0) {
        colArr.push(postsArr.splice(0, 4));
      }
    
      // create array of slides containing 5 columns
      while (colArr.length > 0) {
        slidesArr.push(colArr.splice(0, 5));
      }
    
      // append links to columns, then columns into slides and then slides into slides container
      slidesArr.forEach((slide, i) => {
        const slideWrapper = document.createElement('div');
        slideWrapper.classList.add('blog-archives__slide');
        i === 0 ? slideWrapper.classList.add('blog-archives__slide--active') : null
        slidesContainer.appendChild(slideWrapper);
        slide.forEach((column) => {
          const colwrapper = document.createElement('div');
          colwrapper.classList.add('blog-archives__slide-column');
          slideWrapper.appendChild(colwrapper);
          column.forEach((el) => {
            colwrapper.appendChild(el);
            el.children[0].getAttribute('href') === window.location.href ? el.classList.add('blog-archives__date--active') : null;
          });
        })
      })
    
      // Set Slide Heights
      const slideElems = Array.from(document.querySelectorAll('.blog-archives__slide'));
      const slideHeights = slideElems.map(slide => slide.scrollHeight);
      slidesContainer.style.height = Math.max(...slideHeights) + 'px';
    
      const prevButton = document.querySelector('.blog-archives__navigation--prev');
      const nextButton = document.querySelector('.blog-archives__navigation--next');
      
      const changeSlide = (dir) => {
        let currSlide;
    
        // find current slide index and remove active class
        slideElems.forEach((slide, i) => {
          if (Array.from(slide.classList).includes('blog-archives__slide--active')) {
            currSlide = i;
          }
          slide.classList.remove('blog-archives__slide--active')
        })
    
        // set active class to next/prev slide
        if (dir === 'prev') {
          currSlide - 1 >= 0 ? slideElems[currSlide - 1].classList.add('blog-archives__slide--active') : slideElems[slideElems.length - 1].classList.add('blog-archives__slide--active');
        } else if (dir === 'next') {
          currSlide + 1 < slideElems.length ? slideElems[currSlide + 1].classList.add('blog-archives__slide--active') : slideElems[0].classList.add('blog-archives__slide--active');
        }
      }
    
      // add event listeners to next and prev buttons
      prevButton.addEventListener('click', () => { changeSlide('prev') });
      nextButton.addEventListener('click', () => { changeSlide('next') });
    }
  }

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

  constructArchive();
  window.addEventListener('resize', () => {
    debounce(constructArchive, null, 500);
  });
}
