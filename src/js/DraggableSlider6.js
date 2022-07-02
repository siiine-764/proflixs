const slider6 = document.querySelector('.slider6');
  
slider6.style.cursor = '-webkit-grab';
slider6.addEventListener('mousedown', () => slider6.style.cursor = '-webkit-grabbing', true);
window.addEventListener('mouseup', () => slider6.style.cursor = '-webkit-grab', true);

const sliderImpetus6 = new Impetus({
  source: slider6,
  boundX: [0, slider6.scrollWidth - slider6.clientWidth],
  multiplier: -1,
  update(x) {
    this.scrollLeft = x;
  } });
