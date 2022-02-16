// Find the eyes
const balls = document.getElementsByClassName('ball');

// Detect move movement event
document.onmousemove = (event) => {
  // Calculate X and Y position
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  // Move the yes according to mouse position
  for (let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = 'translate(-' + x + ',-' + y + ')';
  }
};
