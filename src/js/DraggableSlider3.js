      
    const slider3 = document.querySelector('.slider3');
  
    slider3.style.cursor = '-webkit-grab';
    slider3.addEventListener('mousedown', () => slider3.style.cursor = '-webkit-grabbing', true);
    window.addEventListener('mouseup', () => slider3.style.cursor = '-webkit-grab', true);
    
    const sliderImpetus3 = new Impetus({
      source: slider3,
      boundX: [0, slider3.scrollWidth - slider3.clientWidth],
      multiplier: -1,
      update(x) {
        this.scrollLeft = x;
      } });
  