document.addEventListener('DOMContentLoaded', function () {
  const shareElem = document.getElementById('blog-share');
  const sharePopup = document.getElementById('share-popup');
  const copyButton = document.getElementById('share-copy-button');
  let blogShareActive = false;
  
  const openShare = () => {
    if (blogShareActive) {
      blogShareActive = false;
      sharePopup.classList.remove('post-blog__infobar-share-popup--active');
    } else {
      blogShareActive = true;
      sharePopup.classList.add('post-blog__infobar-share-popup--active');
    }
  }

  shareElem.addEventListener('click', openShare);
  shareElem.addEventListener('keyup', openShare);
  
  const copyText = () => {
    const inputElem = document.getElementById('share-copy-link');
    inputElem.setAttribute('readonly', '');
    inputElem.select();
    document.execCommand('copy');
    copyButton.style.background = '#2fd64c';
    setTimeout(() => {
      copyButton.style.background = '#e1e1e1';
    }, 1250)
  }  

  copyButton.addEventListener('click', copyText);
  // copyButton.addEventListener('keyup', copyText);

  // Map InfoWindow------------------------------------------------
  if (document.querySelector('.single-posts-neighborhood')) {

    const postsData = Array.from(document.querySelectorAll('.single-posts-neighborhood__neighborhood-post')),
          slidesArr = postsData.map((el, i) => ({ name: el.dataset.name, title: el.dataset.title, elem: el, mapinfo: JSON.parse(el.dataset.mapinfo), link: el.dataset.link, category: el.dataset.category })),
          tooltipContainer = document.querySelector('.single-posts-neighborhood__tooltip'),
          tooltipContent = document.getElementById('tooltip-content'),
          closeContainer = document.getElementById('tooltip-close'),
          iconArr = document.querySelectorAll('.map-neighborhoods__icon-neighborhood'),
          heroHeight = document.querySelector('.hero-template').clientHeight;
    
    let sectionActive = false;

    console.log(slidesArr)
  
    const closeToolTip = () => {
      if (sectionActive) {
        tooltipContainer.style.opacity = 0;
        tooltipContainer.style.pointerEvents = 'none';
        iconArr.forEach(icon => icon.classList.remove('map-neighborhoods__icon-neighborhood--deactive'))
        sectionActive.classList.add('map-neighborhoods__icon-neighborhood--matched')
        sectionActive = false;
      }
    }
  
    const openTooltip = (event, el) => {
      const targetEl = slidesArr.find(elem => elem.name === el.dataset.name);
  
      let mapContent = '';
  
      if (!sectionActive) {
        if (targetEl) {
          // add tooltip information
          mapContent += `<div class='single-posts-neighborhood__tooltip-title'>${targetEl.title}</div>`;
      
          if (targetEl.mapinfo) {
            if (targetEl.mapinfo.information) {
              targetEl.mapinfo.information.forEach((info) => {
                mapContent += `<div class='single-posts-neighborhood__tooltip-info'>${info.text}</div>`;
              })
            }
          }
          if (targetEl.category === 'active') {
            mapContent += `<a href='${targetEl.link}' class='single-posts-neighborhood__tooltip-link'>learn more</a>`;
          } 
  
          // append tooltip information
          tooltipContent.innerHTML = mapContent;
      
          // show tooltip info window
          tooltipContainer.style.opacity = 1;
          tooltipContainer.style.pointerEvents = 'auto';
      
          // keep info window on screen (no overflow)
          if (event.clientY - 110 < tooltipContainer.clientHeight + 32) {
            tooltipContainer.style.top = `${event.pageY - heroHeight}px`;
          } else {
            tooltipContainer.style.top = `${event.pageY - tooltipContainer.clientHeight - 5 - heroHeight}px`;
          }
      
          if (window.innerWidth < 601) {
            tooltipContainer.style.left = '50%';
            tooltipContainer.style.transform = `translateX(-50%)`;
          } else if (event.clientX < (tooltipContainer.clientWidth / 2) + 32) {
            tooltipContainer.style.left = `${event.pageX + 16}px`;
          } else if (window.innerWidth - event.pageX < (tooltipContainer.clientWidth / 2) + 32) {
            tooltipContainer.style.left = `${event.pageX - (tooltipContainer.clientWidth)}px`;
          } else {
            tooltipContainer.style.left = `${event.pageX - (tooltipContainer.clientWidth / 2)}px`;
          }
        }
  
        iconArr.forEach((icon) => {
          if (icon.dataset.name !== el.dataset.name) {
            icon.classList.add('map-neighborhoods__icon-neighborhood--deactive');
          } else {
            icon.classList.remove('map-neighborhoods__icon-neighborhood--deactive');
            icon.classList.remove('map-neighborhoods__icon-neighborhood--matched');
          }
        })
  
        sectionActive = el;
      }
    }
  
  
   // * add event listener to all map neighborhoods *
  
    iconArr.forEach((el) => {
      const activeEl = slidesArr.find(elem => elem.name === el.dataset.name);
  
      if (activeEl) {
        el.classList.add('map-neighborhoods__icon-neighborhood--matched')
        el.addEventListener('click', (event) => {
          openTooltip(event, el);
        })
        el.addEventListener('keyup', (event) => {
          openTooltip(event, el);
        })
      }
  
  
    });
  
    closeContainer.addEventListener('click', closeToolTip);
    closeContainer.addEventListener('keyup', closeToolTip);
  
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
      debounce(closeToolTip, null, 200);
    })
  }
  function formatNumber(num) {
    return (
      "<strong>$" +
      num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") +
      "</strong>"
    );
  }
    

  let taxInput = document.getElementById("consideration-paid");
  let consideration;
  let rate;
  let rateMultiplier;
  let transferTax;
  let resultDisplay = document.getElementById("estimated-tax");
  let taxRateDisplay = document.getElementById("tax-rate");

  taxInput.addEventListener("keyup", function() {
    consideration = this.value;
    if (consideration <= 250000) { rate = 2.5; } 
    else if (consideration > 250000 && consideration < 1000000) { rate = 3.4; } 
    else if (consideration >= 1000000 && consideration < 5000000) { rate = 3.75; } 
    else if (consideration >= 5000000 && consideration < 10000000) { rate = 11.25; } 
    else if (consideration >= 5000000 && consideration < 10000000) { rate = 11.25; } 
    else if (consideration >= 10000000 && consideration < 25000000) { rate = 13.75; } 
    else if (consideration >= 25000000) { rate = 15; }

    rateMultiplier = Math.ceil(consideration / 500);
    transferTax = rate * rateMultiplier;
    taxRateDisplay.innerHTML = `<strong>$${rate}</strong>`;
    resultDisplay.innerHTML = formatNumber(Math.round(transferTax * 100) / 100);
  });


})
	 	 
