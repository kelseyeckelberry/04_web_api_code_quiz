var timerEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start-button");
var startScrn = document.querySelector("#start-screen");
var questionScrn = document.querySelector("#question-screen");
var question = document.querySelector("#questions")
var choices = document.querySelector("#choices")

var currentIndex = 0;
// Array of questions & answers for quiz.
var questions = 
[
    { 
        q: "Commonly used data types DO NOT include:", 
        c: ["1. booleans", "2. numbers", "3. alerts", "4. strings"],
        a: "3. alerts",
        n: ["1. booleans", "2. numbers", "4. strings"]
    },
    { 
        q: "The condition in an if / else statement is enclosed within _______.", 
        c: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        a: "3. parentheses",
        n: ["1. quotes", "2. curly brackets", "4. square brackets"]
    },
    { 
        q: "Arrays in Javascript can be used to store ______.", 
        c: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        a: "4. all of the above",
        n: ["1. numbers and strings", "2. other arrays", "3. booleans"]
    },
    { 
        q: "String values must be enclosed within _____ when being assigned to variables.", 
        c: ["1. commmas", "2. curly brackets", "3. quotes", "4. parentheses"],
        a: "3. quotes",
        n: ["1. commmas", "2. curly brackets", "4. parentheses"]
    },
    { 
        q: "A very useful tool used during development and debugging for printing content to the debugger is:", 
        c: ["1. Javascript", "2. terminal / bash", "3. for loops", "4. console.log"],
        a: "4. console.log",
        n: ["1. Javascript", "2. terminal / bash", "3. for loops"]
    },
];

//Functions
function startQuiz(e) {
    e.preventDefault();
    startScrn.setAttribute("style", "display: none !important");
    questionScrn.setAttribute("style", "display: block !important");

    question.textContent = questions[currentIndex].q
    
    questions[currentIndex].c.forEach(function(choiceValue, choiceIndex){
        var choiceBtn = document.createElement("button")
        choiceBtn.textContent = choiceValue
        choices.appendChild(choiceBtn)
    })
};

function selectAnswer(){
    if (choiceBtn === a) {
        
    }
        
    //When an answer is clicked
    //currentIndex++

}
//Timer Element

startBtn.addEventListener("click", startQuiz);



