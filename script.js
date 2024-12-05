let options = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    return options[getRandomInt(3)];
}

function calculateWinner(player, computer) {
    switch (player) {
        case 'rock':
            switch (computer) {
                case 'rock':
                    return 'tie';
                case 'paper':
                    return 'computer';
                case 'scissors':
                    return 'player';
            }
        case 'paper':
            switch (computer) {
                case 'rock':
                    return 'player';
                case 'paper':
                    return 'tie';
                case 'scissors':
                    return 'computer';
            }
        case 'scissors':
            switch (computer) {
                case 'rock':
                    return 'computer';
                case 'paper':
                    return 'player';
                case 'scissors':
                    return 'tie';
            }
    }
}

function playRound(playerChoice) {
    let computerChoice = getComputerChoice();
    let winner = calculateWinner(playerChoice, computerChoice);
    let playerColor;
    let computerColor;

    switch (winner) {
        case 'player':
            playerScore++
            playWinSound();
            playerColor = "#40ff86";
            computerColor = "#ff4040";
            break;
        case 'computer':
            computerScore++;
            playLoseSound();
            playerColor = "#ff4040";
            computerColor = "#40ff86";
            break;
        case 'tie':
            playLoseSound();
            playerColor = "#ffc940";
            computerColor = "#ffc940";
            break;
    }

    displayChoice(playerChoice, computerChoice, playerColor, computerColor);
    updateScore();
}

function updateScore() {
    playerScoreText.textContent = `SCORE: ${playerScore}`;
    computerScoreText.textContent = `SCORE: ${computerScore}`;
}

let playerChoices = document.querySelector("#playerChoices");
let playerScoreText = document.querySelector("#playerScore");
let computerScoreText = document.querySelector("#computerScore");
let playerRockButton = document.querySelector("#playerChoices #rock");
let playerPaperButton = document.querySelector("#playerChoices #paper");
let playerScissorsButton = document.querySelector("#playerChoices #scissors");
let computerRockButton = document.querySelector("#computerChoices #rock");
let computerPaperButton = document.querySelector("#computerChoices #paper");
let computerScissorsButton = document.querySelector("#computerChoices #scissors");

playerChoices.addEventListener("click", (event) => {
    if (event.target.id === "rock" || event.target.id === "paper" || event.target.id === "scissors")
    {
        let playerChoice = event.target.id;
        playRound(playerChoice);
    }
});

let playerButtons = document.querySelectorAll("#playerChoices button");
let computerButtons = document.querySelectorAll("#computerChoices button");

playerButtons.forEach((element) => {
    element.addEventListener("mouseover", (event) => {
        element.style.cursor = "pointer";
    });
});

function resetChoice() {
    playerButtons.forEach((element) => {
        element.style.borderColor = "white";
    });
    computerButtons.forEach((element) => {
        element.style.borderColor = "white";
    });
}

function displayChoice(playerChoice, computerChoice, playerColor, computerColor) {
    resetChoice();

    switch (playerChoice) {
        case "rock":
            playerRockButton.style.borderColor = playerColor;
            break;
        case "paper":
            playerPaperButton.style.borderColor = playerColor;
            break;
        case "scissors":
            playerScissorsButton.style.borderColor = playerColor;
            break;
        default:
            break;
    }
    switch (computerChoice) {
        case "rock":
            computerRockButton.style.borderColor = computerColor;
            break;
        case "paper":
            computerPaperButton.style.borderColor = computerColor;
            break;
        case "scissors":
            computerScissorsButton.style.borderColor = computerColor;
            break;
        default:
            break;
    }
}

function playWinSound() {
    let audio = new Audio("audio/correct.mp3");
    audio.play();
}

function playLoseSound() {
    let audio = new Audio("audio/incorrect.mp3");
    audio.play();
}