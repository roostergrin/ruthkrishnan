export const sliderVideo = () => {
  // Play Video ------------------------------------------------------------------------
  const videoSlides = Array.from(
      document.querySelectorAll(".slider-video__slide")
    ),
    slideThumbnails = Array.from(
      document.querySelectorAll(".slider-video__slide-image")
    ),
    playButtons = Array.from(
      document.querySelectorAll(".slider-video__slide-play-btn")
    ),
    prevBtn = document.querySelector(".slider-video__prev"),
    nextBtn = document.querySelector(".slider-video__next"),
    dots = Array.from(document.querySelectorAll(".slider-video__dot"));

  let currSlide = 0;

  const resetSlides = () => {
    videoSlides.forEach((slide) => {
      const video = slide.querySelector(".slider-video__video"),
        thumbnail = slide.querySelector(".slider-video__slide-image"),
        playBtn = slide.querySelector(".slider-video__slide-play-btn");
      if (video.src) {
        video.src = "";
      }
      thumbnail.classList.remove("slider-video__slide-image--hidden");
      playBtn.classList.remove("slider-video__slide-play-btn--hidden");
    });
  };

  const setSlideActive = () => {
    // add/remove classes from slides
    videoSlides.forEach((slide) => {
      console.log("index", slide.dataset.index);
      if (+slide.dataset.index === currSlide) {
        slide.classList.add("slider-video__slide--active");
      } else {
        slide.classList.remove("slider-video__slide--active");
      }
    });

    // add/remove classes from indicators
    dots.forEach((dot) => {
      console.log("dot", dot.dataset.target);
      if (+dot.dataset.target === currSlide) {
        dot.classList.add("slider-video__dot--active");
      } else {
        dot.classList.remove("slider-video__dot--active");
      }
    });

    resetSlides();
  };

  setSlideActive();

  const handleSlideChange = (target) => {
    if (target === "prev") {
      currSlide !== 0 ? currSlide-- : (currSlide = videoSlides.length);
    } else if (target === "next") {
      currSlide !== videoSlides.length ? currSlide++ : (currSlide = 0);
    } else if (typeof target === "number") {
      currSlide = target;
    }
    setSlideActive();
  };

  prevBtn.addEventListener("click", () => {
    handleSlideChange("prev");
  });

  nextBtn.addEventListener("click", () => {
    handleSlideChange("next");
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      handleSlideChange(+dot.dataset.target);
    });
  });

  slideThumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", (event) => {
      const video = thumbnail.parentElement.querySelector(
          ".slider-video__video"
        ),
        playBtn = thumbnail.parentElement.querySelector(
          ".slider-video__slide-play-btn"
        );

      video.src = video.dataset.src;
      thumbnail.classList.add("slider-video__slide-image--hidden");
      playBtn.classList.add("slider-video__slide-play-btn--hidden");
    });
  });

  playButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const video = btn.parentElement.querySelector(".slider-video__video"),
        thumbnail = btn.parentElement.querySelector(
          ".slider-video__slide-image"
        );

      video.src = video.dataset.src;
      thumbnail.classList.add("slider-video__slide-image--hidden");
      btn.classList.add("slider-video__slide-play-btn--hidden");
    });
  });
};
