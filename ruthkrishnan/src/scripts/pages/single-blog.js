document.addEventListener('DOMContentLoaded', function () {
  const shareElem = document.getElementById('blog-share');

  const copyText = () => {
    const elem = document.createElement('textarea');
    elem.value = shareElem.dataset.link;
    elem.setAttribute('readonly', '');
    elem.style.position = 'absolute';
    elem.style.left = -999999 + 'px';
    document.body.appendChild(elem);
    elem.focus();
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
  }  

  shareElem.addEventListener('click', copyText);

  })
