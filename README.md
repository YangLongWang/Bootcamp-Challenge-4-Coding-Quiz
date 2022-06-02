# Bootcamp-Challenge-4-Coding-Quiz

## Table of contents

- [Overview](#overview)
  - [Purpose](#purpose)
  - [The challenge](#the-challenge)
  - [Video](#Video)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [What is next](#What-is-next)
- [Author](#author)

## Overview

### Purpose
Practice the coding assignment.

### The challenge

Users should be able to:

- click the starts button to start answer questions.
- click View high scores to check scores.
- take down initials name. (doesn't work)
- click go back button and clean scores button.
- choose answer based on question.


### Video
[](..%5C..%5C..%5C..%5C..%5CDownloads%5CCoding%20Quiz.mp4)

### Links

- Solution URL: [https://github.com/YangLongWang/Bootcamp-Challenge-4-Coding-Quiz](https://github.com/YangLongWang/Bootcamp-Challenge-4-Coding-Quiz)
- Live Site URL: [https://yanglongwang.github.io/Bootcamp-Challenge-4-Coding-Quiz/](https://yanglongwang.github.io/Bootcamp-Challenge-4-Coding-Quiz/)

## My process

### Build with

- HTML
- CSS
- JAVASCRIPT

### What I learned

- can Jump to other web pages through js
- can setting the countdown timer

```JavaScript
<script>
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
    }
  }, 1000);

  startQuiz();
}
</script>
```

### What is next

The function and button to record the name cannot be used. I will continue to improve the code and the page format later.

## Author

- Github - [Longyang Wang](https://github.com/YangLongWang)