let isDown1 = false;
let startX1;
let scrollLeft1;
const slider1 = document.querySelector('.items1');

const end1 = () => {
	isDown1 = false;
  slider1.classList.remove('active');
}

const start1 = (e) => {
  isDown1 = true;
  slider1.classList.add('active');
  startX1 = e.pageX || e.touches[0].pageX - slider1.offsetLeft;
  scrollLeft1 = slider1.scrollLeft1;	
}

const move1 = (e) => {
	if(!isDown1) return;

  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - slider1.offsetLeft;
  const dist = (x - startX1);
  slider1.scrollLeft1 = scrollLeft1 - dist;
}

(() => {
	slider1.addEventListener('mousedown', start1);
	slider1.addEventListener('touchstart', start1);

	slider1.addEventListener('mousemove', move1);
	slider1.addEventListener('touchmove', move1);

	slider1.addEventListener('mouseleave', end1);
	slider1.addEventListener('mouseup', end1);
	slider1.addEventListener('touchend', end1);
})();
