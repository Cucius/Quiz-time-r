var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");
var getQuiz = document.querySelector(".quiz");
var favoriteEl = document.createElement("div");

var timer;
var timerCount = 60;

var totalPoints = 0;

var question = ["What is always coming but never arrives?", "What gets wetter the more it dries?", "What is it that lives if it is fed, and dies if you give it a drink?", "What never asks a question but gets answered all the time?", "What word would you use to describe a man who does not have all his fingers on one hand?"];
var answers = ["Tomorrow", "A towel", "Fire", "A Phone", "Normal", "Odd", "Freak"];

var numAnswers = 0;
var numQuestion = 0;

//Start game
function startGame() {
  timerCount = 60;
  totalPoints = 0;
  numAnswers = 0;
  numQuestion = 0;

  startButton.disabled = true;
  startTimer();
  genQuestion();
  genAnswers();
}

function deleteAnswerButtons() {
  document.getElementById("answerButtonsLocation").textContent = "";
  favoriteEl = document.createElement("div");
}

function quizOver() {
  clearInterval(timer);
  deleteAnswerButtons();

  timerElement.textContent = "Game Over";
  getQuiz.textContent = "Done! Points: " + totalPoints;

  startButton.disabled = false;
}

function nextRound() {
  // delete answer buttons so new ones can be made
  deleteAnswerButtons();

  genQuestion();
  genAnswers();

  if (numQuestion > 5) {
    quizOver();
  }
}

//Timer function
function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    // timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      displayTimer();
    } else {
      timerElement.textContent = "";
      clearInterval(timer);
      quizOver();
    }

    if (timerCount <= 20) {
      timerElement.setAttribute("style", "color: var(--active)");
    }
  }, 500);
}

function subtractTimeFromTimer() {
  clearInterval(timer);
  timerCount = timerElement.textContent - 10;
  startTimer();
}

function displayTimer() {
  timerElement.textContent = timerCount;
}

//Generate questions
function genQuestion() {
  getQuiz.textContent = question[numQuestion];
  numQuestion++;
}

function genAnswers() {
  var choiceOne = document.createElement("button");
  var choiceTwo = document.createElement("button");
  var choiceThree = document.createElement("button");

  favoriteEl.appendChild(choiceOne);
  favoriteEl.appendChild(choiceTwo);
  favoriteEl.appendChild(choiceThree);

  //TODO: CHANGE THE ANSWER DISPLAYED IN THE choice button
  choiceOne.textContent = answers[numAnswers];
  choiceTwo.textContent = answers[numAnswers + 1];
  choiceThree.textContent = answers[numAnswers + 2];

  choiceOne.setAttribute("class", "answers");
  choiceTwo.setAttribute("class", "answers");
  choiceThree.setAttribute("class", "answers");

  // TODO: INSERT IF STATEMENT TO SELECT CORRECT BUTTON FOR correctAnswer
  // to randomize answer location
  choiceOne.addEventListener("click", correctAnswer);
  choiceTwo.addEventListener("click", wrongAnswer);
  choiceThree.addEventListener("click", wrongAnswer);

  document.getElementById("answerButtonsLocation").appendChild(favoriteEl);
  numAnswers++;
}

function correctAnswer() {
  console.log("CORRECT ANSWER");
  totalPoints++;
  nextRound();
}

function wrongAnswer() {
  console.log("WRONG ANSWER");
  totalPoints--;
  // timerElement.textContent = timerCount - 10;
  subtractTimeFromTimer();
  // timerElement.

  nextRound();
}

startButton.addEventListener("click", startGame);

//   localStorage.setItem("Points", totalPoints);
