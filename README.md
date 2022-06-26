# Bootcamp-Challenge-4-Coding-Quiz

## Table of contents

- [Overview](#overview)
  - [Purpose](#purpose)
  - [Description](#description)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#build-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### Purpose
Practice the coding assignment.

### Description
Recreate all functions, right now is all working, and improve the formatting.

### The challenge

Users should be able to:

- click the starts button to start answer questions.
- click View high scores to check scores.
- take down initials name.
- click go back button and clean scores button.
- choose answer based on question.

### Screenshot
![](./assets/pics/Coding%20Quiz1%20-%20127.0.0.1.png)
![](./assets/pics/Coding%20Quiz2%20-%20127.0.0.1.png)
![](./assets/pics/Coding%20Quiz3%20-%20127.0.0.1.png)
![](./assets/pics/Coding%20Quiz4%20-%20127.0.0.1.png)
### Links

- Solution URL: [https://github.com/YangLongWang/Coding-Quiz](https://github.com/YangLongWang/Coding-Quiz)
- Live Site URL: [https://yanglongwang.github.io/Coding-Quiz/](https://yanglongwang.github.io/Coding-Quiz/)

## My process

### Build with

- HTML
- CSS
- JAVASCRIPT

### What I learned

- setting the countdown timer

```JavaScript
<script>
function timer() {
  var timeLeft = 70;
  var timeInterval = setInterval(function() {
    var timeEl = document.querySelector("#second");
    timeEl.textContent = timeLeft + "s";
    timeLeft--;
    if (result.textContent.match(/wrong/gi)) {
      timeLeft -= 10; 
    }
    if (timeLeft < 0 || scores.length === questionsArr.length) {
      clearInterval(timeInterval);
      alert("Quiz is over");
      timeEl.textContent = 0 + "s";
      index += questionsArr.length;
      createQuiz();
    }
  }, 1000);
  createQuiz();
}
</script>
```

## Author

- Github - [Longyang Wang](https://github.com/YangLongWang)