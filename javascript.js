let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let computerChoice = "";

//rock = 1
//paper = 2
//scissors = 3

const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");
const computerChoiceDisplay = document.querySelector("#computerChoiceDisplay");
const roundWinnerDisplay = document.querySelector("#RoundWinner");
const humanScoreDisplay = document.querySelector("#humanScore");
const computerScoreDisplay = document.querySelector("#computerScore");


rockButton.addEventListener("click", () => {
    alert("rock selected");
    getHumanChoice("rock");
    setComputerChoice();
    playRound(humanChoice, computerChoice);
});

paperButton.addEventListener("click", () => {
    alert("paper selected");
    getHumanChoice("paper");
    setComputerChoice();
    playRound(humanChoice, computerChoice);
});

scissorsButton.addEventListener("click", () => {
    alert("scissors selected");
    getHumanChoice("scissors");
    setComputerChoice();
    playRound(humanChoice, computerChoice);
});


function setComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        computerChoice = "rock";
    } else if (randomNumber === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    
    // Corrected string interpolation with backticks
    computerChoiceDisplay.textContent = `Computer chose: ${computerChoice}`;
    console.log(`Computer chose: ${computerChoice}`);
}

function getHumanChoice(choice) {
    humanChoice = choice;
    console.log(humanChoice);
}

//rock = 1
//paper = 2
//scissors = 3

function playRound(humanChoice, computerChoice) {
    let roundWinner = "";

    if(humanChoice == computerChoice) {
        roundWinner = "tie";
    } else if(
       (humanChoice == "rock" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "rock")) {
            roundWinner = "computer";
            computerScore++;
    } else {
        roundWinner = "human";
        humanScore++;
    }
    roundWinnerDisplay.textContent = `Round Winner: ${roundWinner}`;
    humanScoreDisplay.textContent = `Human Score: ${humanScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

    if(humanScore == 5) {
        humanScore = 0;
        computerScore = 0;
        alert("Human won!");
    } else if(computerScore == 5) {
        humanScore = 0;
        computerScore = 0;
        alert("Computer won!");
    }
}
