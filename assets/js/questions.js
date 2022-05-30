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
    },
    {
        question: "",
        a: "A. ",
        b: "B. ",
        c: "C. ",
        d: "D. "
    }
];

var callBack = function(eventType, fn) {
    e = {
        name: "Longyang"
    }
    if( eventType === "click") {
        fn(e)
    }
}

callBack("click" , function(e) {
    console.log(e.name);
})

