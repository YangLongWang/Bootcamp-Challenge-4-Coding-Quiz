const questionsObj = [
    {
        question: "Commonly used data types DO NOT include:",
        a: "A. strings", 
        b: "B. booleans", 
        c: "C. alerts", 
        d: "D. numbers"
    },
    {
        question: "The condition in an if/else statement is enclosed with _____.",
        a: "A. quotes",
        b: "B. curly brackets",
        c: "C. parenthesis",
        d: "D. square brackets"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        a: "A. numbers and strings",
        b: "B. other arrays",
        c: "C. booleans",
        d: "D. all of the above"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        a: "A. commas",
        b: "B. curly brackets",
        c: "C. quotes",
        d: "D. parenthesis"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        a: "A. JavaScript",
        b: "B. terminal/bash",
        c: "C. for loops",
        d: "D. console.log"
    }
];

const rightAnswer = ["c", "c", "d", "c", "d"];

var optionIdCounter = 0;
var opening = document.querySelector(".opening");
var result = document.querySelector(".result");
var time = document.getElementById("time");
var secondTime = 75;



function goViewHighScores() {
    window.location.href = "high-scores.html";
}

function startQuiz() {
    document.querySelector(".container").style.display = "none";
    document.querySelector(".divider").style.visibility = "visible";

    showQuiz();
}

function showQuiz() {
    // whole one question (question + options)
    var quiz = document.createElement("section");
    quiz.className = "show-quiz";
    quiz.innerHTML = "<h1>" + questionsObj[0].question + "</h1>";

    opening.appendChild(quiz);

    // 4 options
    var options = document.createElement("section");
    options.className = "answer";

    quiz.appendChild(options);

    var opA = document.createElement("option");
    var opB = document.createElement("option");
    var opC = document.createElement("option");
    var opD = document.createElement("option");

    opA.className = "btn";
    opB.className = "btn";
    opC.className = "btn";
    opD.className = "btn";

    opA.textContent = questionsObj[0].a;
    opB.textContent = questionsObj[0].b;
    opC.textContent = questionsObj[0].c;
    opD.textContent = questionsObj[0].d;

    options.appendChild(opA);
    options.appendChild(opB);
    options.appendChild(opC);
    options.appendChild(opD);

    // 4 options end
    // whole one question end

    // check the result
    if (1<2) {
        var check = document.getElementById("check");
        check = document.createElement("p");
        check.className = "check";
        check.textContent = "Correct!";
        check.setAttribute("style","font-size: 25px; font-style: italic; color: rgba(128, 128, 128, 1); letter-spacing: 1px; ")
        result.appendChild(check);

        console.log(result);

    } else {
        var check = document.getElementById("check");
        check = document.createElement("p");
        check.className = "check";
        check.textContent = "Wrong!";
        check.setAttribute("style","font-size: 25px; font-style: italic; color: rgba(128, 128, 128, 1); letter-spacing: 1px; ")
        result.appendChild(check);

        console.log(result);

    }

    console.log(quiz);
}

function countDown() {
    // Countdown
    while (secondTime>=0) {
        time.textContent = `${secondTime}`;
        secondTime--;    

    } 

    // Countdown end
}



document.getElementById("view-scores").addEventListener("click", goViewHighScores);    
document.getElementById("btn-start").addEventListener("click", startQuiz);
document.getElementById("btn-start").addEventListener("click", countDown);