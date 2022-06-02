document.querySelector("#btn-go-back").addEventListener("click", function() {
    window.location.href = "index.html";
});
document.querySelector("#btn-clear").addEventListener("click", clearScore);
var highscore = document.querySelector(".text");

var table = function() {
    var showRecord = document.createElement("p");
    showRecord.className = "table";
    showRecord.textContent = localStorage.getItem("highscoreName") + " " + localStorage.getItem("highscore");
    
    highscore.appendChild(showRecord);
}

function clearScore() {
    localStorage.setItem("highscore", "");
    localStorage.setItem("highscoreName", "");
    document.querySelector(".table").textContent = "";
}

table();