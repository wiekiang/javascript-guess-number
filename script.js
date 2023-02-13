/** @format */

"use strict";

// Variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreLeft = Number(document.querySelector(".score").textContent);
let highScore = Number(document.querySelector(".highscore").textContent);
console.log(`The secret number is ${secretNumber}`);

// Check button event
document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);

    // No input value
    if (!guess) {
        document.querySelector(".message").textContent = "⚠️ No number!";
        // Guess the right number
    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "👏 You win the game!";
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        if (highScore < scoreLeft) {
            highScore = scoreLeft;
            document.querySelector(".highscore").textContent = scoreLeft;
        }
        // Guess the wrong number
    } else if (guess !== secretNumber) {
        scoreLeft--;
        document.querySelector(".score").textContent = scoreLeft;
        document.querySelector(".message").textContent =
            guess < secretNumber ? "⚠️ Number too low!" : "⚠️ Number too high!";
    }

    // Check score
    if (scoreLeft === 0) {
        document.querySelector(".message").textContent = "Game over!";
        document.querySelector(".check").style.display = "none";
        document.querySelector("body").style.backgroundColor = "darkred";
        document.querySelector(".number").textContent = secretNumber;
    }
});

// Try again button event
document.querySelector(".again").addEventListener("click", function () {
    scoreLeft = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    console.log(`The secret number is ${secretNumber}`);
    document.querySelector("body").style.backgroundColor = "#000";
    document.querySelector(".score").textContent = scoreLeft;
    document.querySelector(".check").style.display = "block";
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".guess").value = "";
    document.querySelector(".number").width = "15rem";
    document.querySelector(".number").textContent = "?";
});
