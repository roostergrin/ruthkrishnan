export const homeHero = () => {
  const video = document.querySelector('.home-hero__video'),
        loader = document.querySelector('.page-home__loader');
        
  setTimeout(() => {
    loader.classList.add('page-home__loader--loaded')
  }, 500)

}
