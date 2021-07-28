export const homeHero = () => {
  const video = document.querySelector('.home-hero__video'),
        loader = document.querySelector('.page-home__loader');
        
  setTimeout(() => {
    video.src = video.dataset.src
  }, 500)
  
  video.addEventListener('loadeddata', () => {
    loader.classList.add('page-home__loader--loaded')
  });

}
