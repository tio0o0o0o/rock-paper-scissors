let options = ['rock', 'paper', 'scissors'];

let score = 0;

let computerScore = 0;

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

function playRound() {
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();

    let winner = calculateWinner(userChoice, computerChoice);

    switch (winner) {
        case 'playerOne':
            score++
            console.log(`You chose ${userChoice}. The computer chose ${computerChoice}. You win!`);
            break;
        case 'playerTwo':
            computerScore++;
            console.log(`You chose ${userChoice}. The computer chose ${computerChoice}. You lose!`);
            break;
        case 'tie':
            console.log(`You chose ${userChoice}. The computer chose ${computerChoice}. It's a tie!`);
            break;
    }
}

function calculateFinalWinner() {
    if (score > computerScore) return 'user';
    else if (score < computerScore) return 'computer';
    else return 'tie';
}

function playGame()
{
    for (let i = 0; i < 5; i++)
    {
        playRound();
    }
    
    if (calculateFinalWinner() === 'user') {
        console.log(`You win! Your score is ${score}`);
    }
    else if (calculateFinalWinner() === 'computer') {
        console.log(`You lose! Your score is ${score}`);
    }
    else {
        console.log(`It's a tie! Your score is ${score}`);
    }
}

function repeatGame() {
    while (true) {
        playGame();
        score = 0;
        computerScore = 0;
        if (getPlayAgain() === false) break;
    }
}

function getPlayAgain() {
    while (true)
    {
        playAgain = prompt("Play again? y/n").toLowerCase();
        if (playAgain === 'y') return true;
        else if (playAgain === 'n') return false;
    }
}

repeatGame();