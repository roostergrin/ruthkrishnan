document.addEventListener('DOMContentLoaded', function () {
  const shareElem = document.getElementById('blog-share');
  const sharePopup = document.getElementById('share-popup');
  const shareMailIcon = document.querySelector('.heateor_sss_email');
  const shareFacebookIcon = document.querySelector('.heateor_sss_facebook');
  const shareLinkedInIcon = document.querySelector('.heateor_sss_button_linkedin');
  const copyButton = document.getElementById('share-copy-button');
  let blogShareActive = false;
  
  const openShare = () => {
    if (blogShareActive) {
      blogShareActive = false;
      sharePopup.classList.remove('post-blog__infobar-share-popup--active');
    } else {
      blogShareActive = true;
      sharePopup.classList.add('post-blog__infobar-share-popup--active');
      shareMailIcon.setAttribute('tabindex', '0');
      shareFacebookIcon.setAttribute('tabindex', '0');
      shareLinkedInIcon.setAttribute('tabindex', '0');
    }
  }
  
  shareElem.addEventListener('click', openShare);
  shareElem.addEventListener('keyup', openShare);

  shareMailIcon.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      shareMailIcon.onclick();
    }
  });

  shareFacebookIcon.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      shareFacebookIcon.onclick();
    }
  });

  shareLinkedInIcon.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      shareLinkedInIcon.onclick();
    }
  });
  

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
  console.log("yea science")
  if (document.querySelector('#map-neighborhoods__wrapper')) {
    import('../resources/slider-neighborhoods').then(sliderNeighborhoods => sliderNeighborhoods.sliderNeighborhoods())
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

  if (taxInput) {
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
  }

})
	 	 
