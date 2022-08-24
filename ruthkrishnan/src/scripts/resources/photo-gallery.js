export const photoGallery = () => {
  if (document.querySelector(".photo-gallery__slider")) {
    let currSlide = 0,
      paginationContent;

    const slider = document.querySelector(".photo-gallery__slider"),
      sliderLength = slider.dataset.sliderLength,
      slide = document.querySelectorAll(".photo-gallery__slide"),
      dot = document.querySelectorAll(".photo-gallery__dot"),
      numpagination = document.querySelector(".photo-gallery__numpagination"),
      prev = document.querySelector(".photo-gallery__prev"),
      next = document.querySelector(".photo-gallery__next"),
      img = document.querySelectorAll(".photo-gallery__image");

    const setSlide = () => {
      slide.forEach(function (slide) {
        currSlide === +slide.dataset.index
          ? slide.classList.add("photo-gallery__slide--active")
          : slide.classList.remove("photo-gallery__slide--active");
      });
      if (numpagination) {
        paginationContent = `${currSlide + 1} / ${+numpagination.dataset
          .slides}`;
        numpagination.innerHTML = paginationContent;
      } else {
        dot.forEach(function (dot) {
          currSlide === +dot.dataset.index
            ? dot.classList.add("photo-gallery__dot--active")
            : dot.classList.remove("photo-gallery__dot--active");
        });
      }
    };

    setSlide();

    const changeSlide = (str) => {
      if (str === "prev") {
        currSlide === 0 ? (currSlide = sliderLength - 1) : currSlide--;
        setSlide();
      }
      if (str === "next") {
        currSlide === sliderLength - 1 ? (currSlide = 0) : currSlide++;
        setSlide();
      }
    };

    const goToSlide = (val) => {
      currSlide = val;
      setSlide();
    };

    prev.addEventListener("click", () => {
      changeSlide("prev");
    });
    next.addEventListener("click", () => {
      changeSlide("next");
    });
    dot.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        goToSlide(i);
      });
    });
  }
};
