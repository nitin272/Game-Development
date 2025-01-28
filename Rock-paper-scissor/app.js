// Select HTML elements
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const userScoreDisplay = document.getElementById('user-score');
const computerScoreDisplay = document.getElementById('computer-score');
const resetButton = document.getElementById('reset');
const choices = document.querySelectorAll('.choices button');

// Variables for scores
let userScore = 0;
let computerScore = 0;
let userChoice;
let computerChoice;
let result;

// Event listener for player choices
choices.forEach(choice => {
  choice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = e.target.innerHTML; // Add emojis
    userChoiceDisplay.classList.add('animated');
    setTimeout(() => userChoiceDisplay.classList.remove('animated'), 500);

    generateComputerChoice();
    getResult();
  });
});

// Generate computer's random choice
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3); // 0, 1, or 2
  switch (randomNumber) {
    case 0:
      computerChoice = 'rock';
      computerChoiceDisplay.innerHTML = '🪨 Rock';
      break;
    case 1:
      computerChoice = 'paper';
      computerChoiceDisplay.innerHTML = '📄 Paper';
      break;
    case 2:
      computerChoice = 'scissors';
      computerChoiceDisplay.innerHTML = '✂️ Scissors';
      break;
  }
  computerChoiceDisplay.classList.add('animated');
  setTimeout(() => computerChoiceDisplay.classList.remove('animated'), 500);
}

// Determine the result of the game
function getResult() {
  if (userChoice === computerChoice) {
    result = 'It\'s a draw!';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'rock')
  ) {
    result = 'You win!';
    userScore++;
    highlight('user');
  } else {
    result = 'You lose!';
    computerScore++;
    highlight('computer');
  }

  resultDisplay.innerHTML = result;
  userScoreDisplay.innerText = userScore;
  computerScoreDisplay.innerText = computerScore;
}

// Highlight the winning choice
function highlight(winner) {
  if (winner === 'user') {
    userChoiceDisplay.classList.add('highlight');
    setTimeout(() => userChoiceDisplay.classList.remove('highlight'), 1000);
  } else {
    computerChoiceDisplay.classList.add('highlight');
    setTimeout(() => computerChoiceDisplay.classList.remove('highlight'), 1000);
  }
}

// Reset the game
resetButton.addEventListener('click', () => {
  userScore = 0;
  computerScore = 0;
  userChoiceDisplay.innerHTML = '';
  computerChoiceDisplay.innerHTML = '';
  resultDisplay.innerHTML = '';
  userScoreDisplay.innerText = userScore;
  computerScoreDisplay.innerText = computerScore;
});
