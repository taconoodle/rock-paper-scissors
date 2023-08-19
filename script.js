"use strict";

console.log("Welcome to the rock paper scissors dev tools game!\nYou are going to play 5 rounds with our all-powerful CPU!\nMay the best one win!");

let playerScore = 0;
let cpuScore = 0;

const choices = ["Rock", "Paper", "Scissors"];
function main() {
    for(let i = 0; i < 5; i++) {
        playRound(getPlayerChoice(), getCpuChoice());
    }
    while (playerScore === cpuScore) {
        playRound(getPlayerChoice(), getCpuChoice());
    }
    checkWinner();
}

function getPlayerChoice() {
    while (true) {
        let choice = prompt("Choose your weapon!");
        choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
        if (choices.includes(choice)) {
            return choice;
        }
    }
}

function getCpuChoice() {
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function playRound(playerChoice, cpuChoice) {
    if(playerChoice === cpuChoice) {
        console.log("It's a draw!");
        return;
    }
    if((playerChoice === "Rock" && cpuChoice === "Scissors") || (playerChoice === "Scissors" && cpuChoice === "Paper") || (playerChoice === "Paper" && cpuChoice === "Rock")) {
        console.log(`CPU used ${cpuChoice}! You win!`);
        playerScore++;
        return;
    }
    else {
        console.log(`CPU used ${cpuChoice}! You lose!`);
        cpuScore++;
        return;
    }
}

function checkWinner() {
    console.log(`The final score is Player: ${playerScore} - CPU: ${cpuScore}!`);
    if(playerScore > cpuScore) {
        console.log(`You managed to beat the all-powerful CPU!`);
        return;
    }
    else {
        console.log(`The CPU remains the most powerful!`);
        return;
    }
}

main();