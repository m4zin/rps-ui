function randomizeComputerSelection() {
    let plays = ['rock', 'paper', 'scissors']
    return plays[(Math.floor(Math.random() * plays.length))]
}

for (let i = 0; i <= 2; i++) {
  document.querySelectorAll('button')[i].addEventListener('click', function () {

    if(i == 0) {
        playerSelection = 'rock'
    } else if(i == 1) {
        playerSelection = 'paper'
    } else if(i == 2) {
        playerSelection = 'scissors'
    }

  });
}

let playerSelection = '';
let computerSelection = randomizeComputerSelection()