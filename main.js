//* returns random number between 0 and 2, inclusive
function getRandomInt() {
  return Math.floor(Math.random() * 3);
}

//* converts number between 0-2 into rock, paper, or scissors
function convertRandomInt(num) {
  switch (num) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
  }
}

//* calls getRandomInt and converts result using convertRandomInt
function computerPlay() {
  let result = getRandomInt();
  return convertRandomInt(result);
}

// obtains player answer and converts to match computer answer
// function playerPlay() {
//   let result = prompt('Rock, paper, or scissors?');

//   const rock = /^r[0o][ck]{2}$/i;
//   const paper = /^p[a@]p[e3]r$/i;
//   const scissors = /^[s5z][ck]i[s5z]{2}[o0]r[s5z]$/i;

//   result = result.replace(rock, 'rock');
//   result = result.replace(paper, 'paper');
//   result = result.replace(scissors, 'scissors');

//   if (result === 'rock' || result === 'paper' || result === 'scissors') {
//     return result;
//   } else {
//     return 'There must be an error somewhere. Please try again!';
//   }
// }

// runs playerPlay and computerPlay and returns result of one round
// let finalResult;

// function playRound(playerSelection, computerSelection) {
//   let playerAnswer = playerSelection();
//   let computerAnswer = computerSelection();

//   if (playerAnswer === computerAnswer) {
//     finalResult = 'tie';
//     return finalResult;
//   } else if (playerAnswer === 'rock') {
//     if (computerAnswer === 'paper') {
//       finalResult = 'You lose! Paper beats rock.';
//       return finalResult;
//     } else {
//       finalResult = 'You win! Rock smashes scissors.';
//       return finalResult;
//     }
//   } else if (playerAnswer === 'paper') {
//     if (computerAnswer === 'rock') {
//       finalResult = 'You win! Paper beats rock.';
//       return finalResult;
//     } else {
//       finalResult = 'You lose! Scissors cut paper.';
//       return finalResult;
//     }
//   } else if (playerAnswer === 'scissors') {
//     if (computerAnswer === 'paper') {
//       finalResult = 'You win! Scissors cut paper.';
//       return finalResult;
//     } else {
//       finalResult = 'You lose! Rock smashes scissors.';
//       return finalResult;
//     }
//   } else {
//     finalResult = 'There must be an error somewhere, please try again!';
//     return finalResult;
//   }
// }

// function game() {
//   let computerScore = 0;
//   let playerScore = 0;
//   for (let i = 0; i < 5; i++) {
//     playRound(playerPlay, computerPlay);
//     switch (finalResult) {
//       case 'tie':
//         console.log(`Round Results: You tied! Let's keep going.
//                         Computer score: ${computerScore}
//                         Player Score: ${playerScore} `);
//         break;
//       case 'You lose! Paper beats rock.':
//         computerScore++;
//         console.log(`Round Results: ${finalResult}
//                         Computer score: ${computerScore}
//                         Player Score: ${playerScore} `);
//         break;
//       case 'You win! Rock smashes scissors.':
//         playerScore++;
//         console.log(`Round Results: ${finalResult}
//                         Computer score: ${computerScore}
//                         Player Score: ${playerScore} `);
//         break;
//       case 'You win! Paper beats rock.':
//         playerScore++;
//         console.log(`Round Results: ${finalResult}
//                         Computer score: ${computerScore}
//                         Player Score: ${playerScore} `);
//         break;
//       case 'You lose! Scissors cut paper.':
//         computerScore++;
//         console.log(`Round Results: ${finalResult}
//                         Computer score: ${computerScore}
//                         Player Score: ${playerScore} `);
//         break;
//       case 'You win! Scissors cut paper.':
//         playerScore++;
//         console.log(`Round Results: ${finalResult}
//                         Computer score: ${computerScore}
//                         Player Score: ${playerScore} `);
//         break;
//       case 'You lose! Rock smashes scissors.':
//         computerScore++;
//         console.log(`Round Results: ${finalResult}
//                         Computer score: ${computerScore}
//                         Player Score: ${playerScore} `);
//         break;
//       default:
//         console.log(
//           'Sorry, I think there is an error somewhere. Pleae try again!'
//         );
//     }
//   }
//   if (playerScore > computerScore) {
//     console.log(
//       `Congrats! You beat the computer ${playerScore} to ${computerScore}`
//     );
//   } else if (playerScore < computerScore) {
//     console.log(
//       `Oof... The computer beat you ${computerScore} to ${playerScore}!`
//     );
//   } else {
//     console.log(`Looks like you tied this time! Wanna go again?`);
//   }
// }

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', playerPlay);
paper.addEventListener('click', playerPlay);
scissors.addEventListener('click', playerPlay);

function playerPlay(e) {
  playRound(e.target.id, computerPlay());
}

function playRound(playerSelection, computerSelection) {
  const computerWin = 'computer win';
  const playerWin = 'player win';

  if (playerSelection === computerSelection) {
    console.log('tie');
    return 'tie';
  } else if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      console.log(computerWin);
      return computerWin;
    } else {
      console.log(playerWin);
      return playerWin;
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      console.log(playerWin);
      return playerWin;
    } else {
      console.log(computerWin);
      return computerWin;
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      console.log(computerWin);
      return computerWin;
    } else {
      console.log(playerWin);
      return playerWin;
    }
  } else {
    return 'ERROR';
  }
}
