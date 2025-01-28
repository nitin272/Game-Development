const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const userScoreDisplay = document.getElementById('user-score');
const computerScoreDisplay = document.getElementById('computer-score');
const roundDisplay = document.getElementById('round');
const restartButton = document.getElementById('restart');
const possibleChoices = document.querySelectorAll('button:not(#restart)');

let userChoice;
let computerChoice;
let result;
let userScore = 0;
let computerScore = 0;
let round = 1;

// Event listener for choices
possibleChoices.forEach(choice =>
  choice.addEventListener('click', e => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
    updateScores();
    checkGameOver();
  })
);

// Generate random computer choice
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3); // 0, 1, 2
  const choices = ['rock', 'paper', 'scissors'];
  computerChoice = choices[randomNumber];
  computerChoiceDisplay.innerHTML = computerChoice;
}

// Determine result
function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a draw!";
  } else if (
    (computerChoice === 'rock' && userChoice === 'scissors') ||
    (computerChoice === 'scissors' && userChoice === 'paper') ||
    (computerChoice === 'paper' && userChoice === 'rock')
  ) {
    result = 'You lost!';
    computerScore++;
  } else {
    result = 'You win!';
    userScore++;
  }
  resultDisplay.innerHTML = result;
}

// Update scores and round
function updateScores() {
  userScoreDisplay.innerHTML = userScore;
  computerScoreDisplay.innerHTML = computerScore;
  round++;
  roundDisplay.innerHTML = round;
}

// Check if game is over
function checkGameOver() {
  if (round > 5) {
    const finalResult =
      userScore > computerScore
        ? 'Congratulations! You won the game!'
        : userScore < computerScore
        ? 'Sorry, you lost the game!'
        : "It's a draw!";
    resultDisplay.innerHTML = finalResult;

    // Disable buttons after game over
    possibleChoices.forEach(choice => (choice.disabled = true));
  }
}

// Restart the game
restartButton.addEventListener('click', () => {
  userScore = 0;
  computerScore = 0;
  round = 1;
  userScoreDisplay.innerHTML = userScore;
  computerScoreDisplay.innerHTML = computerScore;
  roundDisplay.innerHTML = round;
  resultDisplay.innerHTML = '';
  userChoiceDisplay.innerHTML = '';
  computerChoiceDisplay.innerHTML = '';

  // Re-enable buttons
  possibleChoices.forEach(choice => (choice.disabled = false));
});
