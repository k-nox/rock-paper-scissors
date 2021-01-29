//* returns random number between 0 and 2, inclusive
function getRandomInt() {
  return Math.floor(Math.random() * 3);
}

//* converts number between 0-2 into rock, paper, or scissors
function convertRandomInt(num) {
  let answer = '';
  switch (num) {
    case 0:
      answer = 'rock';
      break;
    case 1:
      answer = 'paper';
      break;
    case 2:
      answer = 'scissors';
      break;
    default:
      answer = 'ERROR';
  }
  return answer;
}

//* calls getRandomInt and converts result using convertRandomInt
function computerPlay() {
  const result = getRandomInt();
  return convertRandomInt(result);
}
let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const resultsDiv = document.querySelector('.results');

const playerScoreTracker = document.createElement('p');
const computerScoreTracker = document.createElement('p');
const roundMessage = document.createElement('p');
const endMessage = document.createElement('p');
const startOverMessage = document.createElement('p');

playerScoreTracker.classList.add('generated', 'hidden');
computerScoreTracker.classList.add('generated', 'hidden');
roundMessage.classList.add('generated', 'hidden');
endMessage.classList.add('generated', 'hidden');
startOverMessage.classList.add('generated', 'hidden');

startOverMessage.textContent = 'To start over, just pick a new weapon!';

resultsDiv.appendChild(roundMessage);
resultsDiv.appendChild(playerScoreTracker);
resultsDiv.appendChild(computerScoreTracker);
resultsDiv.appendChild(endMessage);
resultsDiv.appendChild(startOverMessage);

//* one round of gameplay with messages
function playRound(playerSelection, computerSelection) {
  const computerWinMessage = `The computer wins this round - ${computerSelection} beats ${playerSelection}!`;
  const playerWinMessage = `You won this round - ${playerSelection} beats ${computerSelection}!`;
  const tieMessage = 'This round was a tie.';

  if (playerSelection === computerSelection) {
    roundMessage.textContent = tieMessage;
  } else if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      roundMessage.textContent = computerWinMessage;
      computerScore++;
    } else {
      roundMessage.textContent = playerWinMessage;
      playerScore++;
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      roundMessage.textContent = playerWinMessage;
      playerScore++;
    } else {
      roundMessage.textContent = computerWinMessage;
      computerScore++;
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      roundMessage.textContent = computerWinMessage;
      computerScore++;
    } else {
      roundMessage.textContent = playerWinMessage;
      playerScore++;
    }
  }
  roundMessage.classList.remove('hidden');
}

//* plays game when button is clicked and keeps track of score
function game(e) {
  if (playerScore >= 5 || computerScore >= 5) {
    //* resets scores to 0 if there has been a winner
    playerScore = 0;
    computerScore = 0;
    endMessage.classList.add('hidden');
    endMessage.classList.remove('end');
    startOverMessage.classList.add('hidden');
    startOverMessage.classList.remove('end');
  }
  playRound(e.target.id, computerPlay());

  playerScoreTracker.textContent = `Your score: ${playerScore}`;
  computerScoreTracker.textContent = `Computer score: ${computerScore}`;

  playerScoreTracker.classList.remove('hidden');
  computerScoreTracker.classList.remove('hidden');

  if (playerScore === 5 || computerScore === 5) {
    playerScoreTracker.classList.add('hidden');
    computerScoreTracker.classList.add('hidden');
    endMessage.classList.remove('hidden');
    endMessage.classList.add('end');
    startOverMessage.classList.remove('hidden');
    startOverMessage.classList.add('end');

    if (playerScore === 5) {
      endMessage.textContent = `Game over! You beat the computer ${playerScore} to ${computerScore}!`;
    } else {
      endMessage.textContent = `How embarassing! The computer beat you ${computerScore} to ${playerScore}.`;
    }
  }
}

rock.addEventListener('click', game);
paper.addEventListener('click', game);
scissors.addEventListener('click', game);
