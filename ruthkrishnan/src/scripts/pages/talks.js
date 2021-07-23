document.addEventListener('DOMContentLoaded', function () {
  const playButton = document.querySelector('.talks-intro__play-btn'),
        thumbnail = document.querySelector('.talks-intro__thumbnail'),
        video = document.querySelector('.talks-intro__video');

  playButton.addEventListener('click', () => {
    video.src = video.dataset.src;
    playButton.classList.add('talks-intro__play-btn--hidden');
    thumbnail.classList.add('talks-intro__thumbnail--hidden');
    video.classList.add('talks-intro__video--active');
  })

});
