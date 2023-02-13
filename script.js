/** @format */

"use strict";

// Variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreLeft = Number(document.querySelector(".score").textContent);
let highScore = Number(document.querySelector(".highscore").textContent);
console.log(`The secret number is ${secretNumber}`);
