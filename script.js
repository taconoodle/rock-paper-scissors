console.log("Welcome to the rock paper scissors dev tools game!\nYou are going to play 5 rounds with our all-powerful CPU!\nMay the best one win!");

let playerScore = 0;
let cpuScore = 0;

const choices = ["Rock", "Paper", "Scissors"];

function main() {
    getPlayerChoice();
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

}

function playRound() {

}

main();