export const mapZoom = () => {
  let zoomInBtn = document.getElementById("map-neighborhoods__zoom-in"),
  zoomOutBtn = document.getElementById("map-neighborhoods__zoom-out"),
  zoomFrameBtn = document.getElementById("map-neighborhoods__zoom-frame"),
  wrapper = document.getElementById("map-neighborhoods__wrapper"),
  wrapperZoom = document.getElementById("map-neighborhoods__wrapper--zoom"),
  lens = document.createElement("DIV"),
      container = Array.from(document.getElementsByClassName("map-neighborhoods__icon"))[0],
      panScrollStartX = null,
      panScrollStartY = null,
      panActive = false,
      panStartX = null,
      panStartY = null,
      zoomFrameToggle = false
  lens.id = "map-neghborhoods__lens-class";
  var cx, cy;
  lens.setAttribute("class", "map-neighborhoods__img-zoom-lens");
  wrapper.parentElement.insertBefore(lens, wrapper);
  cx = wrapperZoom.offsetWidth / lens.offsetWidth;
  cy = wrapperZoom.offsetHeight / lens.offsetHeight;

  wrapper.addEventListener("mousedown", handlePanScrollMouseDown);
  window.addEventListener("mousemove", handlePanScrollMouseMove);
  window.addEventListener("mouseup", handlePanScrollMouseUp);
  zoomInBtn.addEventListener("click", () => handleZoom("increase"));
  zoomOutBtn.addEventListener("click", () => handleZoom("decrease"));
  zoomFrameBtn.addEventListener("click", handleZoomFrame);

  function handleZoomFrame(event) {
    if (document.getElementById("map-neighborhoods__column").dataset.zoomToggle !== "True") {
      zoomFrameToggle = true
      document.getElementById("map-neighborhoods__column").style.display = "none";
      document.getElementById("map-neighborhoods__column--map--zoom").style.display = "block";
      lens.addEventListener("mousemove", moveLens);
      wrapper.addEventListener("mousemove", moveLens);
      lens.addEventListener("touchmove", moveLens);
      wrapper.addEventListener("touchmove", moveLens);
      lens.style.display = "block"
      document.getElementById("map-neighborhoods__column").dataset.zoomToggle = "True";
    }
    else {
      zoomFrameToggle = false
      document.getElementById("map-neighborhoods__column").style.display = "flex";
      document.getElementById("map-neighborhoods__column--map--zoom").style.display = "none";
      lens.style.display = "none"
      document.getElementById("map-neighborhoods__column").dataset.zoomToggle = "False";
    }
  };

  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    a = wrapper.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }

  function moveLens(e) {
    var pos, x, y;
    /* Prevent any other actions that may occur when moving over the image */
    // e.preventDefault();
    /* Get the cursor's x and y positions: */
    pos = getCursorPos(e);
    /* Calculate the position of the lens: */
    x = pos.x - (lens.offsetWidth / 2);
    y = pos.y - (lens.offsetHeight / 2);
    /* Prevent the lens from being positioned outside the image: */
    if (x > wrapper.offsetWidth - lens.offsetWidth) {x = wrapper.offsetWidth - lens.offsetWidth;}
    if (x < 0) {x = 0;}
    if (y > wrapper.offsetHeight - lens.offsetHeight) {y = wrapper.offsetHeight - lens.offsetHeight;}
    if (y < 0) {y = 0;}
    /* Set the position of the lens: */
    lens.style.left = x + "px";
    lens.style.top = y + "px";
    /* Display what the lens "sees": */
    var xperc = (x/(wrapper.offsetWidth - 40))*100
    var yperc = (y/(wrapper.offsetHeight - 80))*100
    wrapperZoom.style.transformOrigin = xperc + "% " + yperc + "%"

  }

  function handlePanScrollMouseDown(event){
    // console.log('handlePanScrollMouseDown',event)
    container.style.cursor = "grabbing";
    panScrollStartX = wrapper.scrollLeft;
    panScrollStartY = wrapper.scrollTop;
    panStartX = event.clientX;
    panStartY = event.clientY;
    panActive = true;
  };

  function handlePanScrollMouseMove(event) {
    // console.log('handlePanScrollMouseMove', panActive)
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
    // console.log('handlePanScrollMouseUp',event)
    container.style.cursor = "grab";
    panActive = false;
  };

  function handleZoom(control) {
    if (control === "increase") {
      const width = +container.clientWidth;
      if (width < 1500) container.style.width = `${width + 150}px`;

    } else {
      // TODO: on mobile screens reset the width
      const width = +container.clientWidth;
      // if ( width > 550)
      container.style.width = `${width - 150}px`;
    }
  };
};
