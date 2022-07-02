const slider4 = document.querySelector('.slider4');
  
slider4.style.cursor = '-webkit-grab';
slider4.addEventListener('mousedown', () => slider4.style.cursor = '-webkit-grabbing', true);
window.addEventListener('mouseup', () => slider4.style.cursor = '-webkit-grab', true);

const sliderImpetus4 = new Impetus({
  source: slider4,
  boundX: [0, slider4.scrollWidth - slider4.clientWidth],
  multiplier: -1,
  update(x) {
    this.scrollLeft = x;
  } });

