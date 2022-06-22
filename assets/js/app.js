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

var nameId = 0;
var quizIdCounter = 0;
var quizIndex = 0;
var scores = 0;
var timeLeft = 0;
var opening = document.querySelector(".opening");
var result = document.querySelector(".result");
var timeEl = document.getElementById("time");
var saveInfo = [];

// when time is over, check
// when quiz is over, the quiz can be remove, but the next doesn't show

function goViewHighScores() {
    window.location.href = "high-scores.html";
}

function countDown() {
    timeLeft = 75;
    var timeInterval = setInterval(function() {

        var resultEl = document. querySelector(".result");
        if(resultEl.innerHTML.match(/wrong/gi)) {
            timeLeft = timeLeft - 10;
        }
        timeEl.textContent = timeLeft + "s";
        timeLeft--;

        if(timeLeft <= 0 || saveInfo.length === questionsObj.length) {
            clearInterval(timeInterval);
            timeEl.textContent = 0 + "s";
            window.alert("The quiz is over");
            var opening = document.querySelector(".opening");
            var containerInfo = document.querySelector(".container");
            opening.removeChild(containerInfo);            
            end();
        }
    }, 1000);

    startQuiz();
}

function startQuiz() {
    // remove the opening title & start button
    var opening = document.querySelector(".opening");
    var containerInfo = document.querySelector(".container");
    opening.removeChild(containerInfo);

    document.querySelector(".divider").style.visibility = "visible";

    if (quizIdCounter <= questionsObj.length) {
        // whole one question (question + options)
        var container = document.createElement("section");
        container.classList.add("container");

        opening.appendChild(container);

        // question title
        var quiz = document.createElement("div");
        quiz.classList.add("show-quiz");
        quiz.setAttribute("data-quiz-id", quizIdCounter);
        
        container.appendChild(quiz);

        var question = document.createElement("h2");
        question.classList.add("question-title");
        question.textContent = questionsObj[quizIndex].question;

        quiz.appendChild(question);

        // 4 options
        var options = document.createElement("div");
        options.classList.add("options");
        options.setAttribute("id", "options");
        
        question.appendChild(options);

        var opA = document.createElement("button");
        var opB = document.createElement("button");
        var opC = document.createElement("button");
        var opD = document.createElement("button");

        opA.classList.add("btn", "btn-1", "option");
        opB.classList.add("btn", "btn-2", "option");
        opC.classList.add("btn", "btn-3", "option");
        opD.classList.add("btn", "btn-4", "option");

        opA.textContent = questionsObj[quizIndex].a;
        opB.textContent = questionsObj[quizIndex].b;
        opC.textContent = questionsObj[quizIndex].c;
        opD.textContent = questionsObj[quizIndex].d;

        options.appendChild(opA);
        options.appendChild(opB);
        options.appendChild(opC);
        options.appendChild(opD);

        quizIdCounter++;
        quizIndex++;

        // check the result
        // checkAnswer();
        var check = document.querySelector("#options");
        check.addEventListener("click", function(event) {
            var targetEl = event.target;
            // console.log(targetEl);
            // console.log(targetEl.value());

            if (targetEl.matches(".btn-4")) {
                result.textContent = "Correct!";
                scores += 10;
                saveInfo.push(scores);
                saveMark();
                setTimeout(showResult, 1000);
            } else {
                result.textContent = "Wrong!"
                scores -= 10;
                saveInfo.push(scores);
                saveMark();
                setTimeout(showResult, 1000);
            }
        })
    }
}

function showResult() {
    var next = document.querySelector(".show-quiz");
    next.remove();
    result.textContent = "";  

    // if (quizIdCounter < questionsObj.length || quizIdCounter === questionsObj.length) {
    //     startQuiz(); 
    // }
}

function end() {

    var quiz = document.createElement("div");
    quiz.className = "show-quiz";
    quiz.setAttribute("data-quiz-id", quizIdCounter);
    quiz.innerHTML = "<h1>All done!</h1>";
    
    opening.appendChild(quiz);

    var options = document.createElement("div");
    options.className = "answer";
    options.innerHTML = "<p>Your final score is <strong>" + scores + "</strong>!</p>"

    quiz.appendChild(options);

    var formEl = document.createElement("form");
    formEl.className = "form";
    formEl.setAttribute("data-name-id", nameId);
    formEl.innerHTML = "<p>Enter initials: </p>";
    options.appendChild(formEl);

    var form = document.createElement("input");
    form.className = "text-input";
    form.setAttribute("type", "text");
    form.setAttribute("name", "user-name");
    form.setAttribute("placeholder", "name:");


    formEl.appendChild(form);   

    var submit = document.createElement("button");
    submit.className = "btn";
    submit.setAttribute("id", "view-scores");
    submit.textContent = "Submit";

    quiz.appendChild(submit);

    var nameInput = document.querySelector("input[name = 'user-name']").value;
    nameInput = nameEl;

    var clickbtn = document.getElementById("view-scores");
    clickbtn.addEventListener("submit", function(event) {
        var targetEl = event.target;
        localStorage.setItem("highscoreName", nameInput);
        targetEl.location.href = "high-scores.html";
    });
    saveMark();
}

var saveMark = function(nameInput) {

    if(!nameInput) {
        nameEl = "";
        localStorage.setItem("highscore", scores);
        localStorage.setItem("highscoreName", nameEl); 
    } else {
        var nameInput = document.querySelector("input[name = 'user-name']").value;

        localStorage.setItem("highscore", scores);
        localStorage.setItem("highscoreName", nameEl);        
    }
}

document.querySelector("#view-scores").addEventListener("click", goViewHighScores);    
document.getElementById("btn-start").addEventListener("click", countDown);
