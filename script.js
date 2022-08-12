var startButton = document.querySelector(".start-button");

startButton.addEventListener("click", startGame);

function startGame() {
  timerCount = 100;
  startButton.disabled = true;
  //   startTimer();
  //   genQuestion();
  console.log("clicked");
}
