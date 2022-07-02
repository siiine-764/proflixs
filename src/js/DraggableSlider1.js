  /*slider 1*/
  const slider1 = document.querySelector('.slider1');
  
  slider1.style.cursor = '-webkit-grab';
  slider1.addEventListener('mousedown', () => slider1.style.cursor = '-webkit-grabbing', true);
  window.addEventListener('mouseup', () => slider1.style.cursor = '-webkit-grab', true);
  
  const sliderImpetus1 = new Impetus({
    source: slider1,
    boundX: [0, slider1.scrollWidth - slider1.clientWidth],
    multiplier: -1,
    update(x) {
      this.scrollLeft = x;
    } });
  