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

  })
