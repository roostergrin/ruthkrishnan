export const aboutLogos = () => {

  const logoArr = Array.from(document.querySelectorAll('.about-logos__logo-container'));

  let posArray = [],
      logoMargin = 16,
      logoWidth = 180;
  
  posArray = logoArr.reduce((acc, item, i) => ([ ...acc, (item.offsetWidth + logoMargin) * i ]), [])
  
  const setPosition = () => {
    logoArr.forEach((logo, i) => {
      logo.style.transform = `translate3d(${+(posArray[i] - logoWidth - logoMargin)}px, 0, 0)`;
    })
  }

  setPosition();

  const mod = (n, m) => {
    return ((n % m) + m) % m
  }

  const moveLeft = () => {
    const tempArray = posArray.map((el, i) => {
      return mod((el - 1), ((logoArr[0].offsetWidth + logoMargin) * posArray.length))
    })
    posArray = tempArray
    setPosition();
  }

  setInterval(moveLeft, (1000 / 60));

}
