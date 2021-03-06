export const blogNavMobile = () => {
  const blogMobileNav = document.querySelector('.blog-navigation-mobile'),
        blogFixedNav = document.getElementById('blog-fixed-nav'),
        menuPopup = document.getElementById('blog-filter-popup'),
        filterButton = document.getElementById('blog-filter'),
        fixedFilterButton = document.getElementById('blog-filter-fixed'),
        body = document.querySelector('body'),
        filterIcon = Array.from(document.querySelectorAll('.blog-navigation-mobile__filter-icon')),
        checkIcon = Array.from(document.querySelectorAll('.blog-navigation-mobile__check-icon'));

  let menuActive = false;

  if (blogMobileNav) {
    const setFixedNavPos = () => {
      const siteNav = document.querySelector('.site-navigation');
      blogFixedNav.style.top = `${siteNav.clientHeight}px`;
    }
  
    window.addEventListener('scroll', () => {
      const siteNav = document.querySelector('.site-navigation');
  
      setFixedNavPos();
  
      if (window.scrollY + siteNav.clientHeight > blogMobileNav.offsetTop + blogMobileNav.clientHeight) {
        blogFixedNav.classList.add('blog-navigation-mobile__fixed-nav--active');
      } else if (window.scrollY + siteNav.clientHeight < blogMobileNav.offsetTop + blogMobileNav.clientHeight && !menuActive) {
        blogFixedNav.classList.remove('blog-navigation-mobile__fixed-nav--active');
      }
  
      if (menuActive) {
        siteNav.classList.add('site-navigation--active');
      }
  
    }); 
  
    window.addEventListener('resize', () => {
      setFixedNavPos();
      if (window.innerWidth > 1024 && menuActive) {
        toggleFilterMenu();
      }
    })
  
    filterIcon.forEach((icon) => { icon.classList.add('blog-navigation-mobile__icon--active') });
    
    const toggleFilterMenu = () => {
      const siteNav = document.querySelector('.site-navigation'),
            navActive = Array.from(siteNav.classList).includes('site-navigation--active');
      
      menuActive = !menuActive;
  
      menuActive ? body.classList.add('body-stop') : body.classList.remove('body-stop');


      if (menuActive) {
        filterIcon.forEach((icon) => { icon.classList.remove('blog-navigation-mobile__icon--active') });
        checkIcon.forEach((icon) => { icon.classList.add('blog-navigation-mobile__icon--active') });
      } else {
        checkIcon.forEach((icon) => { icon.classList.remove('blog-navigation-mobile__icon--active') });
        filterIcon.forEach((icon) => { icon.classList.add('blog-navigation-mobile__icon--active') });
      }
  
      if (!navActive && menuActive) {
        siteNav.classList.add('site-navigation--active');
      } else if (!navActive && !menuActive) {
        siteNav.classList.remove('site-navigation--active');
      }
  
      if (!menuActive && window.scrollY < (window.innerHeight * 0.25)) {
        siteNav.classList.remove('site-navigation--active');
      }
  
      if (menuActive) {
        blogFixedNav.classList.add('blog-navigation-mobile__fixed-nav--active');
      } else if (!menuActive && window.scrollY + siteNav.clientHeight < blogMobileNav.offsetTop + blogMobileNav.clientHeight) {
        blogFixedNav.classList.remove('blog-navigation-mobile__fixed-nav--active');
      }
  
      menuActive ? menuPopup.classList.add('blog-navigation-mobile__popup--active') : menuPopup.classList.remove('blog-navigation-mobile__popup--active');
      menuPopup.style.top = `${siteNav.clientHeight + blogFixedNav.clientHeight}px`;
      menuPopup.style.height = `calc(100% - ${siteNav.clientHeight + blogFixedNav.clientHeight}px)`;
  
      setFixedNavPos();
    }
  
    filterButton.addEventListener('click', toggleFilterMenu);
    fixedFilterButton.addEventListener('click', toggleFilterMenu);
  
    document.querySelector('.blog-navigation-mobile__popup-overlay').addEventListener('click', toggleFilterMenu)
  }

}
