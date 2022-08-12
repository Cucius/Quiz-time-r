var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");
var getQuiz = document.querySelector(".quiz");
var getAnswers = document.querySelector(".answers");

var favoriteEl = document.createElement("div");

var timer;
var timerCount;

var totalPoints = 0;

var quizQuestion = 0;

var question = ["What is always coming but never arrives?", "What gets wetter the more it dries?", "What is it that lives if it is fed, and dies if you give it a drink?", "What never asks a question but gets answered all the time?", "What word would you use to describe a man who does not have all his fingers on one hand?"];

var quizAnswers = 0;
var answers = ["Tomorrow", "A towel", "Fire", "A Phone", "Normal"];

var rightAnswer = true;
var wrongAnswer = false;

// var wrongAnswer1 = false;
// var wrongAnswer2 = false;

startButton.addEventListener("click", startGame);

//Start game
function startGame() {
  timerCount = 100;
  startButton.disabled = true;
  startTimer();
  genQuestion();
  genAnswers();
}

//Timer function
function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount === 0) {
      clearInterval(timer);
    }
  }, 1000);
}

//Generate questions
function genQuestion() {
  var numQuestion = 0;
  genAnswers();
  getQuiz.textContent = question[numQuestion];
}
function genAnswers() {
  document.body.children[0].children[1].children[4].appendChild(favoriteEl);
}

var numAnswers = 0;

var li1 = document.createElement("button");
var li2 = document.createElement("button");
var li3 = document.createElement("button");

favoriteEl.appendChild(li1);
favoriteEl.appendChild(li2);
favoriteEl.appendChild(li3);

li1.textContent = answers[numAnswers];
li2.textContent = answers[numAnswers + 1];
li3.textContent = answers[numAnswers + 2];

li1.setAttribute("style", "margin-left: 10%");
li2.setAttribute("style", "margin-left: 10%");
li3.setAttribute("style", "margin-left: 10%");

//Length must increase to keep correct answer with the question
// quizQuestion = question.length;
// quizAnswers = answers.length;
// console.log(quizQuestion);
// console.log(quizAnswers);

// check answer
// var getAnswers = document.querySelector(".answers");

// getAnswers.addEventListener("click", function (event) {
//   var answers = event.target;

//   if (answers.matches(".box")) {
//     var state = answers.getAttribute("data-state");

//     // Use an if statement to conditionally render the number on the card
//     if (state === "hidden") {
//       // If the card is clicked while the state is "hidden", we set .textContent to the number
//       answers.textContent = answers.dataset.number;
//       // Using the dataset property, we change the state to visible because the user can now see the number
//       answers.dataset.state = "visible";
//     } else {
//       // 'Hide' the number by setting .textContent to an empty string
//       answers.textContent = "";
//       // Use .setAttribute() method
//       answers.setAttribute("data-state", "hidden");
//     }
//   }
// });

//check answer add points for correct and remove time for incorrect
// function nextQuestion(answer){
//     for(var i = 0; i < quizQuestion; i++ ){
//         if()
//     }

// }
