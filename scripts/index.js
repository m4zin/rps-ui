function randomizeComputerSelection() {
    let plays = ['rock', 'paper', 'scissors']
    return plays[(Math.floor(Math.random() * plays.length))]
}

let playerScore = 0;
let computerScore = 0;

for (let i = 0; i <= 2; i++) {
  document.querySelectorAll('button')[i].addEventListener('click', function () {

    const messageComputerPlay = document.querySelector('.text-one')
    const messageRoundWinOrLose = document.querySelector('.text-two')

    const messageUserScore = document.querySelector('.user-score')
    const messageComputerScore = document.querySelector('.computer-score')

    let playerSelection = ''
    let computerSelection = randomizeComputerSelection()

    if(i == 0) 
    {
        playerSelection = 'rock'
    } 
    else if(i == 1) 
    {
        playerSelection = 'paper'
    } 
    else if(i == 2) 
    {
        playerSelection = 'scissors'
    }

    if(playerSelection == computerSelection)
    {
        messageComputerPlay.textContent = `Computer also chose ${computerSelection},`
        messageRoundWinOrLose.textContent = 'Round tied.'
    }
    else if(computerSelection == 'rock' && playerSelection == 'scissors')
    {
        messageComputerPlay.textContent = `Computer chose ${computerSelection},`
        messageRoundWinOrLose.textContent = 'Round lost.'
        computerScore++

        messageUserScore.textContent = playerScore
        messageComputerScore.textContent = computerScore
    }
    else if(computerSelection == 'paper' && playerSelection == 'rock') 
    {
        messageComputerPlay.textContent = `Computer chose ${computerSelection},`
        messageRoundWinOrLose.textContent = 'Round lost.'
        computerScore++

        messageUserScore.textContent = playerScore
        messageComputerScore.textContent = computerScore
    }
    else if(computerSelection == 'scissors' && playerSelection == 'paper')
    {
        messageComputerPlay.textContent = `Computer chose ${computerSelection},`
        messageRoundWinOrLose.textContent = 'Round lost.'
        computerScore++

        messageUserScore.textContent = playerScore
        messageComputerScore.textContent = computerScore
    }
    else {
        messageComputerPlay.textContent = `Computer chose ${computerSelection},`
        messageRoundWinOrLose.textContent = 'Round won!'
        playerScore++

        messageUserScore.textContent = playerScore
        messageComputerScore.textContent = computerScore
    }

    if(playerScore == 5) 
    {
        messageComputerPlay.textContent = `Computer chose ${computerSelection},`
        messageRoundWinOrLose.style.color = 'green'
        messageRoundWinOrLose.textContent = 'You win the game!'

        messageUserScore.textContent = playerScore
        messageComputerScore.textContent = computerScore

        playerScore = 0;
        computerScore = 0;

    } 
    else if(computerScore == 5) 
    {
        messageComputerPlay.textContent = `Computer chose ${computerSelection},`
        messageRoundWinOrLose.style.color = 'red'
        messageRoundWinOrLose.textContent = 'You lose the game!'

        messageUserScore.textContent = playerScore
        messageComputerScore.textContent = computerScore

        playerScore = 0;
        computerScore = 0;
    }

  });
}