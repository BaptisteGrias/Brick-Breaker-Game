const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const sizeBall = 10, sliderHeight = 10, sliderWidth = 75
nbCol = 8, nbRow = 5, brickWidth = 75, brickHeight = 20, brickPadding = 10, brickOffsetTop = 30, brickOffsetLeft = 30;

let x = canvas.width / 2, y = canvas.height - 30;
sliderX = (canvas.width - sliderWidth) / 2;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, sizeBall, 0, Math.PI * 2);
  ctx.fillStyle = '#333';
  ctx.fill();
  ctx.closePath();
}

drawBall();

function drawSlider() {
  ctx.beginPath();
  ctx.rect(sliderX, canvas.height - sliderHeight - 2, sliderWidth, sliderHeight);
  ctx.fillStyle = '#333';
  ctx.fill();
  ctx.closePath();
}

drawSlider();

// array with the bricks

