export const mapZoom = () => {
  let zoomInBtn = document.getElementById("map-neighborhoods__zoom-in"),
      zoomOutBtn = document.getElementById("map-neighborhoods__zoom-out"),
      wrapper = document.getElementById("map-neighborhoods__wrapper"),
      container = Array.from(document.getElementsByClassName("map-neighborhoods__icon"))[0],
      panScrollStartX = null,
      panScrollStartY = null,
      panActive = false,
      panStartX = null,
      panStartY = null

  wrapper.addEventListener("mousedown", handlePanScrollMouseDown);
  window.addEventListener("mousemove", handlePanScrollMouseMove);
  window.addEventListener("mouseup", handlePanScrollMouseUp);
  zoomInBtn.addEventListener("click", () => handleZoom("increase"));
  zoomOutBtn.addEventListener("click", () => handleZoom("decrease"));

  function handlePanScrollMouseDown(event){
    console.log('handlePanScrollMouseDown',event)
    container.style.cursor = "grabbing";
    panScrollStartX = wrapper.scrollLeft;
    panScrollStartY = wrapper.scrollTop;
    panStartX = event.clientX;
    panStartY = event.clientY;
    panActive = true;
  };

  function handlePanScrollMouseMove(event) {
    console.log('handlePanScrollMouseMove', panActive)
    event.preventDefault();
    if (panActive) {
      const currPosX = event.clientX;
      const currPosY = event.clientY;
      const top = panScrollStartY + (panStartY - currPosY);
      const left = panScrollStartX + (panStartX - currPosX);
      wrapper.scrollTop = top;
      wrapper.scrollLeft = left;
    }
  };

  function handlePanScrollMouseUp(event) {
    console.log('handlePanScrollMouseUp',event)
    container.style.cursor = "grab";
    panActive = false;
  };

  function handleZoom(control) {
    if (control === "increase") {
      const width = +container.clientWidth;
      if (width < 1500) container.style.width = `${width * 1.2}px`;

    } else {
      const width = +container.clientWidth;
      if ( width > 500) container.style.width = `${width * 0.8}px`;
    }
  };
};
