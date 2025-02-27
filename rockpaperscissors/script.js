//generate  a random choice for the computer
function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  for (let i = 0; i < options.length; i++) {
    const randomNumber = Math.floor(Math.random() * options.length);
    return options[randomNumber];
  }
}
console.log(getRandomComputerResult());

function hasPlayerWonTheRound(player, computer) {
  if (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(hasPlayerWonTheRound("Rock", "Scissors"));
console.log(hasPlayerWonTheRound("Scissors", "Rock"));

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();
  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (userOption === computerResult) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

console.log(getRoundResults("Rock"));
console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
   
    const resultMessage = getRoundResults(userOption);

  
    playerScoreSpanElement.innerText = playerScore;   
    computerScoreSpanElement.innerText = computerScore; 

   
    roundResultsMsg.innerText = resultMessage;
    if (playerScore === 3) {
        winnerMsgElement.innerText = "Player has won the game!";
        optionsContainer.style.display = "none"
        resetGameBtn.style.display = "block"

    } else {
        winnerMsgElement.innerText = "Computer has won the game!";
        optionsContainer.style.display = "none"
        resetGameBtn.style.display = "block"
    }
};

showResults("Rock");
//label dynamic
//a function fgg
function resetGame() {
    playerScore = 0;
    computerScore = 0;

    playerScoreSpanElement.innerText = playerScore;   
    computerScoreSpanElement.innerText = computerScore; 
    resetGameBtn.style.display = "none";
    optionsContainer.style.display = "block"

    winnerMsgElement.innerText = "";
    roundResultsMsg.innerText = ""

};

resetGameBtn.addEventListener("click", resetGame);

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});