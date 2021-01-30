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
const startDiv = document.querySelector('.start');
const wrapper = document.querySelector('.wrapper');

const playerScoreTracker = document.createElement('p');
const computerScoreTracker = document.createElement('p');
const roundMessage = document.createElement('p');
const endDiv = document.createElement('div');
const endMessage = document.createElement('p');
const startOverMessage = document.createElement('p');

playerScoreTracker.classList.add('start', 'hidden');
computerScoreTracker.classList.add('start', 'hidden');
roundMessage.classList.add('start', 'hidden');
endDiv.classList.add('start', 'hidden');
// endMessage.classList.add('start', 'hidden');
// startOverMessage.classList.add('start', 'hidden');

startOverMessage.textContent = 'To start over, just pick a new weapon!';

resultsDiv.appendChild(roundMessage);
resultsDiv.appendChild(playerScoreTracker);
resultsDiv.appendChild(computerScoreTracker);
resultsDiv.appendChild(endDiv);
endDiv.appendChild(endMessage);
endDiv.appendChild(startOverMessage);
// resultsDiv.appendChild(endMessage);
// resultsDiv.appendChild(startOverMessage);

//* creates and returns round messages with random number generator
function createRoundMessage(winner, weapon, num) {
  let message;

  //* if the computer wins this round:
  if (winner === 'computer') {
    //* if the computer picks rock
    if (weapon === 'rock') {
      switch (num) {
        case 0:
          message =
            'Scissors are no match against a rock! The computer beats you this time.';
          break;
        case 1:
          message = 'The computer wins this round! Rock smashes scissors.';
          break;
        case 2:
          message = "What a shame! The computer's rock breaks your scissors.";
          break;
        default:
          message = 'ERROR';
      }

      //* if the computer picks paper:
    } else if (weapon === 'paper') {
      switch (num) {
        case 0:
          message =
            "Your rock is no match for the machine's paper! You lose this round.";
          break;
        case 1:
          message = 'The computer wins this round! Paper hides rock.';
          break;
        case 2:
          message =
            'Did you really think a rock would defeat paper? The computer takes this round!';
          break;
        default:
          message = 'ERROR';
      }

      //* if the computer picks scissors:
    } else if (weapon === 'scissors') {
      switch (num) {
        case 0:
          message =
            "Oof! The computer's scissors slice right through your paper.";
          break;
        case 1:
          message = 'The computer wins this round! Scissors cut paper.';
          break;
        case 2:
          message =
            "You've brought shame on that nice paper. The computer shreds it with its scissors!";
          break;
        default:
          message = 'ERROR';
      }
    }

    //* if player is the winner:
  } else if (winner === 'player') {
    //* if the player picks rock
    if (weapon === 'rock') {
      switch (num) {
        case 0:
          message =
            'How did you do it?! You win this round - rock crushes scissors!';
          break;
        case 1:
          message = "You win this round! Rock smashes the computer's scissors.";
          break;
        case 2:
          message =
            "You really know your stuff! Your rock is way more dangerous than the computer's scissors.";
          break;
        default:
          message = 'ERROR';
      }

      //* if the player picks paper:
    } else if (weapon === 'paper') {
      switch (num) {
        case 0:
          message =
            "You successfully hide the computer's rock with your paper. It's nowhere to be found!";
          break;
        case 1:
          message = 'You win this round! Paper covers rock.';
          break;
        case 2:
          message =
            "The computer has no object permanence so your paper beats it's rock easily. If it can't see it, it doesn't exist!";
          break;
        default:
          message = 'ERROR';
      }

      //* if the player picks scissors:
    } else if (weapon === 'scissors') {
      switch (num) {
        case 0:
          message =
            "Have you no mercy for paper? Your scissors shred the computer's paper to smithereens!";
          break;
        case 1:
          message = 'You win this round! Scissors cut paper.';
          break;
        case 2:
          message =
            "You know, the computer told me it saved up a lot for that nice paper, and you're just slicing it with your scissors like it means nothing.";
          break;
        default:
          message = 'ERROR';
      }
    }

    //* if there is a tie
  } else if (winner === 'tie') {
    //* if both pick rock
    if (weapon === 'rock') {
      switch (num) {
        case 0:
          message = 'Well this is awkward. You both picked rock! Try again?';
          break;
        case 1:
          message = 'This round is a tie! Rocks all around.';
          break;
        case 2:
          message =
            'Nah, rocks are boring. Pick something else because this round was tie.';
          break;
        default:
          message = 'ERROR';
      }

      //* if both pick paper:
    } else if (weapon === 'paper') {
      switch (num) {
        case 0:
          message =
            "Did you give me an office job? I'm drowing in paper here! You tied, so please try again.";
          break;
        case 1:
          message = 'This round is a tie! Papers are flying everywhere.';
          break;
        case 2:
          message =
            "I have enough paperwork on my own, I don't need both you and the computer giving me more!";
          break;
        default:
          message = 'ERROR';
      }

      //* if both pick scissors:
    } else if (weapon === 'scissors') {
      switch (num) {
        case 0:
          message =
            "Between you and the computer, I'm feeling a little threatened by all the scissors. Maybe pick something else?";
          break;
        case 1:
          message =
            'This round is a tie! It appears you both have an affinity for scissors.';
          break;
        case 2:
          message =
            'I get it, I get it. Sharp pointy things are fun! But you both picked the same thing. Try again?';
          break;
        default:
          message = 'ERROR';
      }
    }
  } else {
    message = 'ERROR';
  }
  return message;
}

//* one round of gameplay with messages
function playRound(playerSelection, computerSelection) {
  const computerWinMessage = createRoundMessage(
    'computer',
    computerSelection,
    getRandomInt()
  );
  const playerWinMessage = createRoundMessage(
    'player',
    playerSelection,
    getRandomInt()
  );
  const tieMessage = createRoundMessage('tie', playerSelection, getRandomInt());

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
  if (roundMessage.classList.contains('hidden')) {
    roundMessage.classList.remove('hidden');
  }
}

//* plays game when button is clicked and keeps track of score
function game(e) {
  if (!startDiv.classList.contains('hidden')) {
    startDiv.classList.add('hidden');
    wrapper.classList.add('up');
  }
  if (playerScore >= 5 || computerScore >= 5) {
    //* resets scores to 0 if there has been a winner
    playerScore = 0;
    computerScore = 0;
    endDiv.classList.add('hidden');
    endDiv.classList.remove('end');
    // endMessage.classList.add('hidden');
    // endMessage.classList.remove('end');
    // startOverMessage.classList.add('hidden');
    // startOverMessage.classList.remove('end');
  }
  playRound(e.target.id, computerPlay());

  playerScoreTracker.textContent = `Your score: ${playerScore}`;
  computerScoreTracker.textContent = `Computer score: ${computerScore}`;

  playerScoreTracker.classList.remove('hidden');
  computerScoreTracker.classList.remove('hidden');

  if (playerScore === 5 || computerScore === 5) {
    playerScoreTracker.classList.add('hidden');
    computerScoreTracker.classList.add('hidden');
    endDiv.classList.remove('hidden');
    endDiv.classList.add('end');
    // endMessage.classList.remove('hidden');
    // endMessage.classList.add('end');
    // startOverMessage.classList.remove('hidden');
    // startOverMessage.classList.add('end');

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
