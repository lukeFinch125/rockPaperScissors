let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber == 1) {
        return "rock";
    } else if(randomNumber == 2) {
        return "scissors"; 
    } else {
        return "paper";
    }
}

function getHumanChoice() {
    const userInput = prompt("Rock(1), Paper(2), Scissors(3)");
    if (userInput == 1) {
        return "rock";
    } else if (userInput == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice == computerChoice) {
        console.log("Tie, no score change");
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        console.log("computer won");
    } else if(humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        console.log("human won");
    } else if(humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        console.log("human won");
    } else if(humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        console.log("computer won");
    } else if(humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        console.log("computer won");
    } else if(humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        console.log("human won");
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
    for(i = 0; i < 5; i++) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
    }
    console.log(humanScore, computerScore);
}