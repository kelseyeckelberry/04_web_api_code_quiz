var timerEl = document.querySelector("#timer");
var timeLeft = 60;
var timeStart;
var startBtn = document.querySelector("#start-button");
var startScrn = document.querySelector("#start-screen");
var questionScrn = document.querySelector("#question-screen");
var question = document.querySelector("#questions");
var choices = document.querySelector("#choices");
var correctAns = document.querySelector("#correctAns");
var incorrectAns = document.querySelector("#incorrectAns");
//var highScores = document.querySelector(".highScores");
//var clearScores = document.querySelector(".clear");
var storedScores = [];
var currentIndex = 0;
var score = 0;

// Array of questions & answers for quiz.
var questions = 
[
    { 
        q: "Commonly used data types DO NOT include:", 
        c: ["1. booleans", "2. numbers", "3. alerts", "4. strings"],
        a: "3. alerts",
    },
    { 
        q: "The condition in an if / else statement is enclosed within _______.", 
        c: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        a: "3. parentheses",
    },
    { 
        q: "Arrays in Javascript can be used to store ______.", 
        c: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        a: "4. all of the above",
    },
    { 
        q: "String values must be enclosed within _____ when being assigned to variables.", 
        c: ["1. commmas", "2. curly brackets", "3. quotes", "4. parentheses"],
        a: "3. quotes",
    },
    { 
        q: "A very useful tool used during development and debugging for printing content to the debugger is:", 
        c: ["1. Javascript", "2. terminal / bash", "3. for loops", "4. console.log"],
        a: "4. console.log",
    },
];

//Functions
function startQuiz(event) {
    startScrn.setAttribute("style", "display: none !important");
    questionScrn.setAttribute("style", "display: block !important");

    question.textContent = questions[currentIndex].q
    
    questions[currentIndex].c.forEach(function(choiceValue, choiceIndex){
        var choiceBtn = document.createElement("button");
        choiceBtn.textContent = choiceValue;
        choices.appendChild(choiceBtn);
    })
    if (timeLeft < 60) {
        event.preventDefault();
    } else {
        timerEl.textContent = "Time: " + timeLeft;
        timerEl.append();
        timer();
    }
};

function selectAnswer(e){
    e.preventDefault();
    choiceBtn.on("click", function() {
    currentIndex++;
    });
    
    if (choiceBtn === a) {
        correctAns.setAttribute("style", "display: block !important");
    } else if (choiceBtn === n) {
        incorrectAns.setAttribute("style", "display: block !important");
        //code to remove 10 seconds from timer;
    }   
    //When an answer is clicked
    //currentIndex++
};

function timer() {
    var timerInterval = setInterval(function(){
        timeLeft--;
        timerEl.textContent = "Time: " + timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerEl.textContent = "Out of time!";
        }
    }, 1000);
};

startBtn.addEventListener("click", startQuiz);




