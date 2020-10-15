var timerEl = document.querySelector("#timer");
var timeLeft = 60;
var startBtn = document.querySelector("#start-button");
var startScrn = document.querySelector("#start-screen");
var questionScrn = document.querySelector("#question-screen");
var doneScrn = document.querySelector("#done-screen");
var question = document.querySelector("#questions");
var choices = document.querySelector("#choices");
var correctAns = document.querySelector("#correctAns");
var incorrectAns = document.querySelector("#incorrectAns");
var highScores = document.querySelector(".highScores");
var clearScores = document.querySelector(".clear");
var yourScore = document.querySelector("#all-done")
var storedScores = [];
var currentIndex = 0;
var score = 0;

// Array of questions & answers for quiz.
var questions = [
  {
    ques: "Commonly used data types DO NOT include:",
    options: [
        "booleans", 
        "numbers", 
        "alerts", 
        "strings",
    ],
    correctOpt: "alerts",
  },
  {
    ques: "The condition in an if / else statement is enclosed within _______.",
    options: [
      "quotes",
      "curly brackets",
      "parentheses",
      "square brackets",
    ],
    correctOpt: "parentheses",
  },
  {
    ques: "Arrays in Javascript can be used to store ______.",
    options: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    correctOpt: "all of the above",
  },
  {
    ques: "String values must be enclosed within _____ when being assigned to variables.",
    options: [
        "commmas", 
        "curly brackets", 
        "quotes", 
        "parentheses"
    ],
    correctOpt: "quotes",
  },
  {
    ques: "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "Javascript",
      "terminal / bash",
      "for loops",
      "console.log",
    ],
    correctOpt: "console.log",
  },
];

console.log(currentIndex);

//Functions
function startQuiz(event) {
  startScrn.setAttribute("style", "display: none !important");
  questionScrn.setAttribute("style", "display: block !important");

  question.textContent = questions[currentIndex].ques;

  questions[currentIndex].options.forEach(function (choiceValue, choiceIndex) {
    choiceBtn = document.createElement("button");
    choiceBtn.textContent = choiceValue;
    choices.appendChild(choiceBtn);

        for (i = 0; i < questions.options; i++) {
            choiceIndex = questions.options[i];
        };
  });
  if (timeLeft < 60) {
    event.preventDefault();
  } else {
    timerEl.textContent = "Time: " + timeLeft;
    timerEl.append();
    timer();
  }

  choiceBtn.addEventListener("click", function selectAnswer() {
    if(questions.correctOpt === event.target.textContent) {
        correctAns.setAttribute("style", "display: block !important");
        currentIndex++;
    } else {
        incorrectAns.setAttribute("style", "display: block !important");
        timeLeft = timeLeft - 10;
        currentIndex++;
    }
    if (currentIndex > 4) {
        event.preventDefault();
    } else {
        startQuiz();
    }
    });
    
; 
};



function timer() {
  var timerInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerEl.textContent = "Out of time!";
      startQuiz;
    }
  }, 1000);
};

function endQuiz() {
    var score = timeLeft;
    clearInterval(timerInterval);
    yourScore.textContent = "Your final score is " + score;
}

startBtn.addEventListener("click", startQuiz);
//choiceBtn.addEventListener("click", selectAnswer);
