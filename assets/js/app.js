


function goViewHighScores() {
    window.location.href = "high-scores.html";
}

function startQuiz() {
    document.querySelector(".opening").style.display = "none";
    var time = document.getElementById("time");
    time.textContent = 60;
    // Countdown one second jump


    // Countdown one second jump end

    document.scripts.href = "./questions.js";
    var section = document.createElement("section");
    section.className = "opening";
    
    // section.appendChild(questions);

    console.log(section);
    

}








document.getElementById("view-scores").addEventListener("click", goViewHighScores);    

document.getElementById("btn-start").addEventListener("click", startQuiz);

