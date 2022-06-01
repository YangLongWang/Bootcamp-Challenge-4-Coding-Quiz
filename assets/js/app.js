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
var answerIdCounter = 0; 
var quizIndex = 0;
var scores = 0;
var timeLeft = 0;
var opening = document.querySelector(".opening");
var result = document.querySelector(".result");
var timeEl = document.getElementById("time");
var saveInfo = [];


function goViewHighScores() {
    window.location.href = "high-scores.html";
}

function startQuiz() {
    document.querySelector(".container").style.display = "none";
    document.querySelector(".divider").style.visibility = "visible";

    showQuiz();
}

function showQuiz() {

    if (quizIdCounter <= questionsObj.length) {
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

    } else {


        // clearInterval(timeInterval);
        // console.log("here");
        // end();
    }
}

function checkAnswer() {

    document.querySelector(".answer").addEventListener("click", function(event) {
        var targetEl = event.target;    
        if (targetEl.matches(".btn-4")) {
            result.innerHTML = "Correct!"
            scores += 10;
            saveInfo.push(scores);
            saveMark();

            setTimeout(function() {
                var next = document.querySelector(".show-quiz");
                next.remove();
                // console.log(result);
                result.innerHTML = "";  

                if(quizIdCounter < questionsObj.length) {
                    console.log(quizIdCounter);
                    showQuiz(); 
                } else if (quizIdCounter === questionsObj.length) {
                    end();
                }             
            }, 1000);
                
        } else {
            result.innerHTML = "Wrong!"
            scores -= 10;
            saveInfo.push(scores);
            saveMark();

            setTimeout(function() {
                var next = document.querySelector(".show-quiz");
                next.remove();
                result.innerHTML = "";
                if(quizIdCounter < questionsObj.length) {
                    console.log(quizIdCounter);
                    showQuiz(); 
                } else if (quizIdCounter === questionsObj.length) {
                    end();
                }             
              
            }, 1000);
        }
    })
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
            console.log("time end");
            clearInterval(timeInterval);
            timeEl.textContent = 0 + "s";
            // window.alert("The quiz is over")
        }

        
    }, 1000);

    startQuiz();
}

// if (timeLeft < 1 || quizIdCounter > questionsObj.length)

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
    form.setAttribute("placeholder", "Enter initials name");


    formEl.appendChild(form);   

    var submit = document.createElement("button");
    submit.className = "btn";
    submit.setAttribute("id", "view-scores");
    submit.textContent = "Submit";

    quiz.appendChild(submit);
    console.log(quiz);

    var nameInput = document.querySelector("input[name = 'user-name']").value;
    // if (!nameInput) {
    //     alert("Please enter name.");
    // }

    var saveObj = {
        name: nameInput,
        mark: scores
    };
    saveInfo.push(saveObj);


}

var saveMark = function() {
    localStorage.setItem("info", JSON.stringify(saveInfo));
    console.log(saveInfo);
}


document.querySelector("#view-scores").addEventListener("click", goViewHighScores);    
// document.getElementById("btn-start").addEventListener("click", startQuiz);
document.getElementById("btn-start").addEventListener("click", countDown);
