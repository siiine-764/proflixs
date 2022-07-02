    const slider2 = document.querySelector('.slider2');
  
    slider2.style.cursor = '-webkit-grab';
    slider2.addEventListener('mousedown', () => slider2.style.cursor = '-webkit-grabbing', true);
    window.addEventListener('mouseup', () => slider2.style.cursor = '-webkit-grab', true);
    
    const sliderImpetus2 = new Impetus({
      source: slider2,
      boundX: [0, slider2.scrollWidth - slider2.clientWidth],
      multiplier: -1,
      update(x) {
        this.scrollLeft = x;
      } });