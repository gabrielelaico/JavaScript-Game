function computerPlay() {
    let choises = ["rock", "paper", "scissors"];
    return choises[Math.floor(Math.random() * 3)];
}
const computerSelection = computerPlay();
const inputOptions = ["rock", "paper", "scissors"];

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        tieGames++;
        return `It's a tie! you both picked ${playerSelection}`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "You win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You win! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "You win! Scissors beats Paper";
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

let playerScore = 0;
let computerScore = 0;
let tieGames = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("What are you picking? Rock, Paper, Scissors").toLowerCase();


        const computerSelection = computerPlay();
        console.log("You choose: " + playerSelection.toLowerCase());
        if (!inputOptions.includes(playerSelection)) {
            i--;
            console.log("Please enter a right choice!");
            continue;
        }

        console.log("The computer choose: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log('Player score:', playerScore);
        console.log('Computer score:', computerScore);
        console.log('Tie games:', tieGames);
    }
    if (playerScore > computerScore) {
        return "Well done! You're the WINNER!";
    }
    if (playerScore == computerScore) {
        return "This game is a tie.";
    }
    else {
        return "I'm sorry, You've LOST this game!";
    }
}


console.log(game());
