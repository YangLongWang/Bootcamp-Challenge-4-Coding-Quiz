const questionsObj = [
    {
        question: "Commonly used data types DO NOT include:",
        a: "A. strings", 
        b: "B. booleans", 
        c: "C. numbers", 
        d: "D. alerts",
        answer: "D. alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed with _____.",
        a: "A. quotes", 
        b: "B. curly brackets", 
        c: "C. square brackets", 
        d: "D. parenthesis",
        answer: "D. parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        a: "A. numbers and strings", 
        b: "B. other arrays", 
        c: "C. booleans", 
        d: "D. all of the above",
        answer: "D. all of the above"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        a: "A. commas", 
        b: "B. curly brackets", 
        c: "C. parenthesis", 
        d: "D. quotes",
        answer: "D. quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        a: "A. JavaScript", 
        b: "B. terminal/bash", 
        c: "C. for loops", 
        d:"D. console.log",
        answer: "D. console.log"
    }
];

var quizIdCounter = 0;
var answerIdCounter = 0; 
var quizIndex = 0;
var scores = 0;
var timeLeft = 0;
var opening = document.querySelector(".opening");
var result = document.querySelector(".result");
var timeEl = document.getElementById("time");
var saveScores = [];


function goViewHighScores() {
    window.location.href = "high-scores.html";
}

function startQuiz() {
    document.querySelector(".container").style.display = "none";
    document.querySelector(".divider").style.visibility = "visible";

    showQuiz();
}

function showQuiz() {

    if (quizIdCounter >= questionsObj.length) {
        end();

    } else {

        // whole one question (question + options)
        var quiz = document.createElement("div");
        quiz.className = "show-quiz";
        quiz.setAttribute("data-quiz-id", quizIdCounter);
        quiz.innerHTML = "<h1>" + questionsObj[quizIndex].question + "</h1>";

        opening.appendChild(quiz);

        // 4 options
        var options = document.createElement("div");
        options.className = "answer";
        
        quiz.appendChild(options);

        var opA = document.createElement("button");
        var opB = document.createElement("button");
        var opC = document.createElement("button");
        var opD = document.createElement("button");

        opA.className = "btn btn-1";
        opB.className = "btn btn-2";
        opC.className = "btn btn-3";
        opD.className = "btn btn-4";

        opA.setAttribute("data-answer-id", answerIdCounter);
        opB.setAttribute("data-answer-id", answerIdCounter);
        opC.setAttribute("data-answer-id", answerIdCounter);
        opD.setAttribute("data-answer-id", answerIdCounter);

        opA.textContent = questionsObj[quizIndex].a;
        opB.textContent = questionsObj[quizIndex].b;
        opC.textContent = questionsObj[quizIndex].c;
        opD.textContent = questionsObj[quizIndex].d;



        options.appendChild(opA);
        options.appendChild(opB);
        options.appendChild(opC);
        options.appendChild(opD);

        // 4 options end
        // whole one question end

        quizIdCounter++;
        answerIdCounter++;
        quizIndex++;

        // check the result
        checkAnswer();
    }
}

function checkAnswer() {

    document.querySelector(".answer").addEventListener("click", function(event) {
        var targetEl = event.target;    
        if (targetEl.matches(".btn-4")) {
            result.innerHTML = "Correct!"
            scores = scores + 10;
            saveScores.push(scores);
            saveMark();

            setTimeout(function() {
                var next = document.querySelector(".show-quiz");
                next.remove();
                console.log(result);
                result.innerHTML = "";  
                if(quizIdCounter < questionsObj.length) {
                    console.log(quizIdCounter);
                    showQuiz(); 
                } else {
                    end();
                } 
                               
            }, 1000);

        } else {
            result.innerHTML = "Wrong!"
            scores = scores - 10;
            saveScores.push(scores);
            saveMark();

            setTimeout(function() {
                var next = document.querySelector(".show-quiz");
                next.remove();
                result.innerHTML = "";
                if(quizIdCounter < questionsObj.length) {
                    console.log(quizIdCounter);
                    showQuiz(); 
                } else {
                    end();
                } 
              
            }, 1000);
        }
    })
}

function reset() {
    if (quizIdCounter <= questionsObj.length) {
        var next = document.querySelector(".show-quiz");
        next.remove();
        var reResult = document.querySelector(".check");
        reResult.remove();                

        showQuiz();
    }
}

function countDown() {
    timeLeft = 75;
    var timeInterval = setInterval(function() {
        if (timeLeft >= 1) {
            timeEl.textContent = timeLeft + "s";
            timeLeft--;
        } else {
            timeEl.textContent = 0 + "s";
            clearInterval(timeInterval);
            end();
        }
    }, 1000);
}

function end() {
    console.log("end, show high scores and record name");
}

var saveMark = function() {
    localStorage.setItem("scores", JSON.stringify(saveScores));
    console.log(saveScores);
}


document.getElementById("view-scores").addEventListener("click", goViewHighScores);    
document.getElementById("btn-start").addEventListener("click", startQuiz);
document.getElementById("btn-start").addEventListener("click", countDown);
