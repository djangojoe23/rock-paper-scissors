const choiceButtons = document.querySelectorAll(".rps-button");
const resultObject = document.querySelector("#results");
const scoreObject = document.querySelector("#score");

choiceButtons.forEach(button => {
    button.addEventListener('click', playerChooses);
});

function playerChooses(event) {
    const playerMove = event.target.getAttribute('id');
    console.log(`Player chose: ${playerMove}`);
    playRound(playerMove);
}

function getComputerChoice(){
    let randomNumber = Math.ceil(3*Math.random());
    if (randomNumber === 1){
        return 'rock';
    }
    else if(randomNumber === 2){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice){
    
    let computerChoice = getComputerChoice();

    let resultMessage = '';
    if (humanChoice === computerChoice){
        resultMessage = 'The game is a tie!';
    }
    else if(
        (humanChoice === 'rock' && computerChoice === 'scissors') || 
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') 
    ){
        resultMessage = `You win! ${humanChoice} beats ${computerChoice}!`;
        humanScore++;
    }
    else{
        resultMessage = `The computer wins! ${computerChoice} beats ${humanChoice}!`;
        computerScore++;
    }

    resultObject.innerText = `You chose ${humanChoice}. The computer chose ${computerChoice}. ${resultMessage}`;
    scoreObject.innerText = `You have ${humanScore} points and the computer has ${computerScore}.`;
    if (humanScore === 5){
        scoreObject.innerText += "\n\nYou were the first to reach 5 points! You win!";
        humanScore = 0;
        computerScore = 0;
    }
    else if(computerScore === 5){
        scoreObject.innerText += "\n\nThe computer was the first to reach 5 points! You lose!";
        humanScore = 0;
        computerScore = 0;
    }
}

