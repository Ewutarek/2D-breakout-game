const paddle= document.getElementById("paddle");
const ball = document.getElementById("ball");
let xdir = true;

const paddleMove = (event) => {
  paddle.style.left = event.offsetX + "px";
}

const update = () =>{
  ball.style.top = ball.offsetTop + 1 + 'px';
  ball.style.left = ball.offsetLeft + 1 + 'px';
}
const tick = setInterval(update, 100);