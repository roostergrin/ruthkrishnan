export const homeHero = () => {
  const video = document.querySelector('.home-hero__video'),
        loader = document.querySelector('.page-home__loader');

  video.addEventListener('loadeddata', () => {
    loader.classList.add('page-home__loader--loaded')
  });
  video.src = video.dataset.src
};
