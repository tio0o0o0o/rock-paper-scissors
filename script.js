let options = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

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
        checkGameFinished();
    }
});

let playerButtons = document.querySelectorAll("#playerChoices button");
let computerButtons = document.querySelectorAll("#computerChoices button");

function checkGameFinished() {
    let winnerTextString = "";
    let winnerImageString = "";
    let playSoundEffect;

    if (playerScore >= 5) {
        winnerTextString = "PLAYER WINS!";
        winnerImageString = "images/player.png";
        playSoundEffect = playFinalWinSound;
    }
    else if (computerScore >= 5) {
        winnerTextString = "COMPUTER WINS!";
        winnerImageString = "images/computer.png";
        playSoundEffect = playFinalLoseSound;
    }
    else {
        return;
    }

    showEndScreen(winnerTextString, winnerImageString, playSoundEffect);
}

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

function playFinalWinSound() {
    let audio = new Audio("audio/win.mp3");
    audio.play();
}

function playFinalLoseSound() {
    let audio = new Audio("audio/lose.mp3");
    audio.play();
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    resetChoice();
    updateScore();
}

let cardWrapper = document.querySelector("#cardWrapper");
let subtitle = document.querySelector("#subtitle");
let endScreen = document.querySelector("#endScreen");
let playAgain = document.querySelector("#playAgain");
let winnerText = document.querySelector("#endScreen p");
let winnerImage = document.querySelector("#endScreen img");

function showEndScreen(winnerTextString, winnerImageString, playSoundEffect) {
    winnerText.textContent = winnerTextString;
    winnerImage.src = winnerImageString;

    cardWrapper.style.display = "none";
    subtitle.style.display = "none";
    endScreen.style.display = "flex";

    playSoundEffect();
}

function showGameplayScreen() {
    cardWrapper.style.display = "flex";
    subtitle.style.display = "block";
    endScreen.style.display = "none";
}

playAgain.addEventListener("click", (event) => {
    reset();
    showGameplayScreen();
});
