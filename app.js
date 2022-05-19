const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const showScore = document.querySelector('.score');

const sizeBall = 10, sliderHeight = 10, sliderWidth = 75
nbCol = 8, nbRow = 5, brickWidth = 75, brickHeight = 20, brickPadding = 10, brickOffsetTop = 30, brickOffsetLeft = 30;

let x = canvas.width / 2, y = canvas.height - 30;
sliderX = (canvas.width - sliderWidth) / 2, end = false,
speedX = 5, speedY = -5;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, sizeBall, 0, Math.PI * 2);
  ctx.fillStyle = '#333';
  ctx.fill();
  ctx.closePath();
}



function drawSlider() {
  ctx.beginPath();
  ctx.rect(sliderX, canvas.height - sliderHeight - 2, sliderWidth, sliderHeight);
  ctx.fillStyle = '#333';
  ctx.fill();
  ctx.closePath();
}



// array with the bricks

const bricks = [];

for(let i = 0; i < nbRow; i++) {
  bricks[i] = [];
  for(let j = 0; j < nbCol; j++) {
    bricks[i][j] = { x: 0, y: 0, status: 1 };
  }
}

// console.log(bricks);

function drawBricks() {
    for(let i = 0; i < nbRow; i++) {
        for(let j = 0; j < nbCol; j++) {
        
            if(bricks[i][j].status == 1) {

                let brickX = (j * (brickWidth + 10) + 35) 
                let brickY = (i * (brickHeight + 10) + 30)
                
                bricks[i][j].x = brickX;
                bricks[i][j].y = brickY;

                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = '#333';
                ctx.fill();
                ctx.closePath();
        }
        }
    }
}


function draw() {
    if(end === false){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBall();
        drawSlider();
        drawBricks();
        // collision();
        // move();

        if(x + speedX > canvas.width - sizeBall || x + speedX < sizeBall) {
            speedX = -speedX;
        }

        if(y + speedY < sizeBall) {
            speedY = -speedY;
        }

        if(y + speedY > canvas.height - sizeBall) {
            if(x > sliderX && x < sliderX + sliderWidth) {
                speedX = speedX + 0.1;
                speedY = speedY + 0.1;
                speedY = -speedY;
            } else {
                end = true;
                showScore.innerHTML = 'Game Over ! <br> click to restart';
            }
        }


        x += speedX;
        y += speedY;
        requestAnimationFrame(draw);
    }
}

draw();

// restart game

canvas.addEventListener('click', () => {
    if(end === true) {
        end = false;
        document.location.reload();
    }
})