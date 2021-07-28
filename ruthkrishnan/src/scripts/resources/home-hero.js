export const homeHero = () => {
  const video = document.querySelector('.home-hero__video'),
        loader = document.querySelector('.page-home__loader');
        
  window.addEventListener('load', () => {
    console.log('sc')
    window.scroll(0, 1);
  })

  video.src = video.dataset.src
  
  video.addEventListener('loadeddata', () => {
    loader.classList.add('page-home__loader--loaded')
  });

}
