const slider5 = document.querySelector('.slider5');
  
slider5.style.cursor = '-webkit-grab';
slider5.addEventListener('mousedown', () => slider5.style.cursor = '-webkit-grabbing', true);
window.addEventListener('mouseup', () => slider5.style.cursor = '-webkit-grab', true);

const sliderImpetus5 = new Impetus({
  source: slider5,
  boundX: [0, slider5.scrollWidth - slider5.clientWidth],
  multiplier: -1,
  update(x) {
    this.scrollLeft = x;
  } });
