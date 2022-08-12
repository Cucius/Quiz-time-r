var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");

var timer;
var timerCount;

startButton.addEventListener("click", startGame);

//Start game
function startGame() {
  timerCount = 100;
  startButton.disabled = true;
  startTimer();
  //   genQuestion();
  console.log("clicked");
}

function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount === 0) {
      clearInterval(timer);
    }
  }, 1000);
}
