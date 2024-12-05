let options = ['rock', 'paper', 'scissors'];

let score = 0;

let computerScore = 0;

let roundsPlayed = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    return options[getRandomInt(3)];
}

function getUserChoice() {
    while (true)
    {
        let userChoice = prompt("Choose between 'rock', 'paper', and 'scissors'");
        if (userChoice === null) return;
        userChoice.toLowerCase();
        if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') return userChoice;
        else console.log(userChoice + ' is not a valid option');
    }
}

function calculateWinner(playerOne, playerTwo) {
    switch (playerOne) {
        case 'rock':
            switch (playerTwo) {
                case 'rock':
                    return 'tie';
                case 'paper':
                    return 'playerTwo';
                case 'scissors':
                    return 'playerOne';
            }
        case 'paper':
            switch (playerTwo) {
                case 'rock':
                    return 'playerOne';
                case 'paper':
                    return 'tie';
                case 'scissors':
                    return 'playerTwo';
            }
        case 'scissors':
            switch (playerTwo) {
                case 'rock':
                    return 'playerTwo';
                case 'paper':
                    return 'playerOne';
                case 'scissors':
                    return 'tie';
            }
    }
}

function playRound(playerChoice) {
    let computerChoice = getComputerChoice();

    let winner = calculateWinner(playerChoice, computerChoice);

    let result = '';

    switch (winner) {
        case 'playerOne':
            score++
            result = `You chose ${playerChoice}. The computer chose ${computerChoice}. You win!`;
            break;
        case 'playerTwo':
            computerScore++;
            result = `You chose ${playerChoice}. The computer chose ${computerChoice}. You lose!`;
            break;
        case 'tie':
            result = `You chose ${playerChoice}. The computer chose ${computerChoice}. It's a tie!`;
            break;
    }

    updateRoundsPlayed();

    displayResults(result);
}

function updateRoundsPlayed() {
    roundsPlayed++;

    let roundsPlayedText = document.querySelector("#rounds");
    roundsPlayedText.textContent = `Rounds played: ${roundsPlayed}`;
}

function displayResults(result = "") {
    let body = document.querySelector("body");

    let resultHeading = document.createElement("h2");
    resultHeading.textContent = "Results";

    body.appendChild(resultHeading);

    let resultText = document.createElement("p") 
    resultText.textContent = result;

    body.appendChild(resultText);
}

let span = document.querySelector("span");

span.addEventListener("click", (e) => {
    let target = e.target;
    let playerChoice = '';

    switch (target.id) {
        case "rock":
            playerChoice = "rock";
            break;
        case "paper":
            playerChoice = "paper";
            break;
        case "scissors":
            playerChoice = "scissors";
            break;
    }

    playRound(playerChoice);
});