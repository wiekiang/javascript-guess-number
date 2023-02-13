/** @format */

"use strict";

// Generate Random Number
function randomNumber() {
    return Math.trunc(Math.random() * 20) + 1;
}

// Display Message Function
const displayMessage = (message) =>
    (document.querySelector(".message").textContent = message);

const body = document.querySelector("body");
const btnCheck = document.querySelector(".check");
const guessText = document.querySelector(".guess");
const secretNumberText = document.querySelector(".number");
const highScoreText = document.querySelector(".highscore");
const scoreText = document.querySelector(".score");

let secretNumber = randomNumber();
let scoreLeft = Number(scoreText.textContent);
let highScore = Number(highScoreText.textContent);

btnCheck.addEventListener("click", function () {
    const guess = Number(guessText.value);

    if (!guess) {
        displayMessage("⚠️ No number!");
    } else if (guess === secretNumber) {
        displayMessage("👏 You win the game!");
        secretNumberText.textContent = secretNumber;
        secretNumberText.style.width = "30rem";
        body.style.backgroundColor = "#60b347";
        if (highScore < scoreLeft) {
            highScore = scoreLeft;
            highScoreText.textContent = scoreLeft;
        }
    } else if (guess !== secretNumber) {
        scoreLeft--;
        scoreText.textContent = scoreLeft;
        displayMessage(
            guess < secretNumber ? "⚠️ Number too low!" : "⚠️ Number too high!"
        );
    }

    if (scoreLeft === 0) {
        displayMessage("Game over!");
        btnCheck.style.display = "none";
        body.style.backgroundColor = "darkred";
        secretNumberText.textContent = secretNumber;
    }
});

document.querySelector(".again").addEventListener("click", function () {
    scoreLeft = 20;
    secretNumber = randomNumber();
    displayMessage("Start guessing...");
    scoreText.textContent = scoreLeft;
    body.style.backgroundColor = "#000";
    secretNumberText.textContent = "?";
    secretNumberText.style.width = "15rem";
    btnCheck.style.display = "block";
    guessText.value = "";
});
