/** @format */

"use strict";

// Generate Random Number
function randomNumber() {
    return Math.trunc(Math.random() * 20) + 1;
}

// Display Message Function
const displayMessage = (message) =>
    (document.querySelector(".message").textContent = message);

let secretNumber = randomNumber();
let scoreLeft = Number(document.querySelector(".score").textContent);
let highScore = Number(document.querySelector(".highscore").textContent);

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);

    if (!guess) {
        displayMessage("⚠️ No number!");
    } else if (guess === secretNumber) {
        displayMessage("👏 You win the game!");
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        if (highScore < scoreLeft) {
            highScore = scoreLeft;
            document.querySelector(".highscore").textContent = scoreLeft;
        }
    } else if (guess !== secretNumber) {
        scoreLeft--;
        document.querySelector(".score").textContent = scoreLeft;
        displayMessage(
            guess < secretNumber ? "⚠️ Number too low!" : "⚠️ Number too high!"
        );
    }

    if (scoreLeft === 0) {
        displayMessage("Game over!");
        document.querySelector(".check").style.display = "none";
        document.querySelector("body").style.backgroundColor = "darkred";
        document.querySelector(".number").textContent = secretNumber;
    }
});

document.querySelector(".again").addEventListener("click", function () {
    scoreLeft = 20;
    secretNumber = randomNumber();
    displayMessage("Start guessing...");
    document.querySelector("body").style.backgroundColor = "#000";
    document.querySelector(".score").textContent = scoreLeft;
    document.querySelector(".check").style.display = "block";
    document.querySelector(".guess").value = "";
    document.querySelector(".number").width = "15rem";
    document.querySelector(".number").textContent = "?";
});
